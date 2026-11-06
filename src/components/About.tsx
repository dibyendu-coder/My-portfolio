import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  MapPin,
  Calendar,
  Shield,
  Layers,
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, EXPERIENCES } from '../data/content';

export const About: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(PERSONAL_INFO.avatar);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Origin &amp; Trajectory</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Dibyendu Chatterjee
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Engineered for velocity. Focused on agentic developer tools, cloud deployments, and hackathon wins.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Avatar + Profile Card + Education */}
        <div className="lg:col-span-5 space-y-6">
          {/* Avatar & Monogram Card */}
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

            <div className="flex flex-col items-center text-center">
              {/* Photo Container */}
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-cyan-500/40 p-1 bg-gradient-to-tr from-cyan-500 via-violet-600 to-pink-500 shadow-[0_0_30px_rgba(0,245,255,0.25)] mb-4">
                <img
                  src={imgSrc}
                  onError={() => setImgSrc(PERSONAL_INFO.avatarFallback)}
                  alt="Dibyendu Chatterjee"
                  className="w-full h-full object-cover rounded-xl bg-[#070b14]"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 border border-cyan-400 text-[10px] font-mono font-bold text-cyan-300">
                  DC
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">{PERSONAL_INFO.title}</p>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400 mt-2">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 w-full text-left">
                <p className="text-xs text-slate-400 uppercase font-mono tracking-wider mb-2">
                  Interests &amp; Obsessions:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono"
                    >
                      #{interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-cyan-400">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Education</h4>
                <p className="text-xs text-cyan-300 font-mono">B.Tech in Computer Science</p>
              </div>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <p className="font-semibold text-slate-100">{EDUCATION.institution}</p>
              <div className="flex items-center space-x-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Class of {EDUCATION.graduationYear}</span>
                </span>
                <span>• {EDUCATION.location}</span>
              </div>
              <p className="text-xs text-slate-400 pt-2 border-t border-white/5">
                Core coursework: {EDUCATION.focus}.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Story + Experience Timeline + Badges */}
        <div className="lg:col-span-7 space-y-6">
          {/* Bio Story Panel */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Engineering Philosophy</span>
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am a software engineer and AI builder who thrives under tight constraints. Whether it’s
                a 36-hour Major League Hacking sprint or deploying production micro-apps, my mission is
                straightforward: <strong>eliminate friction through agentic AI tooling</strong>.
              </p>
              <p>
                From building <em>ZeroHour</em> (an AI emergency triage center) to creating CLI developer
                hygiene tools like <em>envguard</em>, I combine modern TypeScript, Python, and cloud services
                (AWS Amplify, S3, CloudFront) to produce resilient digital products.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-violet-950/80 text-violet-400 border border-violet-500/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Leadership &amp; Experience</h3>
                <p className="text-xs text-violet-300 font-mono">Ambassadorial roles &amp; elite fellowships</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-violet-500 before:to-pink-500">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-9 group">
                  {/* Timeline dot */}
                  <span className="absolute left-2 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#05070d] border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(0,245,255,0.6)]" />

                  <div className="bg-[#090e1a]/80 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h4 className="font-bold text-white text-sm sm:text-base">{exp.role}</h4>
                      <span className="text-[11px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-violet-300 mb-2">
                      {exp.organization} {exp.location && `• ${exp.location}`}
                    </div>

                    <ul className="space-y-1 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                      {exp.description.map((point, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tagline Badges Grid */}
          <div className="glass-panel p-6 rounded-2xl">
            <h4 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Recognitions &amp; Badges</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PERSONAL_INFO.taglineBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
                >
                  <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
