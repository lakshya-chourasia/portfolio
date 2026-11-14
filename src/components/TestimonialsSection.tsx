import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 sm:py-28 text-[#111111] border-t border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Section Tag */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // DESIGNS CLIENTS LOVE
          </span>
        </div>

        {/* Section Headline & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none max-w-2xl">
            WHAT MY <br />
            <span className="text-neutral-500 font-extrabold">CLIENTS SAY</span>
          </h2>

          <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-500 max-w-md leading-relaxed">
            CREATING THOUGHTFUL AND USER-FOCUSED DESIGNS THAT HELP BRANDS GROW, IMPROVE USER EXPERIENCES LEAVE LASTING IMPRESSIONS.
          </p>
        </div>

        {/* Horizontal Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-7 rounded-xs border border-neutral-200 shadow-sm flex flex-col justify-between min-h-[300px] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ff4d15] mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-900 text-white font-bold text-xs flex items-center justify-center">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-[#111111] group-hover:text-[#ff4d15] transition-colors">
                    {testimonial.name}
                  </h4>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
