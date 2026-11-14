import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Music, Sparkles, X } from 'lucide-react';

export const CatDancingBeethoven: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  // Beethoven Symphony No. 5 notes in Hz:
  const beethovenNotes = [
    { freq: 392.0, dur: 0.22, delay: 0 },    // G4
    { freq: 392.0, dur: 0.22, delay: 0.26 }, // G4
    { freq: 392.0, dur: 0.22, delay: 0.52 }, // G4
    { freq: 311.13, dur: 1.1, delay: 0.78 }, // Eb4 (long)

    { freq: 349.23, dur: 0.22, delay: 2.1 }, // F4
    { freq: 349.23, dur: 0.22, delay: 2.36 },// F4
    { freq: 349.23, dur: 0.22, delay: 2.62 },// F4
    { freq: 293.66, dur: 1.3, delay: 2.88 }, // D4 (long)

    { freq: 392.0, dur: 0.2, delay: 4.5 },
    { freq: 392.0, dur: 0.2, delay: 4.74 },
    { freq: 392.0, dur: 0.2, delay: 4.98 },
    { freq: 311.13, dur: 0.7, delay: 5.22 },
    { freq: 349.23, dur: 0.2, delay: 6.1 },
    { freq: 349.23, dur: 0.2, delay: 6.34 },
    { freq: 349.23, dur: 0.2, delay: 6.58 },
    { freq: 293.66, dur: 0.9, delay: 6.82 },
  ];

  const stopMusic = () => {
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.suspend();
      } catch {
        // ignore
      }
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  const playBeethovenSynthesizer = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      beethovenNotes.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note.freq, now + note.delay);

        const subOsc = ctx.createOscillator();
        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(note.freq / 2, now + note.delay);

        const startTime = now + note.delay;
        const stopTime = startTime + note.dur;

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.25, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, stopTime);

        osc.connect(gain);
        subOsc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        subOsc.start(startTime);
        osc.stop(stopTime);
        subOsc.stop(stopTime);
      });

      sequenceTimerRef.current = setTimeout(() => {
        playBeethovenSynthesizer();
      }, 8200);
    } catch {
      // AudioContext fallback
    }
  };

  const toggleSurprise = () => {
    if (isActive) {
      stopMusic();
      setIsActive(false);
    } else {
      setIsActive(true);
      // Wait for next tick so video element mounts, then play video with audio or synth
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.muted = false;
          videoRef.current
            .play()
            .then(() => {
              // Video audio started playing successfully
            })
            .catch(() => {
              // Video audio was blocked by browser policy; fallback to Web Audio synth
              playBeethovenSynthesizer();
            });
        } else {
          playBeethovenSynthesizer();
        }
      }, 50);
    }
  };

  useEffect(() => {
    return () => {
      if (sequenceTimerRef.current) clearTimeout(sequenceTimerRef.current);
      stopMusic();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="w-full pt-6 pb-2 flex flex-col items-center justify-center select-none bg-transparent">
      {/* Audio Play/Mute Control Bar - "Click for something interesting" */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSurprise}
          type="button"
          aria-label={isActive ? 'Hide Dancing Cat and Stop Music' : 'Click for something interesting'}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
            isActive
              ? 'bg-[#ff4d15] text-white shadow-[#ff4d15]/40 scale-105'
              : 'bg-neutral-900 hover:bg-[#ff4d15] text-white border border-neutral-700/80 hover:border-[#ff4d15] hover:scale-105'
          }`}
        >
          {isActive ? (
            <>
              <Volume2 className="w-4 h-4 animate-pulse text-white" />
              <span>Playing Beethoven • Click to Stop</span>
              <X className="w-3.5 h-3.5 ml-1 opacity-80 hover:opacity-100" />
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-[#ff4d15] animate-spin" style={{ animationDuration: '4s' }} />
              <span>Click for something interesting</span>
            </>
          )}
        </button>
      </div>

      {/* Dancing Cat Section - HIDDEN UNTIL USER CLICKS THE BUTTON */}
      {isActive && (
        <div
          onClick={toggleSurprise}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleSurprise()}
          title="Click to Stop & Hide Cat"
          aria-label="Click to Stop & Hide Cat"
          className="relative flex flex-col items-center justify-center cursor-pointer mt-6 transition-all duration-500 animate-in fade-in zoom-in-95 group"
        >
          {/* Subtle decorative rhythm notes floating beside the cat */}
          <div className="absolute -top-3 -right-8 text-[#ff4d15] pointer-events-none scale-125 animate-bounce">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute top-4 -left-8 text-amber-500 pointer-events-none scale-125 animate-pulse">
            <Music className="w-5 h-5" />
          </div>

          {/* Dancing Cat Video without any box/frame */}
          <video
            ref={videoRef}
            playsInline
            autoPlay
            loop
            muted={false}
            onLoadedData={() => setVideoLoaded(true)}
            className={`h-48 sm:h-64 md:h-72 w-auto object-contain pointer-events-auto filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-105 ${
              videoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <source src="/videos/cat_dancing.webm" type="video/webm" />
            <source src="/videos/cat_dancing.mp4" type="video/mp4" />
          </video>

          {/* Fallback image if video is decoding */}
          {!videoLoaded && (
            <div className="h-48 sm:h-64 flex items-center justify-center">
              <picture className="contents">
                <source srcSet="/images/cat_intro.webp" type="image/webp" />
                <img
                  src="/images/cat_intro.png"
                  alt="Dancing Cat"
                  decoding="async"
                  className="h-40 sm:h-52 w-auto object-contain animate-bounce"
                />
              </picture>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
