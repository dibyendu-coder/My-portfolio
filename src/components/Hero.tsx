import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Terminal as TerminalIcon,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface HeroProps {
  onOpenTerminal: () => void;
}

const ROTATING_TITLES = [
  '1x MLH Hackathon Winner',
  'Oracle Certified Generative AI Professional',
  'Gemini Certified University Student',
  'Google Student Ambassador',
  'Arcade Legend Tier Holder',
  'Campus Ambassador, eDC at IIT Delhi',
  'McKinsey Forward Program Alumni',
];

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentFull = ROTATING_TITLES[titleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFull.length) {
          setDisplayText(currentFull.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentFull.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-cyber bg-radial-vignette">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 via-violet-600/15 to-pink-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Main Name & Initials */}
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Dibyendu Chatterjee
          </h1>
          <div className="mt-2 inline-flex items-center space-x-2">
            <span className="text-2xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
              (&quot;DC&quot;)
            </span>
            <span className="text-xs sm:text-sm font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
              📍 Greater Kolkata Area, India
            </span>
          </div>
        </div>

        {/* Animated Typewriter Tagline */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <div className="font-mono text-base sm:text-2xl text-cyan-300 font-semibold tracking-wide flex items-center">
            <span>{displayText}</span>
            <span className="w-2.5 h-6 ml-1 bg-pink-500 animate-pulse inline-block" />
          </div>
        </div>

        {/* Bio Pitch */}
        <p className="max-w-2xl text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
          Architecting resilient AI tools, autonomous coding workflows, and edge-native web systems.
          Obsessed with converting complex developer bottlenecks into crisp, single-command solutions.
        </p>

        {/* Terminal Interactive Hint Bar (Hero Feature) */}
        <div
          onClick={onOpenTerminal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenTerminal()}
          className="group cursor-pointer mb-8 w-full max-w-xl mx-auto p-3 sm:p-3.5 rounded-xl bg-[#090e1a]/90 hover:bg-[#0d1424] border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_25px_rgba(0,245,255,0.2)] transition-all duration-300 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
              <TerminalIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-cyan-300 flex items-center gap-1.5">
                <span>DC-OS Terminal Ready</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 font-sans">
                  Interactive
                </span>
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
                Press <kbd className="px-1 py-0.5 rounded bg-black/60 text-cyan-300 border border-white/10">`</kbd> or click, then type <span className="text-pink-400 font-bold">&apos;help&apos;</span> or <span className="text-amber-400 font-bold">&apos;superpower&apos;</span>
              </p>
            </div>
          </div>
          <div className="text-cyan-400 text-xs font-mono font-semibold flex items-center space-x-1 pl-2">
            <span className="hidden sm:inline">Launch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-500 hover:from-cyan-400 hover:via-violet-500 hover:to-pink-400 text-slate-950 font-bold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(0,245,255,0.35)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center space-x-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-400/50 text-white font-medium text-sm sm:text-base transition-all flex items-center justify-center space-x-2"
          >
            <span>Contact DC</span>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Stat Strip */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl text-center group hover:border-cyan-400/60 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle down indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="mt-12 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
