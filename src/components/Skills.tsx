import React, { useState } from 'react';
import { Zap, Sparkles, Terminal, Code2, Database, Layout, PenTool } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/content';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Agentic Systems':
        return <Zap className="w-4 h-4 text-cyan-400" />;
      case 'Languages':
        return <Code2 className="w-4 h-4 text-violet-400" />;
      case 'Web & Frontend':
        return <Layout className="w-4 h-4 text-pink-400" />;
      case 'Data & Backend':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Design & Tools':
        return <PenTool className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>Arsenal &amp; Superpowers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Skills &amp; Capabilities
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          A full-spectrum engineering toolkit fine-tuned for rapid prototyping, AI-augmented development, and rock-solid production systems.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((group) => (
          <div
            key={group.category}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-400/50 transition-all"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-2">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg">{group.category}</h3>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">{group.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center space-x-1.5 transition-all ${
                    skill.superpower
                      ? 'bg-gradient-to-r from-cyan-950/90 to-purple-950/90 border border-cyan-400 text-cyan-200 font-bold shadow-[0_0_12px_rgba(0,245,255,0.3)] hover:scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
                  }`}
                >
                  <span>{skill.name}</span>
                  {skill.superpower && (
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0 fill-amber-400" />
                  )}
                  {skill.level && !skill.superpower && (
                    <span className="text-[10px] text-slate-500 font-sans">({skill.level})</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Superpower Highlight Callout */}
      <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-pink-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-left">
          <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
            <Zap className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              The Agentic Superpower: Velocity Meets Craft
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              I don&apos;t just write code; I orchestrate multi-agent development loops that accelerate time-to-delivery 5x while strictly preserving architectural integrity.
            </p>
          </div>
        </div>
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400 text-xs font-mono font-bold shrink-0">
          ★ Superpower
        </span>
      </div>
    </section>
  );
};

