import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { CatDancingBeethoven } from './CatDancingBeethoven';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenVersionControl: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenVersionControl }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#f4f4f4] pt-16 pb-16 text-[#111111] border-t border-neutral-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Top Info & Newsletter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-300">
          {/* Left: Bio & Contacts */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed max-w-lg">
              Focused on crafting high-performance, robust, and scalable systems that blend algorithmic rigor, clean architecture, and modern interfaces to <span className="font-bold text-black">deliver real-world impact</span>.
            </p>

            <div className="space-y-1 font-mono text-sm pt-2">
              <a
                href={`tel:${HERO_DATA.directPhone}`}
                className="block text-neutral-500 hover:text-[#ff4d15] transition-colors"
              >
                {HERO_DATA.directPhone}
              </a>
              <a
                href={`mailto:${HERO_DATA.contactEmail}`}
                className="block text-xl font-bold text-[#111111] hover:text-[#ff4d15] transition-colors"
              >
                {HERO_DATA.contactEmail}
              </a>
              <span className="text-xs text-neutral-500 block pt-1">
                {HERO_DATA.location}
              </span>
            </div>
          </div>

          {/* Right: Newsletter Signup */}
          <div className="lg:col-span-6 flex flex-col justify-start lg:pl-12">
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-700 uppercase mb-3 block">
              Direct Contact & Updates
            </span>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white border border-emerald-400 text-emerald-700 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Connected! You'll receive technical articles and project updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="recruiter@techcompany.com"
                  className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs text-neutral-900 rounded-xs focus:outline-none focus:border-[#ff4d15]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#111111] hover:bg-[#ff4d15] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  GET IN TOUCH
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation & Social Links Row */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-neutral-700 hover:text-[#ff4d15] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-neutral-700 hover:text-[#ff4d15] transition-colors cursor-pointer"
                >
                  About Me & Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-neutral-700 hover:text-[#ff4d15] transition-colors cursor-pointer"
                >
                  Projects & Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blogs')}
                  className="text-neutral-700 hover:text-[#ff4d15] transition-colors cursor-pointer"
                >
                  Technical Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-neutral-700 hover:text-[#ff4d15] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-4">
              Connect
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={HERO_DATA.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-700 hover:text-[#ff4d15] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={HERO_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-700 hover:text-[#ff4d15] transition-colors"
                >
                  <span>GitHub Repos</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HERO_DATA.contactEmail}`}
                  className="inline-flex items-center gap-1 text-neutral-700 hover:text-[#ff4d15] transition-colors"
                >
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-4">
              Engineering
            </span>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenVersionControl}
                  className="inline-flex items-center gap-1 text-[#ff4d15] hover:underline font-bold transition-colors cursor-pointer"
                >
                  <span>Version Control History</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <span className="text-neutral-500">ESLint Flat Config: Active</span>
              </li>
              <li>
                <span className="text-neutral-500">React 19 + TypeScript</span>
              </li>
              <li>
                <span className="text-neutral-500">TCS CodeVita Rank 543</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-4">
              Internship Status
            </span>
            <p className="text-neutral-700 font-semibold leading-relaxed mb-2">
              Open for Summer / Fall 2026 SDE & Full-Stack Internships.
            </p>
            <span className="inline-block px-2.5 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-mono rounded-xs">
              Open for Remote & On-site
            </span>
          </div>
        </div>

        {/* End-of-Page Meme: Cat Dancing to Beethoven (100% borderless, no box behind) */}
        <CatDancingBeethoven />

        {/* Huge Watermark: "Lakshya ®" */}
        <div className="pt-10 pb-6 text-center select-none overflow-hidden">
          <span className="text-[14vw] font-black uppercase tracking-tighter text-[#111111]/90 leading-none block hover:text-[#ff4d15] transition-colors duration-500">
            {HERO_DATA.name}<sup className="text-[5vw] align-super">®</sup>
          </span>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <p>©2026 {HERO_DATA.fullName} — All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenVersionControl}
              className="hover:text-[#ff4d15] transition-colors cursor-pointer"
            >
              Changelog & Git Commits
            </button>
            <span>•</span>
            <span>B.Tech CSE (Class of 2027)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
