import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" /> Academic Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Verified academic performance and industry cloud certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-5 h-5 text-cyan-400" /> Formal Education
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3 hover:border-cyan-500/30 transition">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20 self-start sm:self-auto">
                      {edu.gpa}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-300">{edu.institution} • <span className="text-slate-400 font-normal">{edu.location}</span></p>
                  <p className="text-xs font-mono text-slate-400">{edu.timeline}</p>

                  <div className="space-y-1 pt-2">
                    {edu.highlights.map((hl, i) => (
                      <p key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Award className="w-5 h-5 text-violet-400" /> Industry Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 relative overflow-hidden group hover:border-violet-500/40 transition">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/30">
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-xs font-semibold text-cyan-400">{cert.issuer}</p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
