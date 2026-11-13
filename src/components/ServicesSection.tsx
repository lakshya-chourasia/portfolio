import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onNavigate: (view: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section className="w-full bg-white py-20 sm:py-28 text-[#111111] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header Tag */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // OUR SERVICES
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-16 max-w-4xl">
          POWERFUL <br />
          <span className="text-neutral-500 font-extrabold">DESIGN SERVICES</span> <br />
          FOR YOUR BRAND
        </h2>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: List of Services */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200">
            {SERVICES.slice(0, 4).map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-6 sm:gap-10">
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#ff4d15] pt-1">
                      {service.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight transition-colors ${
                          isActive ? 'text-[#ff4d15]' : 'text-[#111111] group-hover:text-[#ff4d15]'
                        }`}>
                          {service.title}
                        </h3>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive ? 'bg-[#ff4d15] text-white rotate-45' : 'bg-neutral-100 text-neutral-400 group-hover:bg-[#ff4d15] group-hover:text-white'
                        }`}>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-600 mb-5 max-w-lg font-medium leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[11px] font-mono px-3 py-1 rounded-sm border transition-colors ${
                              isActive
                                ? 'bg-neutral-100 border-neutral-300 text-neutral-900 font-semibold'
                                : 'bg-white border-neutral-200 text-neutral-500'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Card matching active service */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="bg-neutral-100 p-6 rounded-xs border border-neutral-200 shadow-xl">
              <div className="relative w-full aspect-[4/3] bg-neutral-200 overflow-hidden mb-6">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#111111]/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-wider">
                  {activeService.number} / PREVIEW
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black uppercase text-[#111111] tracking-tight">
                    {activeService.title}
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    End-to-End Design Execution
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('services')}
                  aria-label={`View details for ${activeService.title}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#ff4d15] hover:bg-[#e03d07] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
