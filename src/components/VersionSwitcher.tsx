import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

export type PortfolioVersion = 'v1' | 'v2';

interface VersionSwitcherProps {
  currentVersion?: PortfolioVersion;
  onVersionChange?: (version: PortfolioVersion) => void;
  onOpenResume: () => void;
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ onOpenResume }) => {
  return (
    <aside
      aria-label="View Resume"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] pb-[env(safe-area-inset-bottom)] pointer-events-none"
    >
      <button
        onClick={onOpenResume}
        aria-label="View Resume and Curriculum Vitae"
        className="pointer-events-auto min-h-[44px] group flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#111111]/95 hover:bg-[#ff4d15] text-white font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-xl border border-neutral-700/80 hover:border-[#ff4d15] shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-black/60 touch-manipulation"
      >
        <FileText className="w-4 h-4 text-[#ff4d15] group-hover:text-white transition-colors" />
        <span>VIEW RESUME</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </button>
    </aside>
  );
};
