import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" /> Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Work Experience & <span className="gradient-text">Internships</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Hands-on client development, software engineering internships, and collaborative software creation.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Timeline Card */}
              <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl hover:border-cyan-500/30 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1 rounded-md font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-[11px] bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-md font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
