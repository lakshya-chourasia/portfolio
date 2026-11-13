import React from 'react';
import { TICKER_STRING } from '../data/portfolioData';

export const TrustedBrands: React.FC = () => {
  return (
    <section className="w-full bg-[#161616] border-y border-neutral-800 py-3.5 overflow-hidden select-none">
      <div className="relative flex items-center whitespace-nowrap overflow-hidden">
        {/* Infinite scrolling ticker container */}
        <div className="flex items-center gap-8 animate-marquee text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-white/90">
          <span className="flex items-center gap-3">
            <span className="text-[#ff4d15]">✦</span>
            <span>{TICKER_STRING}</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="text-[#ff4d15]">✦</span>
            <span>{TICKER_STRING}</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="text-[#ff4d15]">✦</span>
            <span>{TICKER_STRING}</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="text-[#ff4d15]">✦</span>
            <span>{TICKER_STRING}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
