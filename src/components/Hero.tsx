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
    <section className="relative w-full min-h-[92vh] pt-20 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#db4819] via-[#cc3f13] to-[#b3330c] text-white select-none">
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

      {/* Top Left Tagline / Statement */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-8 sm:pt-14">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{HERO_DATA.title}</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-white/95 leading-relaxed font-mono">
            "{HERO_DATA.tagline}"
          </p>
        </div>
      </div>

      {/* Main Center Cutout Image: Joyful Wide-Eyed Cat */}
      <div className="relative z-10 flex-1 flex items-end justify-center pointer-events-none px-4 mt-4 sm:mt-0">
        <div className="relative max-w-xl w-full flex items-end justify-center animate-float-hero">
          <img
            src="/assets/aistudio/Joyful_Wide-Eyed_Cat_Sticker_b3a05633.png"
            alt="Joyful Cat Mascot"
            className="w-auto h-[48vh] sm:h-[60vh] max-h-[600px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] translate-y-1 pointer-events-auto [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              if (e.currentTarget.src.indexOf('cat_intro.png') === -1) {
                e.currentTarget.src = '/images/cat_intro.png';
              } else if (e.currentTarget.src.indexOf('cat_front.png') === -1) {
                e.currentTarget.src = '/images/cat_front.png';
              }
            }}
          />
        </div>
      </div>

      {/* Floating Right Tilted Card: * SWIFTPDF /Next.js 15 */}
      <div className="absolute right-6 sm:right-16 top-1/3 z-20 hidden md:block">
        <div
          onClick={() => onSelectProject('swiftpdf')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectProject('swiftpdf')}
          aria-label="View SwiftPDF project details"
          className={`group cursor-pointer bg-white p-3.5 rounded-xs shadow-2xl transition-all duration-300 w-56 border border-white/60 ${
            versionMode === 'v2'
              ? 'hover:scale-105 hover:-rotate-1 rotate-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
              : 'hover:scale-102'
          }`}
        >
          <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden mb-3 relative rounded-xs">
            <img
              src="/images/hero_zentix.png"
              alt="SwiftPDF Intelligence Suite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded-full">
                37+ PDF Tools
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full">
                Sub-200ms
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[#111111] text-xs font-bold tracking-tight">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#ff4d15] animate-spin" />
              <span className="uppercase font-black">✱ SWIFTPDF</span>
            </div>
            <span className="text-neutral-500 font-mono text-[11px]">/Next.js 15</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Right Badge: "Let's Talk — Lakshya Chourasia" */}
      <div className="absolute right-6 sm:right-16 bottom-16 sm:bottom-12 z-20">
        <div
          onClick={() => onNavigate('contact')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate('contact')}
          aria-label="Contact Lakshya Chourasia"
          className={`group flex items-center gap-3.5 bg-[#111111] text-white p-2.5 sm:p-3 pr-4 rounded-lg shadow-2xl border border-neutral-800 hover:border-[#ff4d15] transition-all cursor-pointer ${
            versionMode === 'v2' ? 'hover:-translate-y-1 hover:shadow-orange-500/20' : ''
          }`}
        >
          <img
            src="/assets/aistudio/Joyful_Wide-Eyed_Cat_Sticker_b3a05633.png"
            alt="Joyful Cat Avatar"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-md object-cover border border-neutral-700 group-hover:border-[#ff4d15] transition-colors bg-white/10"
            onError={(e) => {
              if (e.currentTarget.src.indexOf('cat_front.png') === -1) {
                e.currentTarget.src = '/images/cat_front.png';
              }
            }}
          />
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-mono text-[#ff4d15] uppercase tracking-wider font-semibold flex items-center gap-1">
              <span>Let's Talk — Lakshya Chourasia</span>
            </span>
            <span className="text-sm font-bold text-white tracking-tight">
              Lakshya Chourasia
            </span>
            <span className="text-[11px] text-neutral-400 font-mono">
              SDE & Full-Stack Intern
            </span>
          </div>
          <div className="w-8 h-8 rounded bg-neutral-800 group-hover:bg-[#ff4d15] flex items-center justify-center transition-colors ml-1">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
          </div>
        </div>
      </div>

      {/* Bottom Left Huge Typography: "©2026 LAKSHYA" */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pb-6 sm:pb-10 flex flex-col justify-end">
        <span className="text-xs sm:text-sm font-mono tracking-widest text-white/80 uppercase block mb-1">
          {HERO_DATA.year} {HERO_DATA.brandMark}
        </span>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">
          {HERO_DATA.name}
        </h1>
      </div>
    </section>
  );
};
