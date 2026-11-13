import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { validateContactForm } from '../utils/portfolioLogic';
import { HERO_DATA } from '../data/portfolioData';

export const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'Tech Recruiter',
    email: 'recruiter@tech.com',
    message: 'We would love to interview you for our SDE / Full-Stack Internship role.',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section className="w-full bg-[#f4f4f4] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Glow Container */}
        <div className="relative w-full rounded-sm overflow-hidden bg-neutral-900 min-h-[500px] p-8 sm:p-14 shadow-2xl flex items-center border border-neutral-800">
          {/* Background Image / Ambient Lighting */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/cta_bg.png"
              alt="Fiery abstract ambient backdrop"
              className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Grid Container */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Floating Form Card matching video */}
            <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-xs shadow-2xl text-[#111111]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
                <span className="text-sm font-black tracking-tight uppercase">
                  {HERO_DATA.brandMark}
                </span>
                <span className="text-xs font-mono font-semibold text-[#ff4d15] uppercase tracking-wider">
                  Connect With Lakshya
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#111111]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Thank you for reaching out, {formData.name}. I'll review your project and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 bg-neutral-900 text-white text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer hover:bg-[#ff4d15] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="cta-name" className="block text-xs font-mono text-neutral-500 uppercase mb-1">
                      Name
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 text-xs text-neutral-900 rounded-xs focus:outline-none focus:border-[#ff4d15]"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 mt-0.5 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cta-email" className="block text-xs font-mono text-neutral-500 uppercase mb-1">
                      Email
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@framer.com"
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 text-xs text-neutral-900 rounded-xs focus:outline-none focus:border-[#ff4d15]"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 mt-0.5 block">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cta-message" className="block text-xs font-mono text-neutral-500 uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      id="cta-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message"
                      className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 text-xs text-neutral-900 rounded-xs focus:outline-none focus:border-[#ff4d15] resize-none"
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 mt-0.5 block">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-black hover:bg-[#ff4d15] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>YOUR MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: High-Impact Typography on Glowing Ambient */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-white lg:pl-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff4d15]">
                // GET IN TOUCH
              </span>

              <h3 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
                LET'S CREATE <br />
                <span className="text-white/80">TOGETHER</span>
              </h3>

              <div className="space-y-2 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff4d15]">✦</span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    RESULTS-DRIVEN SOLUTIONS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                  Refining the design through user feedback and testing to ensure the best possible conversion and brand experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
