import { NextResponse } from 'next/server';

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function GET() {
  const ip = 'veles.imba.land';
  const startTime = Date.now();
  
  // Try the ultra-reliable and fast api.mcstatus.io first for best 1.21.1 support
  try {
    const res = await fetchWithTimeout(`https://api.mcstatus.io/v2/status/java/${ip}`, {
      next: { revalidate: 10 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, 5000);
    
    if (res.ok) {
      const data = await res.json();
      const endTime = Date.now();
      const latency = endTime - startTime;

      return NextResponse.json({
        online: data.online || false,
        playersOnline: data.players?.online || 0,
        playersMax: data.players?.max || 100,
        version: data.version?.name_clean || '1.21.1',
        motd: data.motd?.clean || 'Сервер Техно Безумие',
        latency: latency,
        playersList: data.players?.list?.map((p: any) => p.name_clean || p.name) || [],
        error: false
      });
    }
  } catch (err) {
    console.error('Error fetching from mcstatus.io:', err);
  }

  // Backup 1: api.mcsrvstat.us
  try {
    const res = await fetchWithTimeout(`https://api.mcsrvstat.us/3/${ip}`, {
      next: { revalidate: 10 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, 5000);
    
    if (res.ok) {
      const data = await res.json();
      const endTime = Date.now();
      const latency = endTime - startTime;

      return NextResponse.json({
        online: data.online || false,
        playersOnline: data.players?.online || 0,
        playersMax: data.players?.max || 100,
        version: data.version || '1.21.1',
        motd: data.motd?.clean?.join('\n') || 'Сервер Техно Безумие',
        latency: latency,
        playersList: data.players?.list || [],
        error: false
      });
    }
  } catch (err) {
    console.error('Error fetching from mcsrvstat:', err);
  }

  // Backup 2: mcapi.us
  try {
    const res = await fetchWithTimeout(`https://mcapi.us/server/status?ip=${ip}`, {
      next: { revalidate: 10 }
    }, 5000);
    if (res.ok) {
      const data = await res.json();
      const endTime = Date.now();
      const latency = endTime - startTime;

      return NextResponse.json({
        online: data.online || false,
        playersOnline: data.players?.now || 0,
        playersMax: data.players?.max || 100,
        version: data.server?.name || '1.21.1',
        motd: data.motd || 'Сервер Техно Безумие',
        latency: latency,
        playersList: [],
        error: false
      });
    }
  } catch (err) {
    console.error('Error fetching from mcapi.us:', err);
  }

  // Default mock fallback to display as offline if everything times out
  return NextResponse.json({
    online: false,
    playersOnline: 0,
    playersMax: 0,
    version: '1.21.1',
    motd: 'Сервер отключен или перегружен',
    latency: 999,
    playersList: [],
    error: true
  });
}
