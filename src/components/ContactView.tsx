import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Plus, Minus, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { HERO_DATA, FAQS } from '../data/portfolioData';
import { Footer } from './Footer';

interface ContactViewProps {
  onNavigate: (view: string) => void;
  onOpenVersionControl: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenVersionControl,
}) => {
  const [formData, setFormData] = useState({
    firstName: 'Hiring',
    lastName: 'Manager',
    email: 'recruiter@company.com',
    message: 'We are interested in interviewing you for our Summer 2026 SDE / Full-Stack Internship.',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#111111] pt-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-12 pb-14 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#ff4d15] block mb-2">
          {HERO_DATA.brandMark}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            CONTACT LAKSHYA
          </h1>
          <span className="text-xs font-mono text-neutral-400">
            {HERO_DATA.year} [Available for Summer / Fall 2026]
          </span>
        </div>
      </div>

      {/* Info Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Ready to Start? (md:col-span-5) */}
          <div className="md:col-span-5 bg-neutral-100 p-8 sm:p-10 rounded-xs border border-neutral-300 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase block mb-4">
                // SDE & FULL-STACK INTERNSHIPS
              </span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#111111] mb-4">
                GET IN TOUCH
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed mb-6">
                Looking for a high-performing engineer with Global Rank 543 in TCS CodeVita, 1,200+ algorithms solved, and hands-on Next.js 15 & FastAPI experience? Let's connect!
              </p>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('inquiry-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-6 py-4 bg-white hover:bg-neutral-900 border border-neutral-300 hover:border-black text-[#111111] hover:text-white transition-all cursor-pointer font-mono text-xs uppercase tracking-wider font-bold shadow-sm group self-start"
            >
              <span>SEND A MESSAGE</span>
              <div className="w-6 h-6 bg-[#ff4d15] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Card 2: Contact Details Grid (md:col-span-7) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-neutral-100 p-8 rounded-xs border border-neutral-300 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase text-neutral-500 block mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff4d15]" />
                <span>Location:</span>
              </span>
              <div>
                <p className="text-base sm:text-lg font-black uppercase text-[#111111] leading-tight mb-1">
                  Bhopal, Madhya Pradesh
                </p>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">
                  Open for Remote & On-site
                </span>
              </div>
            </div>

            <div className="bg-neutral-100 p-8 rounded-xs border border-neutral-300 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase text-neutral-500 block mb-3">
                Candidate Status:
              </span>
              <div>
                <p className="text-base sm:text-lg font-black uppercase text-[#111111] leading-tight mb-1">
                  Summer / Fall 2026
                </p>
                <span className="text-xs font-mono text-neutral-600">
                  SDE & Full-Stack Intern
                </span>
              </div>
            </div>

            <div className="bg-neutral-100 p-8 rounded-xs border border-neutral-300 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase text-neutral-500 block mb-3 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ff4d15]" />
                <span>Phone:</span>
              </span>
              <a
                href={`tel:${HERO_DATA.contactPhone}`}
                className="text-base sm:text-lg font-black text-[#111111] hover:text-[#ff4d15] transition-colors"
              >
                {HERO_DATA.contactPhone}
              </a>
            </div>

            <div className="bg-neutral-100 p-8 rounded-xs border border-neutral-300 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase text-neutral-500 block mb-3 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff4d15]" />
                <span>Email:</span>
              </span>
              <a
                href={`mailto:${HERO_DATA.contactEmail}`}
                className="text-sm sm:text-base font-black text-[#111111] hover:text-[#ff4d15] transition-colors break-all"
              >
                {HERO_DATA.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="w-full bg-[#0d0d0d] text-white py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
              // RECRUITER & SPRINT INQUIRY
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-14">
            {HERO_DATA.brandMark} <br />
            CONNECT NOW
          </h2>

          {isSubmitted ? (
            <div className="bg-[#141414] border border-neutral-800 p-12 text-center rounded-xs space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white">
                Message Dispatched
              </h3>
              <p className="text-sm text-neutral-400 max-w-md mx-auto">
                Thank you for reaching out, {formData.firstName}. I will review your inquiry and follow up promptly via {formData.email}.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-3 bg-[#ff4d15] text-white text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer hover:bg-white hover:text-black transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-first-name" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                    // FIRST NAME
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#171717] border border-neutral-800 text-sm text-white rounded-xs focus:outline-none focus:border-[#ff4d15]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-last-name" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                    // LAST NAME
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#171717] border border-neutral-800 text-sm text-white rounded-xs focus:outline-none focus:border-[#ff4d15]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                  // WORK EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-[#171717] border border-neutral-800 text-sm text-white rounded-xs focus:outline-none focus:border-[#ff4d15]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                  // MESSAGE / ROLE DETAILS
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 bg-[#171717] border border-neutral-800 text-sm text-white rounded-xs focus:outline-none focus:border-[#ff4d15] resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group flex items-center gap-3 px-8 py-4 bg-[#ff4d15] hover:bg-white text-white hover:text-black transition-all cursor-pointer font-mono text-xs uppercase tracking-wider font-bold rounded-xs shadow-lg"
                >
                  <span>SUBMIT MESSAGE</span>
                  <div className="w-6 h-6 bg-black group-hover:bg-[#ff4d15] text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full bg-white py-24 sm:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 sticky top-28">
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase block mb-3">
                // FAQ
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                FREQUENT <br />
                QUESTIONS
              </h2>
            </div>

            <div className="lg:col-span-7 divide-y divide-neutral-200">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.id} className="py-6">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-black uppercase tracking-tight text-[#111111] group-hover:text-[#ff4d15] transition-colors pr-6">
                        {faq.number} {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-neutral-300 group-hover:border-[#ff4d15] flex items-center justify-center shrink-0 text-neutral-600 group-hover:text-[#ff4d15] transition-colors">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pt-4 pr-10 text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} onOpenVersionControl={onOpenVersionControl} />
    </div>
  );
};
