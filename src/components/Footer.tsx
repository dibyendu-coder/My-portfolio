import React from 'react';
import { ArrowUp, Cloud, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#03050a] pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Monogram and info */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-pink-500 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#05070d] rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xs">DC</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-slate-200">
              Dibyendu Chatterjee <span className="text-cyan-400">(&quot;DC&quot;)</span>
            </p>
            <p className="text-[11px] text-slate-500">
              AWS Student Builder Challenge • November 2026
            </p>
          </div>
        </div>

        {/* AWS Amplify Hosting Badge */}
        <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-slate-300">
          <Cloud className="w-4 h-4 text-amber-400" />
          <span className="text-xs">
            Deployed on{' '}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              AWS Amplify
            </strong>
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-[11px] text-cyan-400">CloudFront CDN</span>
        </div>

        {/* Actions & Back to top */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-950 hover:text-cyan-300 border border-white/10 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Launch DC-OS</span>
          </button>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
        <p>
          © 2026 {PERSONAL_INFO.name}. Built with React, TypeScript, TailwindCSS &amp; Framer Motion aesthetics.
        </p>
        <p className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-pink-400" /> 1x MLH Hackathon Winner &bull; Arcade Legend Tier
        </p>
      </div>
    </footer>
  );
};
