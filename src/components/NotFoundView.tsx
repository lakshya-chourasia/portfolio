import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Footer } from './Footer';

interface NotFoundViewProps {
  onNavigate: (view: string) => void;
  onOpenVersionControl: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({
  onNavigate,
  onOpenVersionControl,
}) => {
  return (
    <div className="w-full min-h-screen bg-white text-[#111111] pt-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-28 text-center flex-1 flex flex-col items-center justify-center">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#ff4d15] mb-4">
          // ERROR 404
        </span>
        <h1 className="text-7xl sm:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          PAGE NOT FOUND
        </h1>
        <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-md mx-auto mb-10">
          The requested route does not exist or has been relocated within the Portfoliob design system.
        </p>

        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 px-8 py-4 bg-[#ff4d15] hover:bg-[#e03d07] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </button>
      </div>

      <Footer onNavigate={onNavigate} onOpenVersionControl={onOpenVersionControl} />
    </div>
  );
};
