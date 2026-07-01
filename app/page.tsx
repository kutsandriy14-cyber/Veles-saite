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
  ArrowRight,
  ChevronDown,
  Users
} from 'lucide-react';

export default function HomePage() {
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

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
              <span className="text-[10px] font-bold text-[#f27d26] tracking-widest uppercase font-mono">Season 05 • Live</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter uppercase mb-6 glow-amber text-[#f27d26]">
            DECURSIO PROJECT
          </h1>

          <div className="flex flex-col md:flex-row md:items-start justify-end gap-6">
            <div className="flex flex-col items-start md:items-end gap-3 shrink-0 pt-1">
              <div className="flex flex-col md:items-end">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Рекомендуемый клиент</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl font-black text-[#f27d26] tracking-tight uppercase">Forge 1.16.5</span>
                  <span className="text-sm bg-[#f27d26]/10 text-[#f27d26] border border-[#f27d26]/30 px-2.5 py-0.5 rounded-lg font-mono font-bold">v36.2.34</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-mono">
                <span className="text-gray-400">Формат:</span> 
                <span className="text-white font-bold">Выживание / Квесты</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
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
                <div className="text-sm font-bold text-white mb-1">Decursio Project Expert</div>
                <div className="text-xs text-gray-400 leading-relaxed">
                  Пятый сезон базируется на экспертной сборке с поэтапной квестовой системой. Скачайте архив сборки с Google Drive для входа на сервер.
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href="https://drive.google.com/file/d/1Edkw9RSpKuku9uG6Jk2bYnNy-gkobLdr/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#f27d26]/10 hover:bg-[#f27d26]/20 border border-[#f27d26]/30 hover:border-[#f27d26]/50 rounded-xl transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5 text-[#f27d26]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white group-hover:text-[#f27d26] transition-colors uppercase">Скачать с Google Drive</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-all shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Highlights - Sliding Expandable Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 space-y-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-6 bg-[#f27d26] rounded-full shadow-[0_0_15px_rgba(242,125,38,0.4)]" />
            <h2 className="text-xl font-black text-white tracking-wide uppercase">Информация о сервере</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Tab Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {[
                { id: 0, title: "Как зайти на сервер?", icon: Tv, desc: "Пошаговая инструкция для подключения к сборке" },
                { id: 1, title: "Отзывчивый хост", icon: Server, desc: "Характеристики нашего мощного железа" },
                { id: 2, title: "Сборка Decursio Expert", icon: Cpu, desc: "Эпохи развития и особенности сборки" }
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeAccordion === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAccordion(isActive ? null : tab.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
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
                        <h4 className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
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

                    {/* Left glowing neon border line for active tab */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f27d26]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Sliding Content Panel */}
            <div className="lg:col-span-7 flex">
              <div className="w-full glass-card border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent p-6 rounded-2xl flex flex-col justify-between min-h-[220px] relative overflow-hidden">
                <div className="absolute top-0 right-0 -m-16 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -m-16 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-center">
                  {activeAccordion === 0 && (
                    <motion.div
                      key="how-to-join"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-base font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wider flex items-center gap-2">
                        <Tv className="w-5 h-5 text-[#f27d26]" />
                        <span>Как зайти на сервер?</span>
                      </h3>
                      <div className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
                        <div className="flex gap-3">
                          <span className="text-[#f27d26] font-mono font-bold">1.</span>
                          <p>Нажмите оранжевую кнопку <span className="text-white font-semibold">«Скачать с Google Drive»</span> выше и скачайте архив сборки.</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-[#f27d26] font-mono font-bold">2.</span>
                          <p>Откройте ваш лаунчер Minecraft и создайте чистый инстанс версии <span className="text-[#f27d26] font-black text-[13px] uppercase tracking-wide">Forge 1.16.5</span> (с версией ядра <span className="text-[#f27d26] font-black text-[13px] uppercase tracking-wide">36.2.34</span>).</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-[#f27d26] font-mono font-bold">3.</span>
                          <p>Распакуйте скачанный ZIP-архив и перенесите все папки (такие как <span className="text-white font-semibold">mods</span>, <span className="text-white font-semibold">config</span> и другие) напрямую в корневую папку вашего игрового клиента/инстанса Minecraft.</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-[#f27d26] font-mono font-bold">4.</span>
                          <p>Скопируйте IP <span className="text-[#f27d26] font-mono font-semibold">veles.imba.land</span> из блока «Подключение», запускайте игру и подключайтесь к нам!</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeAccordion === 1 && (
                    <motion.div
                      key="responsive-host"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-base font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wider flex items-center gap-2">
                        <Server className="w-5 h-5 text-[#f27d26]" />
                        <span>Наш мощный и стабильный хостинг</span>
                      </h3>
                      <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
                        <p>
                          Мир сервера развернут на флагманском процессоре <span className="text-white font-bold">AMD Ryzen 9</span> с высокоскоростной серверной оперативной памятью DDR5 и сверхбыстрыми игровыми накопителями <span className="text-white font-bold">PCI-E NVMe SSD</span>.
                        </p>
                        <p>
                          Благодаря этому, сервер стабильно удерживает <span className="text-emerald-400 font-bold">TPS 20.0</span> под любой нагрузкой. Карта не виснет, пинг минимальный, а ресурсы чанков прогружаются молниеносно, позволяя строить комплексные логистические цепочки и автоматизированные заводы без ущерба для вашего комфорта!
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeAccordion === 2 && (
                    <motion.div
                      key="modpack-info"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-base font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wider flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-[#f27d26]" />
                        <span>The Decursio Project - Expert Edition</span>
                      </h3>
                      <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
                        <p>
                          <span className="text-white font-bold">The Decursio Project - Expert</span> — это масштабный и проработанный экспертный пак на версии <span className="text-[#f27d26] font-black text-[13px] uppercase tracking-wide">Forge 1.16.5 (v36.2.34)</span>. Основной упор сделан на постепенную прогрессию (по типу SevTech: Ages), где новые технологии и ресурсы открываются строго по ходу выполнения квестов.
                        </p>
                        <p>
                          Сборка предлагает <span className="text-white font-bold">5 уникальных технологических и магических эпох (Ages)</span>, которые полностью меняют привычный геймплей:
                        </p>
                        <ul className="space-y-1.5 pl-4 list-disc text-gray-400">
                          <li><span className="text-white font-semibold">Age 1 (Origins & Magic)</span> — выживание с примитивными инструментами, основы Blood Magic и Occultism.</li>
                          <li><span className="text-white font-semibold">Age 2 (Steam & Create)</span> — эра кинетической энергии и первой автоматизации с модом Create.</li>
                          <li><span className="text-white font-semibold">Age 3 (Immersive Industry)</span> — электричество, тяжелое машиностроение Immersive Engineering и Astral Sorcery.</li>
                          <li><span className="text-white font-semibold">Age 4 (Advanced Tech)</span> — цифровые логистические системы Applied Energistics 2 и механизмы Mekanism.</li>
                          <li><span className="text-white font-semibold">Age 5 (Creative Supremacy)</span> — получение креативных предметов, безграничная энергия и полная автоматизация.</li>
                        </ul>
                        <p>
                          Рецепты абсолютно всех модов тесно переплетены между собой. Чтобы продвинуться в технологиях, вам придется изучать тайную магию, а для создания мощных магических артефактов потребуются современные высокотехнологичные фабрики. Более 1500+ квестов помогут вам пройти этот сложный, но увлекательный путь!
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeAccordion === null && (
                    <div className="text-center py-8 text-gray-500 font-sans animate-pulse">
                      <ChevronDown className="w-8 h-8 text-white/20 mx-auto mb-2 animate-bounce" />
                      Выберите вкладку слева, чтобы открыть подробную информацию
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl p-6 md:p-10 border border-white/10 overflow-hidden"
        >
          {/* Background gradient for the community section */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-[#f27d26]/[0.05] -z-10" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col items-center justify-center mb-10 text-center">
             <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-5 ring-1 ring-white/10 shadow-lg shadow-black/20">
               <Users className="w-6 h-6 text-[#f27d26]" />
             </div>
             <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase mb-3">Сообщество сервера</h2>
             <p className="text-sm md:text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
               Присоединяйтесь к нашему дружному комьюнити! Мы всегда рады новым игрокам, помогаем с модами и вместе покоряем эпохи развития.
             </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            
            {/* Discord */}
            <a 
              href="https://discord.gg/cd2utAp2n" 
              target="_blank" 
              rel="noreferrer noopener"
              className="flex flex-col gap-4 p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 hover:shadow-[0_0_20px_rgba(88,101,242,0.15)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#5865F2]/20 flex items-center justify-center shrink-0 ring-1 ring-[#5865F2]/30 group-hover:ring-[#5865F2]/60 transition-all">
                  <svg className="w-6 h-6 text-[#5865F2] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-200 mb-1">Discord</div>
              <div className="text-xs text-gray-400">Общение и тех-поддержка</div>
            </div>
          </a>

          {/* Telegram */}
          <a 
            href="https://t.me/veles_playgame_s" 
            target="_blank" 
            rel="noreferrer noopener"
            className="flex flex-col gap-4 p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-[#229ED9]/50 hover:bg-[#229ED9]/10 hover:shadow-[0_0_20px_rgba(34,158,217,0.15)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#229ED9]/20 flex items-center justify-center shrink-0 ring-1 ring-[#229ED9]/30 group-hover:ring-[#229ED9]/60 transition-all">
                <svg className="w-6 h-6 text-[#229ED9] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-200 mb-1">Telegram</div>
              <div className="text-xs text-gray-400">Мгновенные уведомления</div>
            </div>
          </a>

          {/* YouTube */}
          <a 
            href="https://youtube.com/@veles_playgame?si=oty0sDUU230sQAA3" 
            target="_blank" 
            rel="noreferrer noopener"
            className="flex flex-col gap-4 p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 ring-1 ring-red-500/30 group-hover:ring-red-500/60 transition-all">
                <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-200 mb-1">YouTube</div>
              <div className="text-xs text-gray-400">Стримы и видеоконтент</div>
            </div>
          </a>

          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@_veles.playgame_" 
            target="_blank" 
            rel="noreferrer noopener"
            className="flex flex-col gap-4 p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-[#00f2fe]/50 hover:bg-[#00f2fe]/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#00f2fe]/20 flex items-center justify-center shrink-0 ring-1 ring-[#00f2fe]/30 group-hover:ring-[#00f2fe]/60 transition-all">
                <Video className="w-6 h-6 text-[#00f2fe] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-200 mb-1">TikTok</div>
              <div className="text-xs text-gray-400">Короткие видео</div>
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
          <div className="inline-block px-4 py-2 rounded-full border border-[#f27d26]/10 bg-[#f27d26]/[0.02]">
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
