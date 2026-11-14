import React from 'react';
import { Trophy, Code2, GraduationCap, Cpu } from 'lucide-react';

interface WhyChooseMeProps {
  versionMode?: 'v1' | 'v2';
}

export const WhyChooseMe: React.FC<WhyChooseMeProps> = ({ versionMode = 'v2' }) => {
  return (
    <section className="w-full bg-[#f4f4f4] py-16 sm:py-28 text-[#111111] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Section Tag */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // KEY METRICS & SYSTEM VIBE
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 sm:mb-16 max-w-4xl">
          ALGORITHMIC RIGOR <br />
          <span className="text-neutral-500 font-extrabold">& SCALABLE</span> <br />
          ENGINEERING
        </h2>

        {/* Bento Grid Layout matching exact requirements */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Global Rank 543 (md:col-span-4) */}
          <div
            className={`md:col-span-4 bg-white p-6 sm:p-8 rounded-xs border border-neutral-200 shadow-sm flex flex-col justify-between transition-all ${
              versionMode === 'v2' ? 'hover:-translate-y-1 hover:shadow-md' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                  // TCS CODEVITA S13
                </span>
                <div className="w-9 h-9 rounded-sm bg-[#ff4d15]/10 text-[#ff4d15] flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
              </div>
              <span className="text-6xl sm:text-7xl font-black text-[#111111] tracking-tight block mb-3">
                #543
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#111111] mb-1">
                Global Rank 543
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                TCS CodeVita Season 13 (Round-2) among 100,000+ competitors worldwide.
              </p>
            </div>
          </div>

          {/* Card 2: 1,200+ Problems (md:col-span-4) */}
          <div
            className={`md:col-span-4 bg-white p-8 rounded-xs border border-neutral-200 shadow-sm flex flex-col justify-between transition-all ${
              versionMode === 'v2' ? 'hover:-translate-y-1 hover:shadow-md' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                  // COMPETITIVE CODING
                </span>
                <div className="w-9 h-9 rounded-sm bg-neutral-900 text-white flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>
              <span className="text-6xl sm:text-7xl font-black text-[#111111] tracking-tight block mb-3">
                1,200+
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#111111] mb-1">
                Algorithmic Problems
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                Solved across LeetCode, GeeksforGeeks, and CodeChef (Dynamic Programming, Graphs, Trees).
              </p>
            </div>
          </div>

          {/* Card 3: 8.0 / 10 CGPA (md:col-span-4) */}
          <div
            className={`md:col-span-4 bg-white p-8 rounded-xs border border-neutral-200 shadow-sm flex flex-col justify-between transition-all ${
              versionMode === 'v2' ? 'hover:-translate-y-1 hover:shadow-md' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                  // ACADEMIC STANDING
                </span>
                <div className="w-9 h-9 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>
              <span className="text-6xl sm:text-7xl font-black text-[#111111] tracking-tight block mb-3">
                8.0
              </span>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#111111] mb-1">
                8.0 / 10 CGPA
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                Current academic score in B.Tech Computer Science & Engineering (Class of 2027).
              </p>
            </div>
          </div>

          {/* Card 4: Fast & Clean Systems (md:col-span-5) */}
          <div
            className={`md:col-span-5 bg-white p-8 rounded-xs border border-neutral-200 shadow-sm flex flex-col justify-between transition-all ${
              versionMode === 'v2' ? 'hover:-translate-y-1 hover:shadow-md' : ''
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#ff4d15]/10 text-[#ff4d15] flex items-center justify-center mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase block mb-2">
                // SYSTEM ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tight mb-4">
                Fast & Clean Systems
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
              Zero-latency asynchronous pipelines, ephemeral memory processing in RAM, and sub-200ms render latencies across high-throughput distributed tools.
            </p>
          </div>

          {/* Card 5: Full-Stack & Cloud Architecture (md:col-span-7) */}
          <div
            className={`md:col-span-7 bg-[#161616] text-white p-8 rounded-xs border border-neutral-800 shadow-sm flex flex-col justify-between transition-all ${
              versionMode === 'v2' ? 'hover:-translate-y-1 hover:shadow-md' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-[#ff4d15] uppercase">
                  // FULL-STACK & SCALABILITY
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Next.js 15 • FastAPI • Supabase
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-4">
                High-Concurrency Production Systems
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
              Engineered with algorithmic rigor, distributed caching, schema normalization, and sub-200ms render latencies across enterprise pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
