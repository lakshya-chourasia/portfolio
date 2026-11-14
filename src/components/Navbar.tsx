import React from 'react';
import { GitBranch, FileText, ArrowUpRight } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenMenu: () => void;
  onOpenVersionControl: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenMenu,
  onOpenVersionControl,
  onOpenResume,
}) => {
  const isHeroActive = currentView === 'home';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0d0d0d]/92 backdrop-blur-md border-b border-neutral-800/80 transition-all duration-300 pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 hover:text-[#ff4d15] transition-colors cursor-pointer"
        >
          <span>{HERO_DATA.name}</span>
          <span className="text-[#ff4d15] text-xs font-semibold align-super">®</span>
        </button>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors cursor-pointer py-1 ${
              isHeroActive
                ? 'text-[#ff4d15] font-semibold'
                : 'hover:text-white text-neutral-400'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors cursor-pointer py-1 ${
              currentView === 'about'
                ? 'text-[#ff4d15] font-semibold'
                : 'hover:text-white text-neutral-400'
            }`}
          >
            About
          </button>
          <button
            onClick={() => onNavigate('services')}
            className={`transition-colors cursor-pointer py-1 ${
              currentView === 'services'
                ? 'text-[#ff4d15] font-semibold'
                : 'hover:text-white text-neutral-400'
            }`}
          >
            Projects & Stack
          </button>
          <button
            onClick={() => onNavigate('blogs')}
            className={`transition-colors cursor-pointer py-1 ${
              currentView === 'blogs'
                ? 'text-[#ff4d15] font-semibold'
                : 'hover:text-white text-neutral-400'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`transition-colors cursor-pointer py-1 ${
              currentView === 'contact'
                ? 'text-[#ff4d15] font-semibold'
                : 'hover:text-white text-neutral-400'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right action controls */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* View Resume Button in Header */}
          <button
            onClick={onOpenResume}
            title="View Resume and Curriculum Vitae"
            aria-label="View Resume and Curriculum Vitae"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ff4d15] hover:bg-[#e03d09] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shadow-orange-950/20 active:scale-95 group"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">View Resume</span>
            <span className="sm:hidden">Resume</span>
            <ArrowUpRight className="w-3 h-3 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Version Control Badge / Trigger */}
          <button
            onClick={onOpenVersionControl}
            title="View Git Version Control & Commit History"
            aria-label="View Version Control & Change History"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/80 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#ff4d15] transition-all cursor-pointer shadow-sm group"
          >
            <GitBranch className="w-3.5 h-3.5 text-[#ff4d15] group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">v1.3.2 • Git History</span>
            <span className="sm:hidden">v1.3.2</span>
          </button>

          {/* Custom Framer-style Hamburger Toggle */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-md hover:bg-neutral-800 text-white transition-colors cursor-pointer p-2 relative group"
          >
            <span className="w-6 h-0.5 bg-white transition-all group-hover:w-7 group-hover:bg-[#ff4d15]"></span>
            <span className="w-4 h-0.5 bg-white transition-all group-hover:w-7 group-hover:bg-[#ff4d15] self-end"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
