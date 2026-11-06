import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  Sparkles,
  CornerDownLeft,
  ChevronRight,
  Shield,
  Zap,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
  EXPERIENCES,
  TERMINAL_COMMANDS_HELP,
} from '../data/content';
import { ThemeMode } from '../types';

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
  isError?: boolean;
}

const AVAILABLE_COMMANDS = [
  'help',
  'about',
  'skills',
  'projects',
  'open',
  'certs',
  'badges',
  'experience',
  'contact',
  'theme',
  'superpower',
  'clear',
  'secret',
];

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onThemeChange,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      if (history.length === 0) {
        setHistory([
          {
            id: 'init-1',
            command: 'system.boot()',
            timestamp: new Date().toLocaleTimeString(),
            output: (
              <div className="space-y-1 text-xs sm:text-sm text-cyan-300">
                <p className="font-semibold text-cyan-400">
                  ⚡ DC-OS Kernel v3.4.1 (x86_64-aws-amplify) loaded.
                </p>
                <p className="text-slate-300">
                  Welcome to Dibyendu Chatterjee&apos;s interactive environment. Type{' '}
                  <span className="text-pink-400 font-bold">&apos;help&apos;</span> to discover available commands, or{' '}
                  <span className="text-amber-400 font-bold">&apos;superpower&apos;</span> to reveal the edge.
                </p>
              </div>
            ),
          },
        ]);
      }
    }
  }, [isOpen]);

  // Global keydown: ESC to close, backtick to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Save to command history for up/down navigation
    setCommandLog((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const timestamp = new Date().toLocaleTimeString();
    let output: React.ReactNode = null;
    let isError = false;

    switch (command) {
      case 'help':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">DC-OS Available Directives:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
              {TERMINAL_COMMANDS_HELP.map((item) => (
                <div key={item.cmd} className="flex items-baseline space-x-2">
                  <span className="font-mono text-pink-400 font-semibold">{item.cmd}</span>
                  <span className="text-slate-400 text-xs">- {item.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Tip: Use [Tab] for autocomplete, [Up/Down] arrows for history.
            </p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="font-bold text-cyan-300">
              {PERSONAL_INFO.name} ({PERSONAL_INFO.nickname})
            </p>
            <p className="text-slate-300">{PERSONAL_INFO.bio}</p>
            <div className="text-xs text-slate-400 space-y-0.5">
              <p>📍 Location: {PERSONAL_INFO.location}</p>
              <p>🎓 Education: B.Tech CSE, JIS College of Engineering (2024)</p>
              <p>⚡ Current Role: Google Student Ambassador &amp; AI Builder</p>
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">Technical Superpowers &amp; Stack:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="space-y-0.5">
                <p className="text-violet-300 font-semibold">{cat.category}:</p>
                <div className="flex flex-wrap gap-1.5 pl-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                        s.superpower
                          ? 'border-cyan-400 text-cyan-200 bg-cyan-950/60 font-bold shadow-[0_0_8px_rgba(0,245,255,0.3)]'
                          : 'border-slate-700 text-slate-300 bg-slate-900/40'
                      }`}
                    >
                      {s.name} {s.superpower && '★'}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">Shipped Projects Catalog:</p>
            <div className="space-y-1.5">
              {PROJECTS.map((p) => (
                <div key={p.id} className="border-l-2 border-cyan-500/40 pl-2.5 py-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white">{p.title}</span>
                    {p.isMlhWinner && (
                      <span className="px-1.5 py-0.2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] rounded uppercase font-bold">
                        🏆 MLH Winner
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-xs">{p.tagline}</p>
                  <p className="text-[11px] text-cyan-400/80 font-mono">
                    Type: <code className="text-pink-400">open {p.id}</code> to inspect
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'open':
        if (!args[0]) {
          output = (
            <p className="text-amber-400 text-xs">
              Usage: <code className="text-pink-400">open &lt;project-id&gt;</code>. Examples: open zerohour, open neuralquery
            </p>
          );
        } else {
          const target = args[0].toLowerCase();
          const match = PROJECTS.find(
            (p) => p.id.toLowerCase() === target || p.title.toLowerCase().includes(target)
          );
          if (match && match.githubUrl) {
            window.open(match.githubUrl, '_blank');
            output = (
              <p className="text-emerald-400 text-xs">
                ✓ Dispatched browser session to: <span className="underline">{match.githubUrl}</span>
              </p>
            );
          } else if (match && match.liveUrl && match.liveUrl !== '#') {
            window.open(match.liveUrl, '_blank');
            output = (
              <p className="text-emerald-400 text-xs">
                ✓ Opened live URL: <span className="underline">{match.liveUrl}</span>
              </p>
            );
          } else {
            output = (
              <p className="text-red-400 text-xs">
                Project &apos;{args[0]}&apos; not found. Type <code className="text-cyan-300">projects</code> to view valid keys.
              </p>
            );
            isError = true;
          }
        }
        break;

      case 'certs':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">Verified Credentials &amp; Certifications:</p>
            <ul className="space-y-1 list-disc list-inside text-slate-300">
              {CERTIFICATIONS.map((c) => (
                <li key={c.id}>
                  <span className="text-white font-medium">{c.title}</span> —{' '}
                  <span className="text-cyan-400">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case 'badges':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">Honors &amp; Accreditations:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PERSONAL_INFO.taglineBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 bg-slate-900/60 border border-slate-700/60 p-2 rounded"
                >
                  <Shield className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="text-slate-200 text-xs">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">Career &amp; Leadership Milestones:</p>
            <div className="space-y-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-violet-500/50 pl-2">
                  <p className="font-semibold text-white">
                    {exp.role} <span className="text-violet-400">@ {exp.organization}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">{exp.period}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{exp.description[0]}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-cyan-400 font-bold">Direct Communication Channels:</p>
            <div className="space-y-1 font-mono text-xs">
              <p>
                📧 Email:{' '}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-pink-400 hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p>
                🐙 GitHub:{' '}
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  {PERSONAL_INFO.socials.github}
                </a>
              </p>
              <p>
                💼 LinkedIn:{' '}
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  {PERSONAL_INFO.socials.linkedin}
                </a>
              </p>
              <p>
                🐦 X (Twitter):{' '}
                <a
                  href={PERSONAL_INFO.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  {PERSONAL_INFO.socials.x}
                </a>
              </p>
            </div>
          </div>
        );
        break;

      case 'theme':
        if (!args[0]) {
          output = (
            <p className="text-amber-400 text-xs">
              Current theme: <span className="text-cyan-300 font-bold">{currentTheme}</span>. Available: <code className="text-pink-400">theme neon</code>, <code className="text-pink-400">theme pastel</code>, <code className="text-pink-400">theme dark</code>
            </p>
          );
        } else {
          const requested = args[0].toLowerCase();
          if (requested === 'neon' || requested === 'pastel' || requested === 'dark') {
            onThemeChange(requested as ThemeMode);
            output = (
              <p className="text-emerald-400 text-xs">
                ✓ UI theme shifted to: <span className="font-bold uppercase">{requested}</span>. Real-time visual re-skin applied.
              </p>
            );
          } else {
            output = (
              <p className="text-red-400 text-xs">
                Invalid theme &apos;{args[0]}&apos;. Choose between: <code>neon</code>, <code>pastel</code>, or <code>dark</code>.
              </p>
            );
            isError = true;
          }
        }
        break;

      case 'superpower':
        output = (
          <div className="p-3 bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border border-cyan-500/40 rounded-lg space-y-1.5 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 text-cyan-300 font-bold">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span>DC&apos;s Secret Tech Superpower Unlocked:</span>
            </div>
            <p className="text-slate-200">
              ⚡ <strong className="text-pink-300">High-Velocity Agentic Execution</strong>. When the hackathon clock has 6 hours left and everyone else is panicking, I leverage autonomous AI coding agents, prompt scaffolding, and structured problem decomposition to ship robust, full-stack, deployed products before the deadline buzzer sounds.
            </p>
            <p className="text-cyan-400 text-[11px] font-mono">
              Proof: 1x MLH Hackathon Winner • ZeroHour Command Center • 100% Deployed on AWS Amplify.
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'secret':
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00f5ff', '#8b5cf6', '#ec4899', '#f59e0b'],
        });
        output = (
          <div className="p-2.5 bg-pink-950/50 border border-pink-500/50 rounded text-pink-200 text-xs sm:text-sm space-y-1">
            <p className="font-bold text-pink-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> RETRO ARCADE MODE: WINNER CELEBRATION!
            </p>
            <p className="text-slate-200 text-xs">
              🎉 You triggered the easter egg! As an Arcade Legend Tier Holder and MLH Hackathon Winner, congratulations on exploring every corner of this interface.
            </p>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-red-400 text-xs space-y-0.5">
            <p>Command not recognized: &apos;{trimmed}&apos;.</p>
            <p className="text-slate-400">
              Type <code className="text-cyan-400 font-bold">help</code> to inspect the command manual, or click any quick pill below.
            </p>
          </div>
        );
        isError = true;
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: trimmed,
        timestamp,
        output,
        isError,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandLog.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandLog[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandLog.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandLog[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const match = AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="DC-OS Interactive Terminal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md"
    >
      <div
        className={`relative w-full ${
          isExpanded ? 'h-[95vh] max-w-6xl' : 'max-w-3xl h-[620px] max-h-[90vh]'
        } flex flex-col rounded-xl overflow-hidden bg-[#070b14] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,245,255,0.15)] transition-all duration-300`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-white/10 select-none">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <div className="flex items-center space-x-1.5 ml-2 text-xs font-mono text-cyan-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold">dc-os@cloud:~$</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded">
                Theme: {currentTheme}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label="Toggle Expand"
              className="p-1 hover:text-white rounded hover:bg-white/5"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              aria-label="Close Terminal"
              className="p-1 hover:text-red-400 rounded hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scanlines Effect Overlay */}
        <div className="absolute inset-0 top-11 terminal-scanlines opacity-40 pointer-events-none" />

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-4 text-slate-200">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <span className="text-cyan-500">dc@workstation:~$</span>
                <span className="text-slate-100 font-semibold">{item.command}</span>
                <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 border-l border-cyan-500/20">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-3 py-2 bg-[#090e1a] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto text-xs font-mono text-slate-400">
          <span className="text-[11px] text-slate-500 shrink-0">Quick:</span>
          {['help', 'superpower', 'skills', 'projects', 'theme neon', 'secret', 'clear'].map(
            (shortcut) => (
              <button
                key={shortcut}
                onClick={() => executeCommand(shortcut)}
                className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-500/40 border border-slate-700/60 text-[11px] shrink-0 transition-colors"
              >
                {shortcut}
              </button>
            )
          )}
        </div>

        {/* Input Bar */}
        <div className="flex items-center px-4 py-3 bg-[#0a0f1d] border-t border-cyan-500/20 space-x-2">
          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'superpower', 'theme neon'..."
            aria-label="Terminal input command"
            className="flex-1 bg-transparent font-mono text-sm text-cyan-200 focus:outline-none placeholder-slate-600"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            aria-label="Run command"
            className="p-1.5 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
