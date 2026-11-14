import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (view: string) => void;
  onSelectProject: (projectId: string) => void;
  versionMode?: 'v1' | 'v2';
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onSelectProject,
  versionMode = 'v2',
}) => {
  return (
    <section className="relative w-full min-h-[100dvh] sm:min-h-[92vh] pt-16 sm:pt-18 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#db4819] via-[#cc3f13] to-[#b3330c] text-white select-none">
      {/* Decorative Grid Lines with Crosshairs (+) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full grid grid-cols-4 sm:grid-cols-6 grid-rows-4 sm:grid-rows-6">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-white/40 relative flex items-start justify-start"
            >
              <span className="absolute -top-1.5 -left-1.5 text-[10px] font-mono text-white select-none">
                +
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Giant Background Watermark Text "LAKSHYA" */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[17vw] font-black tracking-tighter text-white/[0.07] uppercase whitespace-nowrap">
          {HERO_DATA.name}
        </span>
      </div>

      {/* Top Left Tagline / Statement - Optimized for Android Mobile */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-12 pt-2 sm:pt-5">
        <div className="max-w-[50%] xs:max-w-[54%] sm:max-w-xl">
          <p className="text-[11px] sm:text-sm font-semibold tracking-wide uppercase text-white/95 leading-snug sm:leading-relaxed font-mono">
            "{HERO_DATA.tagline}"
          </p>
        </div>
      </div>

      {/* Main Center Cutout Image: Joyful Wide-Eyed Cat */}
      <div className="relative z-10 flex-1 flex items-end justify-center pointer-events-none px-4 mt-2 sm:mt-0">
        <div className="relative max-w-xl w-full flex items-end justify-center animate-float-hero">
          <img
            src="/images/cat_intro.png"
            alt="Joyful Cat Mascot"
            className="w-auto h-[40vh] sm:h-[60vh] max-h-[600px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] translate-y-1 pointer-events-auto [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              if (e.currentTarget.src.indexOf('cat_front.png') === -1) {
                e.currentTarget.src = '/images/cat_front.png';
              }
            }}
          />
        </div>
      </div>

      {/* Floating Right Interactive Pack of Project Cards - Compact scale on Android */}
      <div className="absolute right-2 sm:right-10 md:right-14 top-16 sm:top-24 md:top-26 z-20 block scale-[0.62] xs:scale-75 sm:scale-95 md:scale-100 origin-top-right select-none">
        {/* The Card Pack Stage */}
        <div className="relative w-60 h-60 sm:h-68 group">
          {/* CARD 1: CutOut AI (Bottom Layer of the Pack - subtle -3° tilt, soft shadow) */}
          <div
            onClick={() => onSelectProject('cutoutai')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectProject('cutoutai')}
            aria-label="View CutOut AI project details"
            className="absolute top-0 left-0 w-54 sm:w-56 bg-white p-2.5 rounded-xs shadow-md transition-all duration-300 border border-neutral-100 cursor-pointer -rotate-3 group-hover:-rotate-6 group-hover:-translate-x-4 group-hover:-translate-y-2 hover:!rotate-0 hover:!scale-105 hover:!z-40 hover:border-[#ff4d15] hover:shadow-xl z-10"
          >
            <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden mb-2 relative rounded-xs">
              <img
                src="/images/project_cutoutai.png"
                alt="CutOut AI"
                onError={(e) => {
                  e.currentTarget.src = '/images/blog_synth.png';
                }}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
                <span className="text-[9px] font-mono font-medium text-white bg-black/75 px-1.5 py-0.5 rounded-xs">
                  Vision AI
                </span>
                <span className="text-[9px] font-mono font-medium text-purple-200 bg-purple-900/85 px-1.5 py-0.5 rounded-xs">
                  4K Realtime
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[#111111] text-xs font-bold tracking-tight">
              <span className="uppercase font-black text-[11px]">✱ CUTOUT AI</span>
              <span className="text-neutral-500 font-mono text-[10px]">/OpenCV</span>
            </div>
          </div>

          {/* CARD 2: AuraERP (Middle Layer of the Pack - subtle +2° tilt, soft shadow) */}
          <div
            onClick={() => onSelectProject('auraerp')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectProject('auraerp')}
            aria-label="View AuraERP project details"
            className="absolute top-1.5 left-1.5 w-54 sm:w-56 bg-white p-2.5 rounded-xs shadow-md transition-all duration-300 border border-neutral-100 cursor-pointer rotate-2 group-hover:rotate-4 group-hover:translate-x-4 group-hover:-translate-y-1 hover:!rotate-0 hover:!scale-105 hover:!z-40 hover:border-[#ff4d15] hover:shadow-xl z-20"
          >
            <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden mb-2 relative rounded-xs">
              <img
                src="/images/project_auraerp.png"
                alt="AuraERP Platform"
                onError={(e) => {
                  e.currentTarget.src = '/images/blog_teal_chair.png';
                }}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
                <span className="text-[9px] font-mono font-medium text-white bg-black/75 px-1.5 py-0.5 rounded-xs">
                  Supabase
                </span>
                <span className="text-[9px] font-mono font-medium text-cyan-200 bg-cyan-900/85 px-1.5 py-0.5 rounded-xs">
                  Sub-300ms
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[#111111] text-xs font-bold tracking-tight">
              <span className="uppercase font-black text-[11px]">✱ AURAERP</span>
              <span className="text-neutral-500 font-mono text-[10px]">/MERN</span>
            </div>
          </div>

          {/* CARD 3: SwiftPDF (Top / Front Layer - zero heavy shade, clean border) */}
          <div
            onClick={() => onSelectProject('swiftpdf')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectProject('swiftpdf')}
            aria-label="View SwiftPDF project details"
            className="absolute top-3 left-1 w-54 sm:w-56 bg-white p-3 rounded-xs shadow-lg transition-all duration-300 border border-neutral-200/90 cursor-pointer -rotate-0.5 group-hover:rotate-0 group-hover:scale-102 hover:!rotate-0 hover:!scale-105 hover:!z-40 hover:border-[#ff4d15] hover:shadow-xl z-30"
          >
            <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden mb-2.5 relative rounded-xs">
              <img
                src="/images/hero_zentix.png"
                alt="SwiftPDF Intelligence Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
                <span className="text-[9.5px] font-mono font-medium text-white bg-black/75 px-1.5 py-0.5 rounded-xs">
                  37+ PDF Tools
                </span>
                <span className="text-[9.5px] font-mono font-medium text-emerald-200 bg-emerald-950/90 px-1.5 py-0.5 rounded-xs">
                  Sub-200ms
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[#111111] text-xs font-bold tracking-tight">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ff4d15]" />
                <span className="uppercase font-black text-[11px]">✱ SWIFTPDF</span>
              </div>
              <span className="text-neutral-500 font-mono text-[10.5px]">/Next.js 15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area: Typography & Contact Card in Responsive Flow */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-12 pb-16 sm:pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        {/* Left: Branding & Giant LAKSHYA */}
        <div className="flex flex-col justify-end">
          <span className="text-[11px] sm:text-sm font-mono tracking-widest text-white/80 uppercase block mb-0.5 sm:mb-1">
            {HERO_DATA.year} {HERO_DATA.brandMark}
          </span>
          <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">
            {HERO_DATA.name}
          </h1>
        </div>

        {/* Right: "Let's Talk — Lakshya Chourasia" Badge */}
        <div className="self-end sm:self-auto sm:mb-2">
          <div
            onClick={() => onNavigate('contact')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate('contact')}
            aria-label="Contact Lakshya Chourasia"
            className={`group flex items-center gap-3 sm:gap-3.5 bg-[#111111] text-white p-2.5 sm:p-3 pr-3.5 sm:pr-4 rounded-lg shadow-2xl border border-neutral-800 hover:border-[#ff4d15] transition-all cursor-pointer ${
              versionMode === 'v2' ? 'hover:-translate-y-1 hover:shadow-orange-500/20' : ''
            }`}
          >
            <img
              src="/images/cat_intro.png"
              alt="Lakshya Avatar"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover border border-neutral-700 group-hover:border-[#ff4d15] transition-colors bg-white/10 shrink-0"
              onError={(e) => {
                if (e.currentTarget.src.indexOf('lakshya_avatar.png') === -1) {
                  e.currentTarget.src = '/images/lakshya_avatar.png';
                }
              }}
            />
            <div className="flex flex-col text-left min-w-0">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#ff4d15] uppercase tracking-wider font-semibold truncate flex items-center gap-1">
                <span>Let's Talk — Lakshya</span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                Lakshya Chourasia
              </span>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-mono truncate">
                SDE & Full-Stack Intern
              </span>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-neutral-800 group-hover:bg-[#ff4d15] flex items-center justify-center transition-colors ml-1 shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:rotate-45 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
