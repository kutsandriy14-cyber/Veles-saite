'use client';

import { useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Server, 
  Copy, 
  Download, 
  ExternalLink,
  Video, 
  Youtube, 
  Settings, 
  Cpu, 
  CheckCircle2, 
  Tv, 
  ArrowRight, 
  ChevronDown, 
  Users, 
  Clock, 
  Calendar, 
  Sparkles, 
  Timer,
  ShieldAlert,
  Sprout,
  Droplets,
  Flame,
  Atom,
  RefreshCw,
  Zap,
  ScrollText
} from 'lucide-react';

// Fixed world start timestamp for Server 1 (TerraFirmaGreg)
const WORLD_START_TIMESTAMP = new Date('2026-08-27T06:32:00.000Z').getTime();

// Fixed world start timestamp for Server 2 (Reclamation: Hardcore Edition - September 27, 2026 18:00 UTC)
const RECLAMATION_START_TIMESTAMP = new Date('2026-09-27T18:00:00.000Z').getTime();

function subscribeTimer(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getElapsedSecondsClientSnapshot(): number {
  return Math.max(0, Math.floor((Date.now() - WORLD_START_TIMESTAMP) / 1000));
}

function getElapsedSecondsServerSnapshot(): number {
  return 135300;
}

function getReclamationElapsedSecondsClientSnapshot(): number {
  return Math.max(0, Math.floor((Date.now() - RECLAMATION_START_TIMESTAMP) / 1000));
}

function getReclamationElapsedSecondsServerSnapshot(): number {
  return 3600;
}

function getFormattedStartDateClient(): string {
  const startDate = new Date(WORLD_START_TIMESTAMP);
  const day = startDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const time = startDate.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });
  return `${day} в ${time}`;
}

function getFormattedStartDateServer(): string {
  return '27 августа 2026 г. в 09:32';
}

function getReclamationFormattedStartDateClient(): string {
  const startDate = new Date(RECLAMATION_START_TIMESTAMP);
  const day = startDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const time = startDate.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });
  return `${day} в ${time}`;
}

function getReclamationFormattedStartDateServer(): string {
  return '27 сентября 2026 г. в 21:00';
}

function getPluralWord(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

export default function HomePage() {
  const [activeServer, setActiveServer] = useState<'tfg' | 'reclamation'>('tfg');
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [tfgAccordion, setTfgAccordion] = useState<number | null>(0);

  const elapsedSeconds = useSyncExternalStore(
    subscribeTimer,
    getElapsedSecondsClientSnapshot,
    getElapsedSecondsServerSnapshot
  );

  const startDateFormatted = useSyncExternalStore(
    subscribeTimer,
    getFormattedStartDateClient,
    getFormattedStartDateServer
  );

  const reclamationElapsedSeconds = useSyncExternalStore(
    subscribeTimer,
    getReclamationElapsedSecondsClientSnapshot,
    getReclamationElapsedSecondsServerSnapshot
  );

  const reclamationStartDateFormatted = useSyncExternalStore(
    subscribeTimer,
    getReclamationFormattedStartDateClient,
    getReclamationFormattedStartDateServer
  );

  // Real time calculation for TFG
  const days = Math.floor(elapsedSeconds / (24 * 3600));
  const hours = Math.floor((elapsedSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  // Real time calculation for Reclamation
  const recDays = Math.floor(reclamationElapsedSeconds / (24 * 3600));
  const recHours = Math.floor((reclamationElapsedSeconds % (24 * 3600)) / 3600);
  const recMinutes = Math.floor((reclamationElapsedSeconds % 3600) / 60);
  const recSeconds = reclamationElapsedSeconds % 60;

  const handleCopy = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  const isReclamation = activeServer === 'reclamation';

  return (
    <main className={`min-h-screen ${isReclamation ? 'reclamation-atmosphere selection:bg-emerald-500/30' : 'atmosphere selection:bg-[#f27d26]/30'} text-gray-100 overflow-x-hidden relative font-sans transition-colors duration-500`}>
      
      {/* Optimized Background Lighting & Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {isReclamation ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-emerald-500/[0.08] rounded-full blur-[110px] transform-gpu" />
            <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-lime-500/[0.06] rounded-full blur-[120px] transform-gpu" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/[0.03] rounded-full blur-[160px] transform-gpu" />
            
            {/* Subtle floating spore particles (pure CSS hardware accelerated) */}
            <div className="spore-1 absolute left-[15%] top-[60%] w-2 h-2 rounded-full bg-emerald-400/40 blur-[1px] transform-gpu" />
            <div className="spore-2 absolute left-[45%] top-[75%] w-2.5 h-2.5 rounded-full bg-lime-400/30 blur-[1px] transform-gpu" />
            <div className="spore-3 absolute left-[78%] top-[65%] w-1.5 h-1.5 rounded-full bg-amber-400/35 blur-[1px] transform-gpu" />
            <div className="spore-1 absolute left-[85%] top-[40%] w-2 h-2 rounded-full bg-emerald-300/30 blur-[1px] transform-gpu" />
            
            {/* Dust grid overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:32px_32px]" />
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f27d26]/8 rounded-full blur-[100px] transform-gpu" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-[100px] transform-gpu" />
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 lg:py-10 relative z-10 min-h-screen flex flex-col">
        
        {/* Navigation Bar between Servers */}
        <header className="mb-6 relative z-20">
          <div className="glass-card rounded-2xl p-2 sm:p-2.5 border border-white/10 backdrop-blur-xl bg-black/60 shadow-2xl flex items-center justify-center">
            
            {/* Server Switcher: Two Tabs */}
            <div className="grid grid-cols-2 gap-2 bg-black/70 p-1.5 rounded-xl border border-white/5 w-full max-w-xl">
              
              {/* Server 1 Tab: TerraFirmaGreg Modern (First Tab) */}
              <button
                onClick={() => setActiveServer('tfg')}
                className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeServer === 'tfg'
                    ? 'bg-[#f27d26] text-black shadow-[0_0_20px_rgba(242,125,38,0.5)] font-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Cpu className="w-4 h-4 shrink-0" />
                <span className="truncate">1. TerraFirmaGreg Modern</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 hidden sm:inline-block" title="Онлайн" />
              </button>

              {/* Server 2 Tab: Reclamation (Second Tab) */}
              <button
                onClick={() => setActiveServer('reclamation')}
                className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative ${
                  activeServer === 'reclamation'
                    ? 'bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.55)] font-black'
                    : 'text-gray-400 hover:text-emerald-300 hover:bg-emerald-500/10'
                }`}
              >
                <Sprout className="w-4 h-4 shrink-0 text-emerald-950 sm:text-current" />
                <span className="truncate">2. Reclamation</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-400 text-black font-black uppercase tracking-tight shrink-0 shadow-sm animate-pulse">
                  NEW MODPACK
                </span>
              </button>

            </div>

          </div>
        </header>

        {/* Dynamic Content Container */}
        <AnimatePresence mode="wait">
          
          {/* ========================================================================= */}
          {/* SERVER 2: RECLAMATION - HARDCORE EDITION (DEAD WORLD REBIRTH THEME)        */}
          {/* ========================================================================= */}
          {isReclamation ? (
            <motion.div
              key="reclamation-server"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              
              {/* Important Modpack Change Notice Banner */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-black/80 border border-emerald-500/40 text-xs sm:text-sm text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.12)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 via-lime-400 to-amber-500" />
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                      <RefreshCw className="w-5 h-5 animate-spin [animation-duration:8s]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-[11px] font-mono uppercase">
                          ⚠️ ВАЖНОЕ ОБНОВЛЕНИЕ
                        </span>
                        <span className="font-mono text-xs text-gray-400">Полная смена модпака</span>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        В связи с нестабильностью прошлой сборки Liminal в мультиплеере, на втором сервере запущена легендарная сборка <strong className="text-emerald-400 font-black">Reclamation - Hardcore Edition</strong>. Сервер готов к игре!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
                    <span className="text-[11px] text-gray-400 font-mono hidden lg:inline">
                      TerraFirmaGreg работает штатно
                    </span>
                    <button
                      onClick={() => setActiveServer('tfg')}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5"
                    >
                      <span>К Серверу 1</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Reclamation Hero Header */}
              <div className="mb-8 relative">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-bold text-emerald-300 tracking-widest uppercase font-mono blink-5s">
                      ВТОРОЙ СЕРВЕР • RECLAMATION: HARDCORE EDITION
                    </span>
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tighter uppercase mb-3 text-emerald-400 glow-reclamation font-mono leading-none animate-reclamation-shimmer select-none">
                      RECLAMATION
                    </h1>
                    <div className="text-xs sm:text-sm font-mono tracking-widest text-lime-300/90 uppercase font-black mb-3">
                      HARDCORE EDITION • СБОРКА ВДОХНОВЛЕНА REGROWTH
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-sans leading-relaxed border-l-2 border-emerald-500/50 pl-4 py-1">
                      Хардкорная сборка с уникальной прогрессией, квестами и настроенными механиками. Сервер запущен и полностью готов к игре!
                    </p>
                  </div>

                  {/* Metadata Pill */}
                  <div className="flex flex-col sm:items-end gap-2 shrink-0 bg-black/60 border border-emerald-500/20 p-4 rounded-xl font-mono text-xs shadow-lg">
                    <div className="text-gray-400">Формат: <span className="text-emerald-300 font-bold uppercase">Хардкор • Выживание • Квесты</span></div>
                    <div className="text-gray-400">Сложность: <span className="text-emerald-400 font-semibold uppercase">Хардкор • Квесты</span></div>
                    <div className="text-gray-400">Администратор: <span className="text-white font-semibold">Veles PlayGame</span></div>
                  </div>
                </div>
              </div>

              {/* Reclamation World Uptime & Real-Time Counter */}
              <div className="reclamation-card border-emerald-500/30 bg-gradient-to-r from-emerald-500/[0.08] via-black/70 to-lime-500/[0.05] rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-emerald-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0">
                        <Timer className="w-5 h-5 text-emerald-400 animate-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider font-mono">Время работы нового мира</h2>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                        <p className="text-xs text-emerald-200/70 font-mono">Отсчет времени с момента запуска сервера Reclamation</p>
                      </div>
                    </div>

                    {reclamationStartDateFormatted && (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 border border-emerald-500/30 text-xs text-gray-300 font-mono self-start sm:self-auto shadow-inner" suppressHydrationWarning>
                        <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span suppressHydrationWarning>Запуск сервера: <strong className="text-emerald-300 font-bold" suppressHydrationWarning>{reclamationStartDateFormatted}</strong></span>
                      </div>
                    )}
                  </div>

                  {/* Uptime Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
                    {/* Days */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/60 border border-emerald-500/20 hover:border-emerald-400/50 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-emerald-400 tracking-tight relative z-10 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]" suppressHydrationWarning>
                        {String(recDays).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(recDays, 'День', 'Дня', 'Дней')}
                      </span>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/60 border border-emerald-500/20 hover:border-emerald-400/50 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight relative z-10" suppressHydrationWarning>
                        {String(recHours).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(recHours, 'Час', 'Часа', 'Часов')}
                      </span>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/60 border border-emerald-500/20 hover:border-emerald-400/50 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight relative z-10" suppressHydrationWarning>
                        {String(recMinutes).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(recMinutes, 'Минута', 'Минуты', 'Минут')}
                      </span>
                    </div>

                    {/* Seconds */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/60 border border-emerald-500/20 hover:border-lime-400/50 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-lime-400 tracking-tight relative z-10 drop-shadow-[0_0_12px_rgba(163,230,53,0.3)]" suppressHydrationWarning>
                        {String(recSeconds).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(recSeconds, 'Секунда', 'Секунды', 'Секунд')}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-mono bg-black/40 rounded-xl px-4 py-3 border border-emerald-500/10">
                    <div className="flex items-center gap-2">
                      <Sprout className="w-4 h-4 text-emerald-400" />
                      <span>Статус сервера: <strong className="text-emerald-300 font-bold">Сервер активен • Онлайн и готов к игре</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>TPS: <strong className="text-emerald-400">20.0</strong> • Задержка минимальна</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reclamation Connection & Modpack Download Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                
                {/* IP Addresses Column */}
                <div className="lg:col-span-7 reclamation-card rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border-emerald-500/30">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-black text-white tracking-wide uppercase font-mono">Подключение к серверу</h2>
                        <p className="text-xs text-emerald-300/70 font-mono">Адрес без изменений • Скопируйте в буфер</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Primary IP */}
                      <div className="relative group/btn">
                        <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider mb-2 pl-1">
                          <span className="text-emerald-400">Основной IP адрес</span>
                          <span className="text-gray-500">Порт: 25598</span>
                        </div>
                        <button 
                          onClick={() => handleCopy('213.152.43.88:25598')}
                          className="w-full flex items-center justify-between p-4 bg-black/70 hover:bg-black/90 border border-emerald-500/30 hover:border-emerald-400/60 rounded-xl transition-all relative group cursor-pointer"
                        >
                          <span className="font-mono text-lg md:text-xl text-emerald-300 font-bold tracking-wide group-hover:text-emerald-200 transition-colors">
                            213.152.43.88:25598
                          </span>
                          {copiedIp === '213.152.43.88:25598' ? (
                            <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/30">
                              <CheckCircle2 className="w-4 h-4" /> Скопировано
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors text-xs font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                              <Copy className="w-4 h-4" /> Копировать
                            </span>
                          )}
                        </button>
                      </div>

                      {/* Alternative IP */}
                      <div className="relative group/btn pt-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider mb-2 pl-1">
                          <span className="text-lime-400">Альтернативный адрес (доменный узел)</span>
                          <span className="text-gray-500">Резервный адрес</span>
                        </div>
                        <button 
                          onClick={() => handleCopy('danunaxuynixuyassebe.okak.skin')}
                          className="w-full flex items-center justify-between p-4 bg-black/70 hover:bg-black/90 border border-lime-500/30 hover:border-lime-400/60 rounded-xl transition-all relative group cursor-pointer"
                        >
                          <span className="font-mono text-sm sm:text-base md:text-lg text-lime-300 font-bold tracking-wide group-hover:text-lime-200 transition-colors truncate mr-2">
                            danunaxuynixuyassebe.okak.skin
                          </span>
                          {copiedIp === 'danunaxuynixuyassebe.okak.skin' ? (
                            <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/30 shrink-0">
                              <CheckCircle2 className="w-4 h-4" /> Скопировано
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 text-lime-400 group-hover:text-lime-300 transition-colors text-xs font-bold uppercase tracking-wider bg-lime-500/10 px-3 py-1.5 rounded-lg border border-lime-500/30 shrink-0">
                              <Copy className="w-4 h-4" /> Копировать
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modpack Download Column */}
                <div className="lg:col-span-5 reclamation-card rounded-2xl p-6 md:p-8 flex flex-col justify-between border-emerald-500/30 bg-emerald-500/[0.02]">
                  <div className="flex flex-col h-full">
                    <h2 className="text-xl font-black text-white tracking-wide uppercase font-mono mb-2 flex items-center justify-between">
                      <span>Сборка Reclamation</span>
                      <Download className="w-5 h-5 text-emerald-400 animate-bounce" />
                    </h2>
                    
                    <div className="mb-6">
                      <div className="text-sm font-bold text-emerald-400 mb-1 font-mono">Reclamation - Hardcore Edition</div>
                      <div className="text-xs text-gray-400 leading-relaxed mb-4">
                        Официальный архив новой сборки с полной переписанной прогрессией, квестами и настроенными конфигами.
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/50 border border-emerald-500/20 text-xs text-emerald-200/90 leading-relaxed font-mono">
                        <span className="text-emerald-400 font-bold uppercase">Установка:</span> Скачайте архив и <strong className="text-white underline">переместите все файлы в папку игры</strong> вашего инстанса Minecraft.
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a 
                        href="https://drive.google.com/file/d/1yGCTr2HDXJ20aZf62av_Y0HXbDM_fmK6/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 hover:border-emerald-400 rounded-xl transition-all group shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                      >
                        <div className="w-10 h-10 rounded-lg bg-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-300">
                          <Download className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors uppercase font-mono">
                            Скачать с Google Drive
                          </div>
                          <div className="text-[11px] text-gray-400 truncate">Reclamation - Hardcore Edition • Google Drive</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-all shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Reclamation Installation & Quick Start Guide */}
              <div className="mb-12 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-6 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
                  <h2 className="text-xl font-black text-white tracking-wide uppercase font-mono">Инструкция по установке и входу</h2>
                </div>

                <div className="reclamation-card border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] to-black/60 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-base font-bold text-white border-b border-emerald-500/20 pb-3 uppercase tracking-wider font-mono flex items-center gap-2">
                      <Tv className="w-5 h-5 text-emerald-400" />
                      <span>Пошаговая инструкция для игры на сервере</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300 leading-relaxed font-sans pt-1">
                      <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/20 flex gap-3.5">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-bold flex items-center justify-center shrink-0">1</span>
                        <div>
                          <strong className="text-white block mb-0.5 font-mono text-xs">Скачайте сборку</strong>
                          <p className="text-gray-400">Скачайте архив сборки <strong className="text-white">Reclamation - Hardcore Edition</strong> по кнопке с Google Drive выше.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/20 flex gap-3.5">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-bold flex items-center justify-center shrink-0">2</span>
                        <div>
                          <strong className="text-white block mb-0.5 font-mono text-xs">Откройте папку игры</strong>
                          <p className="text-gray-400">В вашем лаунчере Minecraft откройте папку созданного инстанса или корневой каталог игры.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex gap-3.5 md:col-span-2">
                        <span className="w-7 h-7 rounded-lg bg-emerald-400/30 text-emerald-300 border border-emerald-400/40 font-mono font-bold flex items-center justify-center shrink-0">3</span>
                        <div>
                          <strong className="text-emerald-300 block mb-0.5 font-mono text-xs uppercase tracking-wider">Главное действие</strong>
                          <p className="text-white font-mono text-xs leading-relaxed">
                            Распакуйте скачанный архив и <strong className="text-emerald-300 underline font-black">переместите все файлы в папку игры</strong> вашего инстанса (папки mods, config, kubejs и ресурсы).
                          </p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/20 flex gap-3.5 md:col-span-2">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-bold flex items-center justify-center shrink-0">4</span>
                        <div>
                          <strong className="text-white block mb-0.5 font-mono text-xs">Запуск и подключение</strong>
                          <p className="text-gray-400">Скопируйте IP <strong className="text-emerald-400 font-mono">213.152.43.88:25598</strong> (или резервный домен <span className="text-lime-300 font-mono">danunaxuynixuyassebe.okak.skin</span>), запускайте игру и подключайтесь к серверу!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ) : (
            
            /* ========================================================================= */
            /* SERVER 1: TERRAFIRMAGREG MODERN (EXISTING HARDCORE INDUSTRIAL STYLE)      */
            /* ========================================================================= */
            <motion.div
              key="tfg-server"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              
              {/* Important Announcement Notice */}
              <div className="mb-6 p-4 rounded-2xl bg-black/70 border border-[#f27d26]/30 text-xs sm:text-sm text-gray-200 shadow-[0_0_25px_rgba(242,125,38,0.1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f27d26]" />
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#f27d26] shrink-0" />
                  <div>
                    <span className="font-bold text-[#f27d26] uppercase tracking-wide">⚠️ Важно:</span>{' '}
                    <span>Сервер <strong className="text-white">TerraFirmaGreg Modern</strong> продолжает работу в штатном режиме, без изменений. Весь прогресс и миры на месте.</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveServer('reclamation')}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold whitespace-nowrap transition-colors self-end sm:self-auto cursor-pointer"
                >
                  К Reclamation →
                </button>
              </div>

              {/* TFG Header Section */}
              <div className="mb-10">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f27d26]/10 border border-[#f27d26]/20 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#f27d26] pulse-glow" />
                    <span className="text-[10px] font-bold text-[#f27d26] tracking-widest uppercase font-mono">Сервер 1 • Штатный режим • Онлайн</span>
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div>
                    <h1 className="text-5xl md:text-7xl lg:text-[76px] font-black tracking-tighter uppercase mb-4 glow-amber text-[#f27d26] leading-none select-none">
                      TERRAFIRMAGREG
                    </h1>
                    <p className="text-base text-gray-300 max-w-2xl font-sans leading-relaxed border-l-2 border-[#f27d26]/50 pl-4 py-1">
                      Хардкорное выживание с реалистичной геологией <span className="text-[#f27d26] font-bold">TerraFirmaCraft</span> и масштабными индустриальными эпохами <span className="text-white font-bold">GregTech Modern</span> на версии Forge 1.20.1.
                    </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-2 shrink-0 bg-black/60 border border-[#f27d26]/20 p-4 rounded-xl font-mono text-xs shadow-lg">
                    <div className="text-gray-400">Рекомендуемый клиент: <span className="text-[#f27d26] font-bold uppercase">Forge 1.20.1</span></div>
                    <div className="text-gray-400">Формат: <span className="text-white font-bold">Выживание / Квесты</span></div>
                    <div className="text-gray-400">Администратор: <span className="text-gray-300">Veles PlayGame</span></div>
                  </div>
                </div>
              </div>

              {/* TFG World Uptime & Start Time */}
              <div className="glass-card border-[#f27d26]/30 bg-gradient-to-r from-[#f27d26]/[0.08] via-black/50 to-[#3b82f6]/[0.08] rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-[0_0_30px_rgba(242,125,38,0.1)]">
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#f27d26]/20 border border-[#f27d26]/40 flex items-center justify-center shadow-[0_0_15px_rgba(242,125,38,0.3)] shrink-0">
                        <Timer className="w-5 h-5 text-[#f27d26] animate-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider font-mono">Время жизни текущего мира</h2>
                          <span className="w-2 h-2 rounded-full bg-[#f27d26] pulse-glow" />
                        </div>
                        <p className="text-xs text-gray-400">Сколько времени прошло с момента старта игрового мира</p>
                      </div>
                    </div>

                    {startDateFormatted && (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 border border-[#f27d26]/30 text-xs text-gray-300 font-mono self-start sm:self-auto shadow-inner" suppressHydrationWarning>
                        <Calendar className="w-4 h-4 text-[#f27d26] shrink-0" />
                        <span suppressHydrationWarning>Время старта мира: <strong className="text-white font-bold" suppressHydrationWarning>{startDateFormatted}</strong></span>
                      </div>
                    )}
                  </div>

                  {/* Uptime Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    {/* Days */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/50 border border-white/10 hover:border-[#f27d26]/40 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-[#f27d26] tracking-tight relative z-10 drop-shadow-[0_0_12px_rgba(242,125,38,0.3)]" suppressHydrationWarning>
                        {String(days).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(days, 'День', 'Дня', 'Дней')}
                      </span>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/50 border border-white/10 hover:border-[#f27d26]/40 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight relative z-10" suppressHydrationWarning>
                        {String(hours).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(hours, 'Час', 'Часа', 'Часов')}
                      </span>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/50 border border-white/10 hover:border-[#f27d26]/40 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight relative z-10" suppressHydrationWarning>
                        {String(minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(minutes, 'Минута', 'Минуты', 'Минут')}
                      </span>
                    </div>

                    {/* Seconds */}
                    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-black/50 border border-white/10 hover:border-blue-500/40 transition-all group relative overflow-hidden">
                      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-blue-400 tracking-tight relative z-10 drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]" suppressHydrationWarning>
                        {String(seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2 relative z-10 font-mono" suppressHydrationWarning>
                        {getPluralWord(seconds, 'Секунда', 'Секунды', 'Секунд')}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-mono bg-black/40 rounded-xl px-4 py-3 border border-white/5" suppressHydrationWarning>
                    <div className="flex items-center gap-2" suppressHydrationWarning>
                      <Sparkles className="w-4 h-4 text-[#f27d26]" />
                      <span suppressHydrationWarning>Состояние мира: <strong className="text-gray-200 font-semibold">Сервер активен • Мир успешно развивается</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400" suppressHydrationWarning>
                      <Clock className="w-3.5 h-3.5 text-[#f27d26]" />
                      <span suppressHydrationWarning>Старт мира: <span className="text-[#f27d26] font-bold" suppressHydrationWarning>{startDateFormatted || 'Загрузка...'}</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TFG Connection & Modpack */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                
                {/* IP Address */}
                <div className="lg:col-span-7 glass-card border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/[0.05] to-transparent rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Server className="w-5 h-5 text-[#3b82f6]" />
                      </div>
                      <h2 className="text-xl font-bold text-white tracking-wide uppercase">Подключение к TerraFirmaGreg</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="relative group/btn">
                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2 pl-1 relative">IP Адрес сервера</div>
                        <button 
                          onClick={() => handleCopy('213.152.43.53:25589')}
                          className="w-full flex items-center justify-between p-4 bg-black/50 hover:bg-black/70 border border-blue-500/20 hover:border-blue-500/40 rounded-xl transition-all relative cursor-pointer"
                        >
                          <span className="font-mono text-lg md:text-xl text-white font-bold tracking-wide group-hover/btn:text-blue-400 transition-colors">
                            213.152.43.53:25589
                          </span>
                          {copiedIp === '213.152.43.53:25589' ? (
                            <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/20">
                              <CheckCircle2 className="w-4 h-4" /> Скопировано
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 text-blue-400 group-hover/btn:text-blue-300 transition-colors text-xs font-bold uppercase tracking-wider bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
                              <Copy className="w-4 h-4" /> Копировать
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modpack Download */}
                <div className="lg:col-span-5 glass-card rounded-2xl p-6 md:p-8 border-[#f27d26]/20 bg-[#f27d26]/[0.02]">
                  <div className="h-full flex flex-col">
                    <h2 className="text-xl font-bold text-white tracking-wide uppercase mb-2 flex items-center justify-between">
                      <span>Запуск Игры</span>
                      <Settings className="w-5 h-5 text-[#f27d26] float-slow" />
                    </h2>
                    
                    <div className="mb-6">
                      <div className="text-sm font-bold text-white mb-1 font-mono">TerraFirmaGreg: Modern</div>
                      <div className="text-xs text-gray-400 leading-relaxed mb-3">
                        Сервер на базе хардкорной сборки TerraFirmaGreg: Modern (Forge 1.20.1).
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-[#f27d26]/20 text-[11px] text-gray-300 leading-relaxed font-mono">
                        <span className="text-[#f27d26] font-bold">Как играть:</span> Скачайте архив и <span className="text-white font-semibold underline">переместите все файлы в папку игры</span>.
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a 
                        href="https://drive.google.com/file/d/11NGyYHSN86LjzchJ4GLyUo3uC4Nzsge9/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-[#f27d26]/10 hover:bg-[#f27d26]/20 border border-[#f27d26]/30 hover:border-[#f27d26]/50 rounded-xl transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                          <Download className="w-5 h-5 text-[#f27d26]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-white group-hover:text-[#f27d26] transition-colors uppercase font-mono">
                            Скачать с Google Drive
                          </div>
                          <div className="text-[11px] text-gray-400 truncate">TerraFirmaGreg Modern • Архив сборки</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-all shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* TFG Accordion Tabs */}
              <div className="mb-12 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-6 bg-[#f27d26] rounded-full shadow-[0_0_15px_rgba(242,125,38,0.4)]" />
                  <h2 className="text-xl font-black text-white tracking-wide uppercase font-mono">Информация о сервере TerraFirmaGreg</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Tab Selectors */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    {[
                      { id: 0, title: "Как играть?", icon: Tv, desc: "Переместите все файлы в папку игры" },
                      { id: 1, title: "Отзывчивый хост", icon: Server, desc: "Характеристики мощного железа (TPS 20.0)" },
                      { id: 2, title: "Сборка TerraFirmaGreg Modern", icon: Cpu, desc: "Реалистичная геология TFC и технологии GregTech" }
                    ].map((tab) => {
                      const IconComponent = tab.icon;
                      const isActive = tfgAccordion === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setTfgAccordion(isActive ? null : tab.id)}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden cursor-pointer ${
                            isActive 
                              ? "bg-[#f27d26]/10 border-[#f27d26]/40 shadow-[0_0_20px_rgba(242,125,38,0.05)]" 
                              : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-4 relative z-10">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              isActive ? "bg-[#f27d26]/20 text-[#f27d26]" : "bg-white/5 text-gray-400 group-hover:text-white"
                            }`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 font-mono ${
                                isActive ? "text-[#f27d26]" : "text-white"
                              }`}>
                                {tab.title}
                              </h4>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-sans line-clamp-1">{tab.desc}</p>
                            </div>
                          </div>
                          
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                            isActive ? "text-[#f27d26] rotate-180" : "text-gray-500 group-hover:text-gray-300"
                          }`} />

                          {isActive && (
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f27d26]" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Content Panel */}
                  <div className="lg:col-span-7 flex">
                    <div className="w-full glass-card border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent p-6 rounded-2xl flex flex-col justify-between min-h-[220px] relative overflow-hidden">
                      <div className="relative z-10 h-full flex flex-col justify-center">
                        {tfgAccordion === 0 && (
                          <motion.div
                            key="tfg-how-to"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4"
                          >
                            <h3 className="text-base font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wider flex items-center gap-2 font-mono">
                              <Tv className="w-5 h-5 text-[#f27d26]" />
                              <span>Как играть? (Инструкция по установке)</span>
                            </h3>
                            <div className="space-y-2.5 text-xs text-gray-300 leading-relaxed font-sans">
                              <div className="flex gap-3">
                                <span className="text-[#f27d26] font-mono font-bold">1.</span>
                                <p>Нажмите кнопку <span className="text-white font-semibold">«Скачать с Google Drive»</span> и загрузите архив сборки.</p>
                              </div>
                              <div className="flex gap-3">
                                <span className="text-[#f27d26] font-mono font-bold">2.</span>
                                <p>Откройте лаунчер Minecraft и создайте инстанс версии <span className="text-[#f27d26] font-black text-[13px] uppercase tracking-wide">Forge 1.20.1</span> (сборка <span className="text-white font-semibold">TerraFirmaGreg: Modern</span>).</p>
                              </div>
                              <div className="flex gap-3">
                                <span className="text-[#f27d26] font-mono font-bold">3.</span>
                                <p className="bg-[#f27d26]/10 p-2.5 rounded-lg border border-[#f27d26]/30 text-white font-mono text-xs">
                                  <span className="text-[#f27d26] font-black uppercase tracking-wider">Главный шаг:</span> Распакуйте архив и <strong className="text-[#f27d26] font-black underline">переместите все файлы в папку игры</strong> вашего инстанса.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <span className="text-[#f27d26] font-mono font-bold">4.</span>
                                <p>Скопируйте IP <span className="text-[#f27d26] font-mono font-semibold">213.152.43.53:25589</span>, запускайте игру и подключайтесь к серверу!</p>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {tfgAccordion === 1 && (
                          <motion.div
                            key="tfg-host"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4"
                          >
                            <h3 className="text-base font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wider flex items-center gap-2 font-mono">
                              <Server className="w-5 h-5 text-[#f27d26]" />
                              <span>Наш мощный и стабильный хостинг</span>
                            </h3>
                            <div className="text-xs text-gray-300 space-y-3 leading-relaxed font-sans">
                              <p>
                                Сервер развернут на флагманском процессоре <span className="text-white font-bold">AMD Ryzen 9</span> с высокоскоростной серверной оперативной памятью DDR5 и накопителями <span className="text-white font-bold">PCI-E NVMe SSD</span>.
                              </p>
                              <p>
                                Сервер стабильно удерживает <span className="text-emerald-400 font-bold">TPS 20.0</span> под любой нагрузкой. Карта не виснет, пинг минимальный, а ресурсы чанков прогружаются молниеносно!
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {tfgAccordion === 2 && (
                          <motion.div
                            key="tfg-modpack"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4"
                          >
                            <h3 className="text-base font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wider flex items-center gap-2 font-mono">
                              <Cpu className="w-5 h-5 text-[#f27d26]" />
                              <span>TerraFirmaGreg: Modern</span>
                            </h3>
                            <div className="text-xs text-gray-300 space-y-2.5 leading-relaxed font-sans">
                              <p>
                                <span className="text-white font-bold">TerraFirmaGreg: Modern</span> — это масштабное объединение реалистичного выживания <span className="text-[#f27d26] font-semibold">TerraFirmaCraft (TFC)</span> и сложнейшей индустриальной экосистемы <span className="text-[#f27d26] font-semibold">GregTech Modern</span> на версии Forge 1.20.1.
                              </p>
                              <ul className="space-y-1.5 pl-4 list-disc text-gray-300">
                                <li><span className="text-white font-semibold">Реалистичная геология и ковка</span> — поиск руд по минералам на поверхности, литье сплавов и ковка инструментов на наковальне.</li>
                                <li><span className="text-white font-semibold">Суровое выживание</span> — питательность рациона, времена года, климат.</li>
                                <li><span className="text-white font-semibold">Технологический прогресс</span> — от каменных орудий до электрических эпох (LV-UV) и термоядерного синтеза.</li>
                              </ul>
                            </div>
                          </motion.div>
                        )}

                        {tfgAccordion === null && (
                          <div className="text-center py-8 text-gray-500 font-sans">
                            <ChevronDown className="w-8 h-8 text-white/20 mx-auto mb-2" />
                            Выберите вкладку слева, чтобы открыть подробную информацию
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

        {/* Unified Community Links Section (Discord, Telegram, YouTube, TikTok) */}
        <div className={`relative rounded-3xl p-6 md:p-8 border transition-all duration-300 overflow-hidden mb-8 ${
          isReclamation ? 'border-emerald-500/20 bg-black/60 shadow-[0_0_35px_rgba(16,185,129,0.06)]' : 'border-white/10 bg-black/40'
        }`}>
          <div className="flex flex-col items-center justify-center mb-6 text-center">
            <div className={`inline-flex items-center justify-center p-3 rounded-2xl mb-3 ring-1 shadow-lg ${
              isReclamation ? 'bg-emerald-500/10 ring-emerald-500/30 text-emerald-400' : 'bg-white/5 ring-white/10 text-[#f27d26]'
            }`}>
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase mb-2 font-mono">
              Сообщество серверов Veles PlayGame
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
              Общий Discord и Telegram для обоих серверов. Задавайте вопросы по сборкам, ищите союзников и делитесь скриншотами своих построек и выживания!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {/* Discord */}
            <a 
              href="https://discord.gg/EgSkdeJMsd" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-4 p-5 rounded-2xl bg-black/50 border border-white/5 hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 hover:shadow-[0_0_20px_rgba(88,101,242,0.15)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#5865F2]/20 flex items-center justify-center shrink-0 ring-1 ring-[#5865F2]/30 group-hover:ring-[#5865F2]/60 transition-all">
                  <svg className="w-6 h-6 text-[#5865F2] group-hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <div className="text-base font-bold text-gray-200 mb-1 font-mono">Discord</div>
                <div className="text-xs text-gray-400">Общение, скриншоты и поддержка</div>
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/VelesPlayGame" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-4 p-5 rounded-2xl bg-black/50 border border-white/5 hover:border-[#229ED9]/50 hover:bg-[#229ED9]/10 hover:shadow-[0_0_20px_rgba(34,158,217,0.15)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#229ED9]/20 flex items-center justify-center shrink-0 ring-1 ring-[#229ED9]/30 group-hover:ring-[#229ED9]/60 transition-all">
                  <svg className="w-6 h-6 text-[#229ED9] group-hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <div className="text-base font-bold text-gray-200 mb-1 font-mono">Telegram</div>
                <div className="text-xs text-gray-400">Мгновенные уведомления</div>
              </div>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/@veles_playgame?si=oty0sDUU230sQAA3" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-4 p-5 rounded-2xl bg-black/50 border border-white/5 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 ring-1 ring-red-500/30 group-hover:ring-red-500/60 transition-all">
                  <Youtube className="w-6 h-6 text-red-500 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <div className="text-base font-bold text-gray-200 mb-1 font-mono">YouTube</div>
                <div className="text-xs text-gray-400">Стримы и видеообзоры</div>
              </div>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@_veles.playgame_" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-4 p-5 rounded-2xl bg-black/50 border border-white/5 hover:border-[#00f2fe]/50 hover:bg-[#00f2fe]/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#00f2fe]/20 flex items-center justify-center shrink-0 ring-1 ring-[#00f2fe]/30 group-hover:ring-[#00f2fe]/60 transition-all">
                  <Video className="w-6 h-6 text-[#00f2fe] group-hover:scale-105 transition-transform duration-300" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <div className="text-base font-bold text-gray-200 mb-1 font-mono">TikTok</div>
                <div className="text-xs text-gray-400">Короткие видеоролики</div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-2 pb-6 text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-black/40">
            <p className="text-[11px] text-gray-400 font-mono">
              Игровые серверы <span className="text-white font-semibold">TerraFirmaGreg: Modern</span> & <span className="text-emerald-400 font-semibold">Reclamation - Hardcore Edition</span> • Сообщество <span className="text-gray-300 font-semibold">Veles PlayGame</span>
            </p>
          </div>
          <p className="text-[9px] text-gray-600 mt-2 font-mono opacity-70">
            Сайт для игрового сообщества. Все права на Minecraft принадлежат Mojang AB.
          </p>
        </footer>

      </div>
    </main>
  );
}
