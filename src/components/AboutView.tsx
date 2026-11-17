import React, { useState } from 'react';
import { Plus, Minus, Trophy, Cloud, Award, Zap, Cpu, GraduationCap, Code2, CheckCircle2 } from 'lucide-react';
import {
  HERO_DATA,
  EDUCATION,
  HONORS_CERTIFICATIONS,
  SKILLS_ARSENAL,
  CAREER_JOURNEY,
  FAQS,
} from '../data/portfolioData';
import { WhyChooseMe } from './WhyChooseMe';
import { WorkspaceMedia } from './WorkspaceMedia';
import { CtaSection } from './CtaSection';
import { Footer } from './Footer';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenVersionControl: () => void;
  versionMode?: 'v1' | 'v2';
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenVersionControl,
  versionMode = 'v2',
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#111111] pt-20">
      {/* Top Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-12 pb-10">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#ff4d15] block mb-2">
          {HERO_DATA.brandMark}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            ABOUT ME
          </h1>
          <span className="text-xs font-mono text-neutral-400">
            {HERO_DATA.year} [Scroll to Explore]
          </span>
        </div>
      </div>

      {/* Horizontal Photo Strip: Top 5 Anime Character Icons */}
      <div className="w-full overflow-x-auto pb-8 scrollbar-none px-6 sm:px-12">
        <div className="flex items-center gap-4 min-w-[900px] max-w-7xl mx-auto">
          {/* 1. Satoru Gojo */}
          <div className="w-1/5 aspect-[3/4] bg-neutral-900 overflow-hidden rounded-xs shadow-md border border-neutral-300 relative group">
            <picture className="contents">
              <source srcSet="/images/about_strip_1.webp" type="image/webp" />
              <img
                src="/images/about_strip_1.png"
                alt="Satoru Gojo - Jujutsu Kaisen"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
            </picture>
            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] font-black uppercase tracking-tight text-white leading-tight font-mono">
                Satoru Gojo
              </span>
              <span className="text-[9px] font-mono text-cyan-300 tracking-wider">
                Jujutsu Kaisen
              </span>
            </div>
          </div>

          {/* 2. Monkey D. Luffy */}
          <div className="w-1/5 aspect-[3/4] bg-neutral-900 overflow-hidden rounded-xs shadow-md border border-neutral-300 relative group">
            <picture className="contents">
              <source srcSet="/images/about_strip_2.webp" type="image/webp" />
              <img
                src="/images/about_strip_2.png"
                alt="Monkey D. Luffy - One Piece"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
            </picture>
            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] font-black uppercase tracking-tight text-white leading-tight font-mono">
                Monkey D. Luffy
              </span>
              <span className="text-[9px] font-mono text-amber-300 tracking-wider">
                One Piece
              </span>
            </div>
          </div>

          {/* 3. Naruto Uzumaki */}
          <div className="w-1/5 aspect-[3/4] bg-neutral-900 overflow-hidden rounded-xs shadow-md border border-neutral-300 relative group">
            <picture className="contents">
              <source srcSet="/images/about_strip_3.webp" type="image/webp" />
              <img
                src="/images/about_strip_3.png"
                alt="Naruto Uzumaki - Naruto Shippuden"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
            </picture>
            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] font-black uppercase tracking-tight text-white leading-tight font-mono">
                Naruto Uzumaki
              </span>
              <span className="text-[9px] font-mono text-[#ff4d15] tracking-wider">
                Naruto Shippuden
              </span>
            </div>
          </div>

          {/* 4. Roronoa Zoro */}
          <div className="w-1/5 aspect-[3/4] bg-neutral-900 overflow-hidden rounded-xs shadow-md border border-neutral-300 relative group">
            <picture className="contents">
              <source srcSet="/images/about_strip_4.webp" type="image/webp" />
              <img
                src="/images/about_strip_4.png"
                alt="Roronoa Zoro - One Piece"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
            </picture>
            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] font-black uppercase tracking-tight text-white leading-tight font-mono">
                Roronoa Zoro
              </span>
              <span className="text-[9px] font-mono text-emerald-400 tracking-wider">
                One Piece
              </span>
            </div>
          </div>

          {/* 5. Levi Ackerman */}
          <div className="w-1/5 aspect-[3/4] bg-neutral-900 overflow-hidden rounded-xs shadow-md border border-neutral-300 relative group">
            <picture className="contents">
              <source srcSet="/images/about_strip_5.webp" type="image/webp" />
              <img
                src="/images/about_strip_5.png"
                alt="Levi Ackerman - Attack on Titan"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
            </picture>
            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] font-black uppercase tracking-tight text-white leading-tight font-mono">
                Levi Ackerman
              </span>
              <span className="text-[9px] font-mono text-purple-300 tracking-wider">
                Attack on Titan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Engineering Statement */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-20 border-t border-neutral-200">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // CORE IDENTITY & MISSION
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight max-w-5xl mb-8">
          LAKSHYA DESIGNS & BUILDS HIGH-PERFORMANCE WEB SYSTEMS AND INTELLIGENT PIPELINES.
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed max-w-3xl mb-16">
          I am a Computer Science & Engineering undergraduate at Technocrats Institute of Technology - Excellence, competitive coder (Global Rank 543 TCS CodeVita Season 13), and full-stack engineer. I specialize in zero-latency asynchronous architectures, ephemeral memory processing, and responsive frontends that perform seamlessly under load.
        </p>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-neutral-200">
          <div className="flex flex-col">
            <span className="text-5xl font-black text-[#111111] tracking-tight mb-2">
              #543
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-1">
              Global Rank 543
            </span>
            <p className="text-xs text-neutral-500">
              TCS CodeVita Season 13 Round-2 among 100,000+ competitors worldwide.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-5xl font-black text-[#111111] tracking-tight mb-2">
              1,200+
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-1">
              Algorithms Solved
            </span>
            <p className="text-xs text-neutral-500">
              LeetCode, GFG, and CodeChef (DP, Graphs, Trees).
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-5xl font-black text-[#111111] tracking-tight mb-2">
              8.0
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-1">
              CGPA / 10
            </span>
            <p className="text-xs text-neutral-500">
              B.Tech in Computer Science & Engineering (Class of 2027).
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-5xl font-black text-[#111111] tracking-tight mb-2">
              10+
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-1">
              Hackathons Led
            </span>
            <p className="text-xs text-neutral-500">
              Directed engineering squads with 100% on-time deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full bg-[#f8f8f8] py-20 sm:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
              // ACADEMIC FOUNDATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            EDUCATION.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="bg-white p-8 rounded-xs border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-neutral-100 flex items-center justify-center text-neutral-800 mb-6">
                    <GraduationCap className="w-5 h-5 text-[#ff4d15]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#111111] mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed mb-4">
                    {edu.institution}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#ff4d15]">
                    {edu.score}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {edu.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Arsenal */}
      <section className="w-full bg-white py-20 sm:py-28 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
              // TECHNICAL SKILLS ARSENAL
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            ENGINEERING <br />
            ARSENAL.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_ARSENAL.map((category, idx) => (
              <div
                key={idx}
                className="p-6 bg-neutral-50 rounded-xs border border-neutral-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-4 h-4 text-[#ff4d15]" />
                    <h3 className="text-sm font-black uppercase tracking-wider text-neutral-900 font-mono">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 bg-white border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold rounded-xs shadow-2xs hover:border-[#ff4d15] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section: HONORS, AWARDS & CERTIFICATIONS */}
      <section className="w-full bg-[#0d0d0d] text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
              // HONORS, AWARDS & CERTIFICATIONS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              HONORS & <br />
              CERTIFICATIONS.
            </h2>
            <p className="max-w-md text-xs sm:text-sm font-mono text-neutral-400">
              Validated expertise across global algorithmic competitions, Microsoft cloud architecture, enterprise Java, and deep AI foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HONORS_CERTIFICATIONS.map((item) => (
              <div
                key={item.id}
                className="bg-[#141414] p-8 rounded-xs border border-neutral-800 hover:border-[#ff4d15] transition-all duration-300 group flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-neutral-900 border border-neutral-800 text-[#ff4d15] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {item.iconType === 'code' && <Trophy className="w-5 h-5 text-[#ff4d15]" />}
                      {item.iconType === 'cloud' && <Cloud className="w-5 h-5 text-sky-400" />}
                      {item.iconType === 'award' && <Award className="w-5 h-5 text-amber-400" />}
                      {item.iconType === 'cpu' && <Cpu className="w-5 h-5 text-emerald-400" />}
                      {item.iconType === 'zap' && <Zap className="w-5 h-5 text-violet-400" />}
                    </div>

                    <span className="text-xs font-mono font-bold text-neutral-500">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#ff4d15] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500 uppercase">{item.issuer}</span>
                  {item.badge && (
                    <span className="text-[#ff4d15] font-bold bg-[#ff4d15]/10 px-2 py-0.5 rounded-xs">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career & Project Leadership Journey */}
      <section className="w-full bg-[#f8f8f8] py-24 sm:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
              // ARCHITECTURAL JOURNEY
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-16 max-w-4xl">
            PURPOSE-BUILT <br />
            <span className="text-neutral-500 font-extrabold">SYSTEMS FOR</span> <br />
            REAL-WORLD IMPACT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CAREER_JOURNEY.map((item) => (
              <div key={item.id} className="group bg-white p-6 rounded-xs border border-neutral-200 shadow-sm">
                <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden mb-6 relative">
                  <img
                    src={item.image}
                    alt={item.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#111111]">
                    {item.company} <span className="text-neutral-500 font-mono text-xs">{item.period}</span>
                  </h3>
                  <span className="text-xs font-mono text-[#ff4d15] font-bold">
                    {item.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid & Cat Dancing to Beethoven */}
      <WhyChooseMe versionMode={versionMode} />
      <WorkspaceMedia />

      {/* FAQ Accordion Section */}
      <section className="w-full bg-white py-24 sm:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left FAQ Title */}
            <div className="lg:col-span-5 sticky top-28">
              <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase block mb-3">
                // FAQ
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                FREQUENT <br />
                QUESTIONS
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed max-w-sm">
                Have questions about internship availability, tech stacks, or collaboration? Here are answers to commonly asked questions.
              </p>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 divide-y divide-neutral-200">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.id} className="py-6">
                    <button
                      onClick={() => toggleFaq(idx)}
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

      {/* CTA Section & Footer */}
      <CtaSection />
      <Footer onNavigate={onNavigate} onOpenVersionControl={onOpenVersionControl} />
    </div>
  );
};
