import React from 'react';
import { IMPACT_STATS, HERO_DATA } from '../data/portfolioData';

export const ImpactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 sm:py-28 text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Section Header Tag */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // BETTER DIGITAL JOURNEYS
          </span>
        </div>

        {/* Big Headline with Decorative Star */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[1.05] max-w-3xl">
            MY IMPACT <br />
            <span className="text-neutral-500 font-extrabold">THROUGH USER</span> EXPERIENCE
          </h2>

          <div className="hidden lg:flex items-center justify-center w-20 h-20 text-[#ff4d15] animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current">
              <path d="M50 0 L58 35 L93 20 L72 50 L93 80 L58 65 L50 100 L42 65 L7 80 L28 50 L7 20 L42 35 Z" />
            </svg>
          </div>
        </div>

        {/* Content Grid: Left Images & Right Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Artistic Photography Pair */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Main blurred motion portrait */}
            <div className="relative w-64 sm:w-72 aspect-[3/4] bg-neutral-200 overflow-hidden rounded-xs shadow-xl border border-neutral-300">
              <img
                src="/images/impact_motion.png"
                alt="Michael creative direction motion portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating smaller high-contrast red portrait */}
            <div className="absolute -right-2 sm:right-6 -bottom-6 sm:-bottom-8 w-36 sm:w-44 aspect-[3/4] bg-neutral-900 overflow-hidden rounded-xs shadow-2xl border-2 border-white">
              <img
                src="/images/impact_red.png"
                alt="Michael dramatic lighting portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Bio & Impact Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-10 lg:pl-8">
            <p className="text-base sm:text-lg font-medium text-neutral-700 leading-relaxed max-w-lg font-mono uppercase">
              HI, I'M LAKSHYA CHOURASIA, A COMPUTER SCIENCE & ENGINEERING UNDERGRADUATE AND FULL-STACK ENGINEER PASSIONATE ABOUT ZERO-LATENCY WEB PLATFORMS, SCALABLE ARCHITECTURES, AND PRODUCTION-READY INTELLIGENT SYSTEMS.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-neutral-200">
              {IMPACT_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-5xl sm:text-6xl font-black text-[#111111] tracking-tight mb-2">
                    {stat.value}
                  </span>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d15]"></span>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-800">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 leading-normal">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
