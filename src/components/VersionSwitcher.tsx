import React from 'react';
import { Layers, Sparkles } from 'lucide-react';

export type PortfolioVersion = 'v1' | 'v2';

interface VersionSwitcherProps {
  currentVersion: PortfolioVersion;
  onVersionChange: (version: PortfolioVersion) => void;
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({
  currentVersion,
  onVersionChange,
}) => {
  return (
    <aside
      aria-label="Portfolio Version Switcher"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]"
    >
      <div className="bg-[#121212]/92 backdrop-blur-xl border border-neutral-700/80 p-1.5 rounded-full shadow-2xl flex items-center gap-1.5 transition-all hover:border-[#ff4d15]/60 hover:shadow-[0_10px_30px_rgba(255,77,21,0.25)]">
        {/* V1 Button */}
        <button
          onClick={() => onVersionChange('v1')}
          aria-pressed={currentVersion === 'v1'}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
            currentVersion === 'v1'
              ? 'bg-white text-black shadow-md scale-100'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>V1: Classic Intact</span>
        </button>

        {/* V2 Button */}
        <button
          onClick={() => onVersionChange('v2')}
          aria-pressed={currentVersion === 'v2'}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
            currentVersion === 'v2'
              ? 'bg-[#ff4d15] text-white shadow-md shadow-[#ff4d15]/30 scale-100'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>V2: Framer Animated Edition</span>
        </button>
      </div>
    </aside>
  );
};
