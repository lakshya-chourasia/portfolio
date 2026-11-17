import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, ExternalLink, Minimize2, Maximize2, Sparkles, Disc } from 'lucide-react';

interface SoundStreamAudioBarProps {
  onOpenSoundStreamProject?: () => void;
}

export const SoundStreamAudioBar: React.FC<SoundStreamAudioBarProps> = ({ onOpenSoundStreamProject }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [activePreset, setActivePreset] = useState<'ambient' | 'cyber' | 'lofi'>('ambient');

  // Web Audio API synthesized ambient engine
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);

  // Initialize or start synthesizer
  const startAudioEngine = (preset = activePreset) => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Stop previous oscillators
      stopOscillators();

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.15, ctx.currentTime);
      gainNodeRef.current = masterGain;

      // Filter for lush warm sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(preset === 'cyber' ? 1200 : 650, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Frequencies for soothing harmonious chord progression
      let freqs: number[];
      if (preset === 'ambient') {
        freqs = [216, 270, 324, 432]; // 432Hz sacred harmonic tuning
      } else if (preset === 'cyber') {
        freqs = [110, 164.81, 220, 329.63]; // A minor electronic drone
      } else {
        freqs = [130.81, 164.81, 196.0, 246.94]; // C major 7th lo-fi chords
      }

      const oscs: OscillatorNode[] = [];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Individual slight detune for stereo-like shimmer
        osc.detune.setValueAtTime((idx - 1.5) * 5, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.25 / freqs.length, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      // LFO for slow breathing volume swell
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // 8-second slow cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(masterGain.gain);
      lfo.start();
      lfoRef.current = lfo;

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (err) {
      console.warn('SoundStream Web Audio Error:', err);
    }
  };

  const stopOscillators = () => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore already stopped
      }
    });
    oscillatorsRef.current = [];

    if (lfoRef.current) {
      try {
        lfoRef.current.stop();
        lfoRef.current.disconnect();
      } catch {
        // Ignore
      }
      lfoRef.current = null;
    }
  };

  const stopAudioEngine = () => {
    stopOscillators();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      stopAudioEngine();
    } else {
      startAudioEngine();
    }
  };

  // Adjust volume
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const targetGain = isMuted ? 0 : volume * 0.15;
      gainNodeRef.current.gain.setTargetAtTime(targetGain, audioCtxRef.current.currentTime, 0.05);
    }
  }, [volume, isMuted]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopOscillators();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const handleSelectPreset = (preset: 'ambient' | 'cyber' | 'lofi') => {
    setActivePreset(preset);
    if (isPlaying) {
      startAudioEngine(preset);
    }
  };

  return (
    <aside
      aria-label="SoundStream Audio Theme Player"
      className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-32px)]"
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111111]/95 text-white border border-[#ff4d15]/50 shadow-xl backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-300 font-mono text-xs uppercase"
        >
          <div className="flex items-center gap-0.5 h-3">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`w-0.5 rounded-full bg-[#ff4d15] transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : 'h-1'
                }`}
                style={{
                  height: isPlaying ? `${4 + ((i * 3) % 8)}px` : '4px',
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
          <span className="font-bold text-[#ff4d15]">SOUNDSTREAM®</span>
          <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      ) : (
        <div className="w-[310px] sm:w-[340px] rounded-2xl bg-[#111111]/95 border border-[#ff4d15]/40 shadow-2xl backdrop-blur-xl p-3.5 text-white transition-all duration-300 shadow-black/80">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#ff4d15]/20 border border-[#ff4d15]/50 flex items-center justify-center">
                <Radio className="w-3.5 h-3.5 text-[#ff4d15]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-xs tracking-wider">SOUNDSTREAM®</span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-full bg-[#ff4d15]/20 text-[#ff4d15] border border-[#ff4d15]/40 font-bold">
                    THEME AUDIO
                  </span>
                </div>
                <p className="text-[10px] text-neutral-400 font-mono">By Lakshya Chourasia</p>
              </div>
            </div>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
              title="Minimize SoundStream Widget"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Sound Synthesizer Engine & Visualizer */}
          <div className="bg-neutral-900/80 rounded-xl p-2.5 mb-2.5 border border-neutral-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                onClick={togglePlayPause}
                className="w-9 h-9 rounded-full bg-[#ff4d15] hover:bg-[#db4819] text-[#111111] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md shadow-[#ff4d15]/40 flex-shrink-0 cursor-pointer"
                title={isPlaying ? 'Pause Ambient Flow' : 'Play Ambient Flow'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">
                  {isPlaying ? (activePreset === 'ambient' ? '432Hz Deep Focus' : activePreset === 'cyber' ? 'Cyber Ambient Drone' : 'Lo-Fi Chill Flow') : 'SoundStream Preview'}
                </div>
                <div className="text-[10px] text-[#ff4d15] font-mono flex items-center gap-1">
                  <span>{isPlaying ? 'STREAMING HARMONICS' : 'CLICK PLAY TO LISTEN'}</span>
                </div>
              </div>
            </div>

            {/* Equalizer Visualizer */}
            <div className="flex items-center gap-0.5 h-5 flex-shrink-0 pr-1">
              {[8, 14, 18, 11, 16, 7].map((h, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full bg-[#ff4d15] transition-all duration-200 ${
                    isPlaying ? 'animate-pulse' : 'opacity-40'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(4, h)}px` : '4px',
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Preset Selector */}
          <div className="flex items-center justify-between gap-1 mb-2.5">
            {[
              { id: 'ambient', label: '432Hz Focus' },
              { id: 'cyber', label: 'Cyber Drone' },
              { id: 'lofi', label: 'Lo-Fi Chords' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p.id as 'ambient' | 'cyber' | 'lofi')}
                className={`flex-1 py-1 rounded-md text-[10px] font-mono uppercase font-bold transition-all ${
                  activePreset === p.id
                    ? 'bg-[#ff4d15]/20 text-[#ff4d15] border border-[#ff4d15]/50'
                    : 'bg-neutral-800/60 text-neutral-400 hover:text-white border border-transparent'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Volume and Launch SoundStream */}
          <div className="flex items-center justify-between gap-2 pt-1 border-t border-neutral-800/80">
            <div className="flex items-center gap-1.5 flex-1">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-neutral-400 hover:text-white p-0.5"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-20 accent-[#ff4d15] cursor-pointer"
                title="SoundStream Volume"
              />
            </div>

            <button
              onClick={() => {
                if (onOpenSoundStreamProject) {
                  onOpenSoundStreamProject();
                } else {
                  window.open('http://localhost:3000', '_blank');
                }
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-800 hover:bg-[#ff4d15] text-neutral-300 hover:text-white text-[10px] font-mono font-bold uppercase transition-colors"
            >
              <span>App Details</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

