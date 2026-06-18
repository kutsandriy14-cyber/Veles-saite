'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Copy, 
  Download, 
  ExternalLink,
  MessageCircle,
  Hash,
  Video,
  Youtube,
  Settings,
  Cpu, 
  CheckCircle2,
  Tv,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const [copiedIp, setCopiedIp] = useState<string | null>(null);

  const handleCopy = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  return (
    <main className="min-h-screen atmosphere text-gray-100 selection:bg-[#f27d26]/30 overflow-hidden relative font-sans">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f27d26]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-24 relative z-10 min-h-screen flex flex-col">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f27d26]/10 border border-[#f27d26]/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#f27d26] pulse-glow"></span>
              <span className="text-[10px] font-bold text-[#f27d26] tracking-widest uppercase font-mono">Season 04 • Live</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter uppercase mb-6 glow-amber text-[#f27d26]">
            TECHEVODISCOVERY
          </h1>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <p className="text-sm md:text-base text-gray-300 font-medium max-w-2xl leading-relaxed">
              Высокотехнологичная сборка для Minecraft 1.19.2, объединяющая лучшие индустриальные модификации, продуманную квестовую систему, комплексную автоматизацию машин и массу элементов для научно-технических исследований.
            </p>

            <div className="flex flex-col items-start md:items-end gap-2 text-sm font-mono shrink-0 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Версия:</span> 
                <span className="text-white font-semibold flex items-center gap-1.5">1.19.2 <span className="text-[#f27d26] text-[10px] border border-[#f27d26]/30 px-1 py-0.5 rounded leading-none">Forge</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Формат:</span> 
                <span className="text-white font-bold">Выживание / Квесты</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500">Администратор:</span> 
                <span className="text-gray-300">Veles PlayGame</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* IP Addresses & Start playing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 flex-1">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-card border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/[0.05] to-transparent rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient colorful glow for connection block */}
            <div className="absolute top-0 right-0 -m-16 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -m-16 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Server className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-wide uppercase">Подключение</h2>
              </div>
              
              <div className="space-y-4">
                <div className="relative group/btn">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-xl blur transition-opacity opacity-0 group-hover/btn:opacity-100" />
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-2 pl-1 relative">Основной IP</div>
                  <button 
                    onClick={() => handleCopy('veles.imba.land')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 border border-blue-500/10 hover:border-blue-500/30 rounded-xl transition-all relative"
                  >
                    <span className="font-mono text-lg text-white group-hover/btn:text-blue-400 transition-colors">veles.imba.land</span>
                    {copiedIp === 'veles.imba.land' ? (
                      <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider"><CheckCircle2 className="w-4 h-4" /> Скопировано</span>
                    ) : (
                      <span className="flex items-center gap-2 text-blue-500/60 group-hover/btn:text-blue-400 transition-colors text-xs font-bold uppercase tracking-wider"><Copy className="w-4 h-4" /> Копировать</span>
                    )}
                  </button>
                </div>

                <div className="relative group/btn">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-xl blur transition-opacity opacity-0 group-hover/btn:opacity-100" />
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-2 pl-1 relative">Цифровой IP</div>
                  <button 
                    onClick={() => handleCopy('213.152.43.48:25572')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 border border-indigo-500/10 hover:border-indigo-500/30 rounded-xl transition-all relative"
                  >
                    <span className="font-mono text-base text-gray-300 group-hover/btn:text-indigo-400 transition-colors">213.152.43.48:25572</span>
                    {copiedIp === '213.152.43.48:25572' ? (
                      <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider"><CheckCircle2 className="w-4 h-4" /> Скопировано</span>
                    ) : (
                      <span className="flex items-center gap-2 text-indigo-500/60 group-hover/btn:text-indigo-400 transition-colors text-xs font-bold uppercase tracking-wider"><Copy className="w-4 h-4" /> Копировать</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Modpack Segment */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 md:p-8 border-[#f27d26]/20 bg-[#f27d26]/[0.02]"
          >
            <div className="h-full flex flex-col">
              <h2 className="text-xl font-bold text-white tracking-wide uppercase mb-2 flex items-center justify-between">
                <span>Запуск Игры</span>
                <Settings className="w-5 h-5 text-[#f27d26] float-slow" />
              </h2>
              
              <div className="mb-8">
                <div className="text-sm font-bold text-white mb-1">Сборка только для Forge</div>
                <div className="text-xs text-gray-400 leading-relaxed">
                  Четвертый сезон базируется на модификациях. Скачайте официальный архив сборки с CurseForge для входа на сервер.
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href="https://www.curseforge.com/minecraft/modpacks/techevdiscovery/download/7629691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#f27d26]/10 hover:bg-[#f27d26]/20 border border-[#f27d26]/30 hover:border-[#f27d26]/50 rounded-xl transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5 text-[#f27d26]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white group-hover:text-[#f27d26] transition-colors uppercase">Скачать с CurseForge</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-all shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <Tv className="w-6 h-6 text-[#f27d26] shrink-0" />
            <div>
              <h3 className="text-sm border-b border-white/5 pb-2 mb-2 font-bold text-white uppercase tracking-wider">Как зайти?</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                1. Скачайте нашу сборку TechEvoDiscovery по кнопке выше.<br/>
                2. Запустите клиент версии 1.19.2 с установленным Forge.<br/>
                3. Скопируйте IP <span className="text-white font-mono">veles.imba.land</span> и подключитесь!
              </p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <Server className="w-6 h-6 text-[#f27d26] shrink-0" />
            <div>
              <h3 className="text-sm border-b border-white/5 pb-2 mb-2 font-bold text-white uppercase tracking-wider">Отзывчивый хост</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Наш сервер расположен на мощном оборудовании, гарантируя стабильный TPS, комфортный пинг и игру без лагов даже при наличии массивных индустриальных заводов.</p>
            </div>
          </div>
        </motion.div>

        {/* Community Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-lg font-bold text-white tracking-wide uppercase">Сообщество сервера</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Discord */}
            <a 
              href="https://discord.gg/vKnsMhss8a" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#5865F2]/40 hover:bg-[#5865F2]/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#5865F2]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#5865F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-200">Discord</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Новости, общение, тех-поддержка</div>
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/veles_playgame_s" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#229ED9]/40 hover:bg-[#229ED9]/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#229ED9]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#229ED9] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-200">Telegram</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Мгновенные уведомления</div>
              </div>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/@veles_playgame?si=oty0sDUU230sQAA3" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/40 hover:bg-red-500/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                  <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-200">YouTube @veles_playgame</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Стримы и видеоконтент</div>
              </div>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@_veles.playgame_" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/40 hover:bg-[#00f2fe]/5 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#00f2fe]/10 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-[#00f2fe] group-hover:scale-110 transition-transform" />
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-200">TikTok</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Короткие видео</div>
              </div>
            </a>

          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-auto pt-8 text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-white/5 bg-white/[0.01]">
             <p className="text-[11px] text-gray-500 font-mono">
               Разработка и запуск © 2026. Сервер под управлением <span className="text-gray-400 font-semibold">Veles PlayGame</span>
             </p>
          </div>
          <p className="text-[9px] text-gray-600 mt-3 font-mono opacity-60">
            Сайт для сообщества TechEvoDiscovery. Все права на Minecraft принадлежат Mojang AB.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
