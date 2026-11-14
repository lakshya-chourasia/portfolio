import React from 'react';
import { X, Linkedin, Github, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
  onOpenVersionControl: () => void;
  onOpenResume?: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenVersionControl,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  const handleNavClick = (view: string) => {
    onNavigate(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0d0d] flex flex-col justify-between overflow-y-auto overscroll-contain animate-in fade-in duration-200 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      {/* Top bar inside menu */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-12 py-5 sm:py-8 flex items-center justify-between border-b border-neutral-800">
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl font-black tracking-tight text-white flex items-center gap-1 cursor-pointer"
        >
          <span>{HERO_DATA.name}</span>
          <span className="text-[#ff4d15] text-xs font-semibold align-super">®</span>
        </button>

        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-white hover:text-[#ff4d15] hover:border-[#ff4d15] transition-all cursor-pointer"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-12 py-8 sm:py-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Column: Big Navigation Links with + */}
        <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center justify-between text-left text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white hover:text-[#ff4d15] transition-all cursor-pointer tracking-tight"
          >
            <span>HOME</span>
            <span className="text-2xl sm:text-4xl text-neutral-600 group-hover:text-[#ff4d15] group-hover:rotate-45 transition-all">
              +
            </span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="group flex items-center justify-between text-left text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white hover:text-[#ff4d15] transition-all cursor-pointer tracking-tight"
          >
            <span>ABOUT</span>
            <span className="text-2xl sm:text-4xl text-neutral-600 group-hover:text-[#ff4d15] group-hover:rotate-45 transition-all">
              +
            </span>
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className="group flex items-center justify-between text-left text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white hover:text-[#ff4d15] transition-all cursor-pointer tracking-tight"
          >
            <span>PROJECTS</span>
            <span className="text-2xl sm:text-4xl text-neutral-600 group-hover:text-[#ff4d15] group-hover:rotate-45 transition-all">
              +
            </span>
          </button>

          <button
            onClick={() => handleNavClick('blogs')}
            className="group flex items-center justify-between text-left text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white hover:text-[#ff4d15] transition-all cursor-pointer tracking-tight"
          >
            <span>ARTICLES</span>
            <span className="text-2xl sm:text-4xl text-neutral-600 group-hover:text-[#ff4d15] group-hover:rotate-45 transition-all">
              +
            </span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="group flex items-center justify-between text-left text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white hover:text-[#ff4d15] transition-all cursor-pointer tracking-tight"
          >
            <span>CONTACT</span>
            <span className="text-2xl sm:text-4xl text-neutral-600 group-hover:text-[#ff4d15] group-hover:rotate-45 transition-all">
              +
            </span>
          </button>

          <button
            onClick={() => {
              onClose();
              if (onOpenResume) onOpenResume();
            }}
            className="group flex items-center justify-between text-left text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white hover:text-[#ff4d15] transition-all cursor-pointer tracking-tight"
          >
            <span className="flex items-center gap-3">
              <span>RESUME</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#ff4d15] text-white tracking-widest align-middle">
                CV
              </span>
            </span>
            <span className="text-2xl sm:text-4xl text-neutral-600 group-hover:text-[#ff4d15] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              ↗
            </span>
          </button>
        </div>

        {/* Right Column: Contact info & metadata */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-7 lg:border-l lg:border-neutral-800 lg:pl-16 text-neutral-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
              Candidate Status
            </span>
            <span className="inline-block px-3 py-1 bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 rounded-full text-xs font-mono font-semibold">
              {HERO_DATA.status}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
              Direct Phone
            </span>
            <a
              href={`tel:${HERO_DATA.contactPhone}`}
              className="text-lg sm:text-xl font-bold text-white hover:text-[#ff4d15] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ff4d15]" />
              <span>{HERO_DATA.contactPhone}</span>
            </a>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
              Email Address
            </span>
            <a
              href={`mailto:${HERO_DATA.contactEmail}`}
              className="text-lg sm:text-xl font-bold text-white hover:text-[#ff4d15] transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#ff4d15]" />
              <span>{HERO_DATA.contactEmail}</span>
            </a>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
              Location
            </span>
            <p className="text-sm font-mono text-neutral-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ff4d15]" />
              <span>{HERO_DATA.location}</span>
            </p>
          </div>

          {/* Social links */}
          <div className="pt-4 border-t border-neutral-800 flex items-center gap-6">
            <a
              href={HERO_DATA.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-[#ff4d15] transition-colors flex items-center gap-2 font-mono text-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={HERO_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-[#ff4d15] transition-colors flex items-center gap-2 font-mono text-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Version Control button in menu */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenVersionControl();
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#ff4d15] hover:text-white transition-colors cursor-pointer"
            >
              <span>View Git Commit Log & Version History</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-12 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono border-t border-neutral-800 gap-2">
        <span>©2026 Lakshya Chourasia</span>
        <span>B.Tech CSE (Class of 2027)</span>
      </div>
    </div>
  );
};
