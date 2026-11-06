import React, { useState } from 'react';
import {
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Sparkles,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Collaboration Inquiry via DC Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Frequency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Initiate Contact
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
          Interested in hackathon collaborations, high-velocity AI builds, or ambassadorial initiatives? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct channels & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Direct Channels</h3>
              <p className="text-xs text-slate-400">
                Guaranteed fast response for high-impact developer opportunities.
              </p>
            </div>

            {/* Email quick copy */}
            <div className="p-4 rounded-xl bg-[#090e1a] border border-cyan-500/30 space-y-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                Primary Inbox:
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3 h-3" /> Copied to clipboard!
                </p>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-pink-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-white">Location Base</p>
                <p className="text-slate-400">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Digital Presence:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-400 text-xs font-mono text-slate-200 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-pink-400" />
                  <span>X (Twitter)</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-400 text-xs font-mono text-slate-200 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-400" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dispatch message (mailto form) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSendMail}
            className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Dispatch Message</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                Direct Mailto Link
              </span>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1">
                Subject line:
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Hackathon Teammate / AI Engineering Role / Project Inquiry"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1a] border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 font-sans transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1">
                Your message:
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project, timeline, or challenge..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1a] border border-white/10 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 font-sans transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-500 hover:from-cyan-400 hover:via-violet-500 hover:to-pink-400 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all flex items-center justify-center space-x-2"
            >
              <span>Launch Mail Client</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
