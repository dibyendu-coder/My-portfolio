import React from 'react';
import {
  Award,
  Sparkles,
  Cpu,
  TrendingUp,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/content';

export const Certifications: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-green-400" />;
      case 'HelpCircle':
        return <HelpCircle className="w-6 h-6 text-pink-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-sky-400" />;
      default:
        return <Award className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Industry Accreditations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Certifications &amp; Credentials
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Verified expertise across Generative AI, cloud infrastructure, technology strategy, and professional leadership.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-400/50 transition-all relative overflow-hidden"
          >
            {/* Ambient accent stripe */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`}
            />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getCertIcon(cert.iconName)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>Verified</span>
                </span>
              </div>

              <h3 className="font-bold text-white text-base sm:text-lg mb-1 leading-snug group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>

              <div className="text-xs font-mono font-semibold text-violet-300 mb-4">
                Issuer: {cert.issuer}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Core Competencies:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
