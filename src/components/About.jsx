import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { User, Globe, MapPin, Languages, CheckCircle, Cpu, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-4 h-4" /> Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="gradient-text">{personalDetails.name}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Software Developer dedicated to clean code, robust backend engineering, and intelligent user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-6 h-6 text-cyan-400" />
                Software Engineering & AI Focus
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalDetails.bio}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I specialize in building production-ready web applications using React/Next.js and Django, as well as developing machine learning pipelines (Scikit-Learn, Faster R-CNN, Grab-Cut). Whether constructing responsive client platforms like MSJ Interiors or conducting rigorous code evaluations for AI alignment, I bring strong problem-solving and clean architectural standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 uppercase font-semibold">Location & Timezone</span>
                  <p className="text-xs font-semibold text-white">{personalDetails.location}</p>
                  <p className="text-[10px] text-cyan-400 font-mono">{personalDetails.timezone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-violet-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 uppercase font-semibold">Languages Spoken</span>
                  <p className="text-xs font-semibold text-white">English, Hindi & Telugu</p>
                  <p className="text-[10px] text-slate-400">Professional & Fluent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Strengths & Platform Alignment Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" /> Key Highlights & Verification
              </h4>

              <div className="space-y-3">
                {[
                  { title: "B.Tech CSE GPA 8.55/10", desc: "Top academic standing with high distinction in core CS." },
                  { title: "AWS Cloud Practitioner Certified", desc: "Foundational mastery of AWS cloud services & security." },
                  { title: "NPTEL IoT Certified (80% Score)", desc: "IIT-certified understanding of embedded & IoT networks." },
                  { title: "Proven Client Web Deployments", desc: "Designed, built & deployed live business sites on Vercel." },
                  { title: "Outlier & Mercor Code Evaluation Ready", desc: "Experienced in step-by-step code review, debugging & AI training." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">{item.title}</h5>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
