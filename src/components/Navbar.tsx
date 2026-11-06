import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Menu, X, Palette, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  onOpenTerminal: () => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  currentTheme,
  onThemeChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070d]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-white transition-transform hover:scale-105"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-violet-600 to-pink-500 p-[1.5px] shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            <div className="w-full h-full bg-[#05070d] rounded-xl flex items-center justify-center">
              <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 text-lg">
                DC
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
              Dibyendu Chatterjee
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase">
              1x MLH Winner
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-300 rounded-full hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Terminal Launcher Pill */}
          <button
            onClick={onOpenTerminal}
            aria-label="Open DC-OS Terminal"
            className="group relative flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white transition-all shadow-[0_0_12px_rgba(0,245,255,0.2)] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <TerminalIcon className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
            <span className="font-mono text-xs font-semibold">DC-OS</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[10px] font-mono bg-black/50 text-slate-400 border border-white/10 rounded">
              `
            </kbd>
          </button>

          {/* Theme Switcher Button */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              aria-label="Switch UI Theme"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <Palette className="w-4 h-4" />
            </button>
            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#090e1a] border border-white/15 p-1 shadow-2xl shadow-black z-50">
                {(['dark', 'neon', 'pastel'] as ThemeMode[]).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => {
                      onThemeChange(theme);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors ${
                      currentTheme === theme
                        ? 'bg-cyan-950/80 text-cyan-300 font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{theme}</span>
                    {currentTheme === theme && <Sparkles className="w-3 h-3 text-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger & Terminal Trigger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenTerminal}
            aria-label="Open DC-OS Terminal"
            className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-xs font-mono"
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>DC-OS</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#070b14]/95 backdrop-blur-xl border-b border-white/10 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Theme Skin:</span>
            <div className="flex gap-1.5">
              {(['dark', 'neon', 'pastel'] as ThemeMode[]).map((theme) => (
                <button
                  key={theme}
                  onClick={() => onThemeChange(theme)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono uppercase ${
                    currentTheme === theme
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'bg-white/5 text-slate-300'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

