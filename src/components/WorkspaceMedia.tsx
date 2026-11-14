import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const WorkspaceMedia: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full bg-[#f4f4f4] pb-16 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-12">
        <div className="relative w-full aspect-[16/9] max-h-[560px] bg-neutral-900 rounded-xs overflow-hidden shadow-2xl border border-neutral-300 group">
          <video
            ref={videoRef}
            src="/videos/workspace.mp4"
            poster="/images/workspace_poster.png"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Interactive Play/Pause button overlay - 44px Android touch target */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause workspace video' : 'Play workspace video'}
              className="w-11 h-11 rounded-full bg-black/75 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#ff4d15] active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
          </div>

          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 sm:px-3 py-1 bg-black/70 backdrop-blur-md text-white font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider rounded-xs">
            LIVE DESIGN LAB • MULTI-DISPLAY WORKFLOW
          </div>
        </div>
      </div>
    </section>
  );
};
