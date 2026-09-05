import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Layout, Brain, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Brain: Brain,
  Database: Database,
  Wrench: Wrench
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillsData.map(s => s.category)];

  const filteredSkillsData = selectedCategory === "All"
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Technical Capability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="gradient-text">Proficiency Matrix</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Comprehensive breakdown of programming languages, web stacks, machine learning frameworks, and engineering tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkillsData.map((group) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <div key={group.category} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] bg-slate-800 text-cyan-300 font-mono px-2 py-0.5 rounded border border-slate-700">
                          {skill.badge}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/60">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
