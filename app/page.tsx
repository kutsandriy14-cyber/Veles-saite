'use strict';

'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  MessageSquare, 
  Flame, 
  Send, 
  Layers, 
  Clock, 
  Cpu, 
  CheckCircle2,
  Tv,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const primaryIp = '194.39.67.137:25572';
  const alternativeIp = 'fuck.sos-al.net';
  
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedAlternative, setCopiedAlternative] = useState(false);

  const copyToClipboard = (text: string, isPrimary: boolean) => {
    navigator.clipboard.writeText(text).then(() => {
      if (isPrimary) {
        setCopiedPrimary(true);
        setTimeout(() => setCopiedPrimary(false), 2000);
      } else {
        setCopiedAlternative(true);
        setTimeout(() => setCopiedAlternative(false), 2000);
      }
    });
  };

  const [activeTab, setActiveTab] = useState<'features' | 'guide'>('features');

  return (
    <div className="min-h-screen atmosphere text-gray-100 flex flex-col relative overflow-hidden font-sans">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Section */}
      <header className="relative z-10 pt-10 px-6 sm:px-12 md:max-w-7xl md:mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-65 font-mono bg-white/5 px-2.5 py-1 rounded border border-white/5">
              ESTABLISHED 2026
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#f27d26] font-mono font-bold animate-pulse">
              ● СЕЗОН 3 СТАРТОВАЛ
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic select-none">
            <span className="glow-amber text-[#f27d26]">TERRA FIRMA</span>{' '}
            <span className="text-white opacity-95 glow-text-white">CRAFT</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 font-medium max-w-xl">
            Выживание на реалистичной сборке с технологиями, геологическими исследованиями и суровой дикой природой.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-1.5 self-stretch md:self-auto bg-white/[0.02] border border-white/5 p-4 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#f27d26] text-black text-[11px] font-black tracking-widest uppercase rounded-sm">
              SEASON 03
            </span>
            <span className="text-xs text-amber-500 font-mono font-bold">Выживание</span>
          </div>
          <div className="text-xs text-gray-400 font-mono text-left md:text-right">
            Версия: <span className="text-white font-semibold">1.20.1</span> — TerraFirmaGreg
          </div>
          <div className="text-[11px] text-gray-500 font-mono">
            Администратор сервера: <span className="text-gray-300">Veles PlayGame</span>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="relative z-10 flex-1 md:max-w-7xl md:mx-auto w-full px-6 sm:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Connection Info & Interactive Area - spans 8 cols */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Card 1: IPs & Copy */}
          <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group">
            {/* Ambient orange blob inside card */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#f27d26] opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
            
            <div>
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div className="text-xs text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  Режим игры: <span className="text-gray-200">Выживание + Инженерия</span>
                </div>
              </div>

              <h2 className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Основной Адрес Подключения</h2>
              
              <div className="bg-black/40 border border-white/5 px-4 py-3.5 md:py-5 rounded-xl flex items-center justify-between gap-4 mb-6 relative hover:border-white/10 transition-colors">
                <span className="text-lg md:text-2xl font-mono text-white tracking-tight break-all font-bold">
                  {primaryIp}
                </span>
                <button 
                  onClick={() => copyToClipboard(primaryIp, true)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] ${
                    copiedPrimary 
                      ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' 
                      : 'bg-[#f27d26] text-black hover:bg-orange-500'
                  }`}
                  id="btn-copy-primary"
                >
                  {copiedPrimary ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                      <span>Скопировано</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Копировать</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mb-4">
                {/* Alternative IP Node */}
                <div className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 p-4 rounded-xl flex items-center justify-between gap-2 transition-all">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-mono mb-1">Альтернативный IP</div>
                    <div className="text-sm font-mono text-amber-500 font-bold">{alternativeIp}</div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(alternativeIp, false)}
                    className={`p-2.5 rounded-lg transition-all ${
                      copiedAlternative 
                        ? 'bg-green-500 text-black' 
                        : 'bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                    title="Копировать альтернативный адрес"
                    id="btn-copy-alternative"
                  >
                    {copiedAlternative ? <Check className="w-4 h-4 stroke-[3px]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick interactive note */}
            {copiedPrimary && (
              <div className="absolute bottom-4 left-6 right-6 bg-green-500/10 border border-green-500/20 px-4 py-2.5 rounded-lg flex items-center gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 animate-pulse" />
                <span className="text-xs text-green-300">
                  IP-адрес скопирован в буфер обмена! Теперь вы можете добавить его в Minecraft в раздел «Сетевая игра».
                </span>
              </div>
            )}
          </div>

          {/* Interactive Navigation Area for guides and features */}
          <div className="glass-card rounded-2xl flex flex-col overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-white/10 bg-black/20 p-2 gap-1.5">
              <button 
                onClick={() => setActiveTab('features')}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all ${
                  activeTab === 'features' 
                    ? 'bg-white/10 text-white border border-white/10' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <Layers className="w-4 h-4 text-[#f27d26]" />
                <span>О сервере</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('guide')}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all ${
                  activeTab === 'guide' 
                    ? 'bg-white/10 text-white border border-white/10' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Как зайти</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-6 md:p-8">
              
              {/* Tab: FEATURES */}
              {activeTab === 'features' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Глобальный Третий Сезон</h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      Присоединяйтесь к увлекательному приключению на сборке <strong className="text-gray-200">TerraFirmaGreg Modern</strong>. Это синергия геологического выживания Minecraft TerraFirmaCraft с автоматизацией и инженерией GregTech. 
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <Flame className="w-4.5 h-4.5 text-[#f27d26]" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">Выживание TFC</h4>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">
                        Реалистичная смена времён года, порча еды, жажда, добыча руды путём промывания песка и шахты с обвалами сводов.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Cpu className="w-4.5 h-4.5 text-blue-400" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">Технологии Greg</h4>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">
                        Пройдите путь от неолита, ковки медных кирок до эпохи пара, высокого давления, электричества и сложнейших химических реакторов.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Clock className="w-4.5 h-4.5 text-green-400" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">Отзывчивый хост</h4>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">
                        Сервер оптимизирован под сложные фабричные строения с качественной трассировкой и стабильной производительностью.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: GUIDE */}
              {activeTab === 'guide' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Инструкция по установке игры</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#f27d26] text-black flex items-center justify-center text-xs font-black shrink-0 mt-0.5">1</div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-200">Скачать лаунчер и сборку модов</h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Установите лаунчер с поддержкой CurseForge (Prism Launcher, CurseForge App или любой любимый лаунчер) или загрузите готовый архив с модами во вкладке «Сборка модов & Файлы».
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#f27d26] text-black flex items-center justify-center text-xs font-black shrink-0 mt-0.5">2</div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-200">Настроить Java</h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Для стабильной игры выделите не менее <strong className="text-gray-200">6-8 ГБ оперативной памяти</strong> в настройках лаунчера и используйте соответствующую версию <strong className="text-gray-200">Java 17 JRE</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#f27d26] text-black flex items-center justify-center text-xs font-black shrink-0 mt-0.5">3</div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-200">Добавить сервер</h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Запустите Minecraft, перейдите в «Сетевая игра» → «По адресу» и вставьте скопированный IP: <code className="text-amber-500 font-mono bg-white/5 px-1.5 py-0.5 rounded text-xs">{primaryIp}</code>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-wrap gap-4 justify-between items-center">
                    <span className="text-xs text-gray-300 font-medium">Кнопка быстрого перехода в Discord проекта:</span>
                    <a 
                      href="https://discord.gg/3k5enPuY4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs bg-[#f27d26]/10 hover:bg-[#f27d26]/20 border border-[#f27d26]/30 text-[#f27d26] px-3.5 py-1.5 rounded-lg transition-all"
                    >
                      <span>Открыть Discord</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Right Column: Community & Installations - spans 4 cols */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Social Links Card */}
          <div className="glass-card p-6 rounded-2xl flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#f27d26] glow-amber mb-6 border-b border-white/10 pb-4">
              Сообщества и Ссылки
            </h3>
            
            <div className="space-y-4 flex-1">
              
              {/* Discord Link */}
              <a 
                href="https://discord.gg/3k5enPuY4" 
                target="_blank" 
                rel="noreferrer noopener"
                className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f27d26]/20 hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-bold text-gray-100 font-sans">Discord Сервер</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#f27d26] transition-colors" />
                </div>
                <p className="text-[11px] text-gray-400 pl-10">
                  Техническая поддержка, общение, анонсы и вайт-лист.
                </p>
              </a>

              {/* Telegram Link */}
              <a 
                href="https://t.me/VelesPlayGame" 
                target="_blank" 
                rel="noreferrer noopener"
                className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f27d26]/20 hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-bold text-gray-100 font-sans">Telegram Канал</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#f27d26] transition-colors" />
                </div>
                <p className="text-[11px] text-gray-400 pl-10">
                  Анонсы, фиксы, важные внутриигровые изменения проекта.
                </p>
              </a>

              {/* TikTok Link */}
              <a 
                href="https://www.tiktok.com/@_veles.playgame_?_r=1&_t=ZS-96now9pFVMi" 
                target="_blank" 
                rel="noreferrer noopener"
                className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f27d26]/20 hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                      <Tv className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-bold text-gray-100 font-sans">TikTok @_veles.playgame_</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#f27d26] transition-colors" />
                </div>
                <p className="text-[11px] text-gray-400 pl-10">
                  Забавные моменты, вырезки со стримов, хайлайты третьего сезона.
                </p>
              </a>

            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="p-3.5 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/10">
                <p className="text-[11px] text-amber-500 leading-relaxed font-semibold">
                  Обязательно присоединяйтесь к нашему дискорд каналу — там публикуются новости об обновлениях и вайт-лист!
                </p>
              </div>
            </div>
          </div>

          {/* Downloads / Install Info */}
          <div className="glass-card p-6 rounded-2xl flex flex-col relative overflow-hidden">
            {/* Minimal pattern */}
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/[0.01] rounded-full blur-xl pointer-events-none"></div>
            
            <h3 className="text-xs font-black uppercase tracking-widest text-[#f27d26] pb-4 mb-4 border-b border-white/10">
              Сборка модов & Файлы
            </h3>

            <div className="mb-4">
              <div className="text-base font-bold italic text-white mb-0.5">TerraFirmaGreg Modern</div>
              <div className="text-[11px] text-gray-400 leading-normal">
                Сезон 03 базируется на этой сборке. Установите её, чтобы зайти на сервер.
              </div>
            </div>

            <div className="space-y-3">
              {/* CurseForge Link Button */}
              <a 
                href="https://www.curseforge.com/minecraft/modpacks/terrafirmagreg-modern"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-[#f27d26]/10 hover:bg-[#f27d26]/25 border border-[#f27d26]/30 hover:border-[#f27d26]/60 rounded-xl transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-600/20 flex items-center justify-center shrink-0">
                  <Download className="w-4 h-4 text-[#f27d26]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-[#f27d26] transition-colors uppercase">CurseForge Сборка</div>
                  <div className="text-[10px] text-gray-400 truncate">Официальная страница сборки</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-all shrink-0" />
              </a>

              {/* Direct Drive Link Button */}
              <a 
                href="https://drive.google.com/file/d/1EzbKPzirwjnnwIufal6cvMP8c7vxYtNp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/20 rounded-xl transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors uppercase">Скачать моды напрямую</div>
                  <div className="text-[10px] text-gray-400 truncate">ZIP Архивированные моды с Google Drive</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-all shrink-0" />
              </a>
            </div>

            <div className="mt-4 p-3 bg-black/30 rounded-lg border border-white/5">
              <span className="text-[10px] text-gray-400 font-mono italic">
                * Рекомендуется использовать CurseForge для автоматического обновления версий модов и плагинов.
              </span>
            </div>
          </div>

        </div>

      </main>

      {/* Footer Section */}
      <footer className="relative z-10 w-full md:max-w-7xl md:mx-auto px-6 sm:px-12 py-8 mt-auto border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
            Разработка и запуск &copy; 2026. Сервер под управлением <span className="text-gray-300 font-medium">Veles PlayGame</span>
          </p>
          <p className="text-[9px] text-gray-600 mt-1 font-mono">
            Данный сайт создан для сообщества игроков Terra Firma Craft. Все права на Minecraft принадлежат Mojang AB.
          </p>
        </div>
        
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
          <span className="hover:text-[#f27d26] transition-colors cursor-default font-semibold">Realism</span>
          <span className="hover:text-[#f27d26] transition-colors cursor-default">Tech-focused</span>
          <span className="hover:text-blue-400 transition-colors cursor-default">Survival Season 03</span>
        </div>
      </footer>
    </div>
  );
}
