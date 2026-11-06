import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Trophy,
  AlertCircle,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { PROJECTS } from '../data/content';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'tools' | 'featured'>('all');

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'featured') return project.featured;
    if (filter === 'ai')
      return project.tags.some((t) =>
        ['Generative AI', 'Agentic UX', 'Natural Language Processing', 'Open-Weight AI'].includes(t)
      );
    if (filter === 'tools')
      return project.tags.some((t) => ['CLI', 'Security', 'DevTools', 'TypeScript'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Engineering Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Projects &amp; Builds
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Battle-tested applications, emergency command centers, and developer security layers engineered for high-stake environments.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {[
            { label: 'All Projects', val: 'all' },
            { label: 'Featured & Wins', val: 'featured' },
            { label: 'AI & Agents', val: 'ai' },
            { label: 'Dev Tools & CLI', val: 'tools' },
          ].map((item) => (
            <button
              key={item.val}
              onClick={() => setFilter(item.val as 'all' | 'ai' | 'tools' | 'featured')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === item.val
                  ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-cyan-400/60 transition-all relative overflow-hidden ${
              project.isMlhWinner ? 'border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)]' : ''
            }`}
          >
            {/* MLH Winner Ribbon / Badge */}
            {project.isMlhWinner && (
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-slate-950 text-[10px] font-mono font-extrabold uppercase px-6 py-1 rotate-45 translate-x-7 translate-y-2 shadow-lg flex items-center justify-center space-x-1">
                  <Trophy className="w-3 h-3 inline-block" />
                  <span>MLH Winner</span>
                </div>
              </div>
            )}

            <div>
              {/* Header row */}
              <div className="flex items-center justify-between mb-3 pr-8">
                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.id}</span>
                </span>
                {project.isTodoPlaceholder && (
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-amber-400" />
                    <span>TODO</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                <span>{project.title}</span>
                {project.featured && !project.isMlhWinner && (
                  <Sparkles className="w-4 h-4 text-pink-400" />
                )}
              </h3>

              <p className="text-xs font-semibold text-violet-300 mb-3">{project.tagline}</p>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.todoNote && (
                <div className="mb-4 p-2 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200/90 font-mono">
                  ⚠️ Note: {project.todoNote}
                </div>
              )}
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center space-x-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-200 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-mono transition-colors ${
                      project.liveUrl === '#'
                        ? 'bg-slate-900/50 text-slate-500 border border-slate-800 cursor-not-allowed'
                        : 'bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{project.liveUrl === '#' ? 'Live Link' : 'Demo'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

