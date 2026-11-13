import React from 'react';
import { DESIGN_PROCESS } from '../data/portfolioData';

export const DesignProcess: React.FC = () => {
  return (
    <section className="w-full bg-[#fafafa] py-20 sm:py-28 text-[#111111] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Tag */}
        <div className="mb-6 flex items-center justify-center text-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // MY DESIGN PROCESS
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-center leading-none mb-16">
          DESIGN PROCESS <br />
          <span className="text-neutral-500 font-extrabold">THAT WORKS</span>
        </h2>

        {/* 4 Black Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGN_PROCESS.map((proc, idx) => (
            <div
              key={idx}
              className="bg-[#0e0e0e] text-white p-8 rounded-xs flex flex-col justify-between min-h-[280px] shadow-xl border border-neutral-800 hover:border-[#ff4d15] transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl text-[#ff4d15] group-hover:scale-125 transition-transform">
                    ✦
                  </span>
                  <span className="text-xs font-mono text-neutral-500 font-bold">
                    STEP {proc.step}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-[#ff4d15] transition-colors">
                  {proc.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
                {proc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
