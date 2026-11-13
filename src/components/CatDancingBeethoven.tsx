import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

interface CatDancingProps {
  compact?: boolean;
}

export const CatDancingBeethoven: React.FC<CatDancingProps> = ({ compact = false }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  // Beethoven Symphony No. 5 notes in Hz:
  // Motif 1: G4, G4, G4, Eb4 (held)
  // Motif 2: F4, F4, F4, D4 (held)
  const beethovenNotes = [
    { freq: 392.0, dur: 0.22, delay: 0 },    // G4
    { freq: 392.0, dur: 0.22, delay: 0.26 }, // G4
    { freq: 392.0, dur: 0.22, delay: 0.52 }, // G4
    { freq: 311.13, dur: 1.1, delay: 0.78 }, // Eb4 (long)

    { freq: 349.23, dur: 0.22, delay: 2.1 }, // F4
    { freq: 349.23, dur: 0.22, delay: 2.36 },// F4
    { freq: 349.23, dur: 0.22, delay: 2.62 },// F4
    { freq: 293.66, dur: 1.3, delay: 2.88 }, // D4 (long)

    // Second variation:
    { freq: 392.0, dur: 0.2, delay: 4.5 },
    { freq: 392.0, dur: 0.2, delay: 4.74 },
    { freq: 392.0, dur: 0.2, delay: 4.98 },
    { freq: 311.13, dur: 0.7, delay: 5.22 },
    { freq: 349.23, dur: 0.2, delay: 6.1 },
    { freq: 349.23, dur: 0.2, delay: 6.34 },
    { freq: 349.23, dur: 0.2, delay: 6.58 },
    { freq: 293.66, dur: 0.9, delay: 6.82 },
  ];

  const playBeethovenMotif = () => {
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

        // Rich orchestral tone
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note.freq, now + note.delay);

        // Sub-bass layer
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

      // Repeat loop every 8 seconds
      sequenceTimerRef.current = setTimeout(() => {
        if (isAudioPlaying) {
          playBeethovenMotif();
        }
      }, 8200);
    } catch {
      // AudioContext not allowed without user gesture or unsupported
    }
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      if (sequenceTimerRef.current) clearTimeout(sequenceTimerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      if (videoRef.current) {
        videoRef.current.muted = true;
      }
      setIsAudioPlaying(false);
    } else {
      setIsAudioPlaying(true);
      playBeethovenMotif();
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    return () => {
      if (sequenceTimerRef.current) clearTimeout(sequenceTimerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full rounded-xs overflow-hidden bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#24130c] border border-neutral-800 p-5 flex flex-col justify-between group shadow-xl ${
        compact ? 'min-h-[220px]' : 'min-h-[280px]'
      }`}
    >
      {/* Background Subtle Equalizer Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff4d15]/15 via-transparent to-transparent pointer-events-none"></div>

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff4d15] animate-ping"></span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-1">
            <Music className="w-3 h-3 text-[#ff4d15]" />
            DEV ANTHEM & VIBE
          </span>
        </div>

        {/* Audio Toggle Button */}
        <button
          onClick={toggleAudio}
          aria-label={isAudioPlaying ? 'Mute Beethoven Audio' : 'Unmute Beethoven Audio'}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
            isAudioPlaying
              ? 'bg-[#ff4d15] text-white shadow-lg shadow-[#ff4d15]/30'
              : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700'
          }`}
        >
          {isAudioPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              <span>Playing Beethoven</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span>Unmute Audio</span>
            </>
          )}
        </button>
      </div>

      {/* Animated Dancing Cat Stage */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-3 select-none">
        {/* Try to show user's self-hosted video if exists */}
        <video
          ref={videoRef}
          playsInline
          autoPlay
          loop
          muted={!isAudioPlaying}
          onLoadedData={() => setVideoLoaded(true)}
          className={`max-h-36 w-auto object-contain transition-opacity duration-300 ${
            videoLoaded ? 'block' : 'hidden'
          }`}
        >
          <source src="/videos/cat_dancing.webm" type="video/webm" />
          <source src="/videos/cat_dancing.mp4" type="video/mp4" />
          <source src="/assets/aistudio/heya_ram_ja_64b565b2.mp4" type="video/mp4" />
        </video>

        {/* Fallback stylized SVG Dancing Cat with rhythm bounce */}
        {!videoLoaded && (
          <div className="relative flex flex-col items-center justify-center">
            {/* Sparkles / Notes around cat */}
            <div
              className={`absolute -top-3 -right-6 text-[#ff4d15] transition-all duration-300 ${
                isAudioPlaying ? 'scale-125 animate-bounce' : 'opacity-40'
              }`}
            >
              <Sparkles className="w-4 h-4" />
            </div>
            <div
              className={`absolute top-2 -left-6 text-amber-400 transition-all duration-300 ${
                isAudioPlaying ? 'scale-125 animate-pulse' : 'opacity-40'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
            </div>

            {/* Joyful Wide-Eyed Cat Graphic */}
            <div
              className={`transition-all duration-300 ${
                isAudioPlaying ? 'animate-bounce scale-110' : 'hover:scale-105'
              }`}
            >
              <img
                src="/assets/aistudio/Joyful_Wide-Eyed_Cat_Sticker_b3a05633.png"
                alt="Joyful Cat Dancing"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_10px_20px_rgba(255,77,21,0.35)]"
                onError={(e) => {
                  if (e.currentTarget.src.indexOf('cat_front.png') === -1) {
                    e.currentTarget.src = '/images/cat_front.png';
                  }
                }}
              />
            </div>
          </div>
        )}

        <span className="text-xs font-mono font-bold text-white mt-2 tracking-tight">
          Cat Dancing to Beethoven (Op. 67)
        </span>
        <span className="text-[11px] font-mono text-neutral-400">
          Symphony No. 5 in C minor • Zero Latency Audio Loop
        </span>
      </div>

      {/* Footer Visualizer */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-neutral-800 text-[11px] font-mono">
        <span className="text-neutral-500">BEAT SYNC</span>
        <div className="flex items-end gap-1 h-3.5">
          {[4, 8, 14, 6, 12, 16, 9, 13, 5, 11].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full transition-all duration-150 ${
                isAudioPlaying
                  ? 'bg-[#ff4d15] animate-pulse'
                  : 'bg-neutral-700'
              }`}
              style={{
                height: isAudioPlaying ? `${((i % 4) + 1) * 3 + 4}px` : '4px',
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
