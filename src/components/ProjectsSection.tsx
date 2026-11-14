import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onNavigate: (view: string) => void;
  versionMode?: 'v1' | 'v2';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onNavigate,
  versionMode = 'v2',
}) => {
  return (
    <section className="w-full bg-[#f6f6f6] py-16 sm:py-28 text-[#111111] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Section Tag */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // FEATURED ENGINEERING WORK
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            ENGINEERED <br />
            SYSTEMS.
          </h2>
          <p className="max-w-md text-xs sm:text-sm font-mono text-neutral-600 leading-relaxed">
            High-performance web applications, distributed pipelines, and intelligent computer vision models built for speed, scale, and zero downtime.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {/* Project 1: SwiftPDF Intelligence Suite (Panoramic Hero Project) */}
          {PROJECTS[0] && (
            <div
              onClick={() => onSelectProject(PROJECTS[0].id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectProject(PROJECTS[0].id)}
              aria-label={`View ${PROJECTS[0].title} case study`}
              className={`w-full group cursor-pointer bg-white p-6 sm:p-10 rounded-xs shadow-md border border-neutral-200 transition-all duration-300 ${
                versionMode === 'v2' ? 'hover:shadow-2xl hover:-translate-y-1' : 'hover:border-black'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 aspect-[16/10] bg-neutral-900 overflow-hidden rounded-xs relative">
                  <img
                    src={PROJECTS[0].image}
                    alt={PROJECTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono font-bold text-white flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="w-3 h-3 text-[#ff4d15]" />
                    <span>001 // ENTERPRISE FLAGSHIP</span>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-[#ff4d15]" />
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#ff4d15] uppercase tracking-wider block mb-2">
                      {PROJECTS[0].tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111] mb-3 group-hover:text-[#ff4d15] transition-colors">
                      {PROJECTS[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed mb-6">
                      {PROJECTS[0].description}
                    </p>

                    {/* Architecture highlights list */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                        Architecture Highlights:
                      </span>
                      {PROJECTS[0].architectureHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {PROJECTS[0].techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-[11px] font-mono font-semibold rounded-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Row 2: AuraERP & CutOut AI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Project 2: AuraERP */}
            {PROJECTS[1] && (
              <div
                onClick={() => onSelectProject(PROJECTS[1].id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectProject(PROJECTS[1].id)}
                aria-label={`View ${PROJECTS[1].title} case study`}
                className={`group cursor-pointer bg-white p-6 sm:p-8 rounded-xs shadow-md border border-neutral-200 flex flex-col justify-between transition-all duration-300 ${
                  versionMode === 'v2' ? 'hover:shadow-2xl hover:-translate-y-1' : 'hover:border-black'
                }`}
              >
                <div>
                  <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden mb-6 relative rounded-xs">
                    <img
                      src={PROJECTS[1].image}
                      alt={PROJECTS[1].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono font-bold text-white flex items-center gap-1.5 border border-white/20">
                      <span>002 // CLOUD ERP</span>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-[#ff4d15]" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#ff4d15] uppercase tracking-wider block mb-1">
                    {PROJECTS[1].tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111] mb-3 group-hover:text-[#ff4d15] transition-colors">
                    {PROJECTS[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed mb-6">
                    {PROJECTS[1].description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                      Architecture Highlights:
                    </span>
                    {PROJECTS[1].architectureHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {PROJECTS[1].techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-[11px] font-mono font-semibold rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Project 3: CutOut AI */}
            {PROJECTS[2] && (
              <div
                onClick={() => onSelectProject(PROJECTS[2].id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectProject(PROJECTS[2].id)}
                aria-label={`View ${PROJECTS[2].title} case study`}
                className={`group cursor-pointer bg-white p-6 sm:p-8 rounded-xs shadow-md border border-neutral-200 flex flex-col justify-between transition-all duration-300 ${
                  versionMode === 'v2' ? 'hover:shadow-2xl hover:-translate-y-1' : 'hover:border-black'
                }`}
              >
                <div>
                  <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden mb-6 relative rounded-xs">
                    <img
                      src={PROJECTS[2].image}
                      alt={PROJECTS[2].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono font-bold text-white flex items-center gap-1.5 border border-white/20">
                      <span>003 // COMPUTER VISION</span>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-[#ff4d15]" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#ff4d15] uppercase tracking-wider block mb-1">
                    {PROJECTS[2].tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111] mb-3 group-hover:text-[#ff4d15] transition-colors">
                    {PROJECTS[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed mb-6">
                    {PROJECTS[2].description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                      Architecture Highlights:
                    </span>
                    {PROJECTS[2].architectureHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {PROJECTS[2].techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-[11px] font-mono font-semibold rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA: View GitHub Repos */}
        <div className="mt-16 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-neutral-200">
          <button
            onClick={() => onNavigate('contact')}
            className="group flex items-center gap-3 px-6 py-4 bg-white hover:bg-neutral-900 border border-neutral-300 hover:border-neutral-900 text-[#111111] hover:text-white transition-all cursor-pointer font-mono text-xs uppercase tracking-wider font-bold shadow-sm"
          >
            <span>DISCUSS AN ARCHITECTURE</span>
            <div className="w-6 h-6 bg-[#ff4d15] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>

          <a
            href="https://github.com/lakshya-chourasia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 hover:text-[#ff4d15] transition-colors"
          >
            <span>EXPLORE GITHUB /lakshya-chourasia</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
