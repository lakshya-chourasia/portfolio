import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, HERO_DATA } from '../data/portfolioData';
import { CtaSection } from './CtaSection';
import { Footer } from './Footer';

interface ServicesViewProps {
  onNavigate: (view: string) => void;
  onOpenVersionControl: () => void;
  onSelectProject: (projectId: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onOpenVersionControl,
  onSelectProject,
}) => {
  return (
    <div className="w-full min-h-screen bg-white text-[#111111] pt-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-12 pb-14 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#ff4d15] block mb-2">
          {HERO_DATA.brandMark}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            SERVICES & STACK
          </h1>
          <span className="text-xs font-mono text-neutral-400">
            {HERO_DATA.year} [Scroll to Explore]
          </span>
        </div>
      </div>

      {/* Services List Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="space-y-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-12 rounded-xs border border-neutral-200 hover:border-[#ff4d15] transition-all duration-300 shadow-sm hover:shadow-xl bg-white group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#ff4d15] uppercase tracking-widest block mb-2">
                      {service.number} // CAPABILITY
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#ff4d15] transition-colors mb-4">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base font-bold uppercase text-neutral-700 max-w-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-sm bg-neutral-100 border border-neutral-200 text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectProject('swiftpdf')}
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-900 hover:bg-[#ff4d15] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Image Preview Column */}
                <div className="lg:col-span-5">
                  <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-xs border border-neutral-200 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase">
                      {service.number} / LIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button matching video frame 01:24 */}
        <div className="mt-16 text-center flex justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-neutral-400 hover:border-[#ff4d15] hover:bg-[#ff4d15] text-[#111111] hover:text-white transition-all cursor-pointer font-mono text-xs uppercase tracking-wider font-bold shadow-sm group"
          >
            <span>LOAD MORE INQUIRIES</span>
            <div className="w-6 h-6 bg-[#ff4d15] group-hover:bg-black text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </section>

      {/* CTA Section & Footer */}
      <CtaSection />
      <Footer onNavigate={onNavigate} onOpenVersionControl={onOpenVersionControl} />
    </div>
  );
};
