import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalOverlay } from './terminal/TerminalOverlay';
import { ThemeMode } from './types';
import { Terminal as TerminalIcon } from 'lucide-react';

export const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('dc-theme') as ThemeMode;
    return saved || 'dark';
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('dc-theme', currentTheme);
  }, [currentTheme]);

  // Global backtick key listener to open/close terminal
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing inside an input or textarea
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return;
      }

      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Floating Quick Terminal Launcher Pill (bottom-right) */}
      <aside aria-label="Quick launch terminal" className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => setIsTerminalOpen(true)}
          aria-label="Open DC-OS Terminal"
          className="group relative flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-[#070b14]/90 backdrop-blur-md border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white shadow-[0_0_25px_rgba(0,245,255,0.3)] hover:shadow-[0_0_35px_rgba(0,245,255,0.6)] transition-all hover:scale-105"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <TerminalIcon className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
          <span className="font-mono text-xs font-bold">DC-OS</span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 border border-white/10 px-1 rounded bg-black/40">
            Press `
          </span>
        </button>
      </aside>

      {/* Interactive Terminal Overlay */}
      <TerminalOverlay
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />
    </div>
  );
};

export default App;
