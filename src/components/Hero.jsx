import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Sparkles, CheckCircle2, Code, Terminal, Brain } from 'lucide-react';

const titles = [
  "Software Developer",
  "Full-Stack Web Developer (Next.js/Django)",
  "AI & Machine Learning Developer",
  "Outlier & Mercor Technical Candidate"
];

export default function Hero({ onOpenResume }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-lg animate-pulse-glow">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              {personalDetails.status}
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-semibold text-slate-300 font-mono transition-all duration-500">
                  &gt; {titles[currentTitleIndex]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalDetails.headline}. B.Tech Computer Science graduate (GPA 8.55/10) skilled in building live client web apps, computer vision AI systems, and scalable backend pipelines.
            </p>

            {/* Quick Tech Badge Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['Java', 'Python', 'Next.js', 'React.js', 'Django', 'MySQL', 'Scikit-Learn', 'AWS'].map(tech => (
                <span key={tech} className="text-xs bg-slate-900/90 border border-slate-800 text-slate-300 px-3 py-1 rounded-md font-mono">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all duration-200"
              >
                Explore Projects <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 border border-slate-700 hover:border-cyan-400 px-6 py-3.5 rounded-xl hover:bg-slate-800 transition duration-200"
              >
                <Download className="w-4 h-4 text-cyan-400" /> View & Download CV
              </button>
              <a
                href="#platform-hub"
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-950/80 border border-violet-500/30 hover:border-violet-400 px-5 py-3.5 rounded-xl transition duration-200"
              >
                <Sparkles className="w-4 h-4 text-violet-400" /> Outlier / Mercor Hub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-4 text-slate-400">
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalDetails.email}`} className="hover:text-cyan-400 transition" title="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href={`tel:${personalDetails.phone}`} className="hover:text-cyan-400 transition" title="Phone">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card / Visual Code Snippet */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 shadow-2xl relative group">
              <div className="absolute -top-3 -right-3 bg-cyan-500 text-slate-950 text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> B.Tech CSE (2025)
              </div>

              {/* Developer Terminal Box */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>shaik_rasiq_developer_profile.py</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                </div>

                <div className="space-y-1.5 text-slate-300">
                  <p><span className="text-cyan-400">class</span> <span className="text-yellow-300">SoftwareDeveloper</span>:</p>
                  <p className="pl-4"><span className="text-cyan-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                  <p className="pl-8"><span className="text-violet-400">self</span>.name = <span className="text-emerald-400">"{personalDetails.name}"</span></p>
                  <p className="pl-8"><span className="text-violet-400">self</span>.gpa = <span className="text-emerald-400">"8.55/10"</span></p>
                  <p className="pl-8"><span className="text-violet-400">self</span>.certifications = [<span className="text-emerald-400">"AWS Cloud Practitioner"</span>, <span className="text-emerald-400">"NPTEL IoT 80%"</span>]</p>
                  <p className="pl-8"><span className="text-violet-400">self</span>.core_stack = [<span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"Django"</span>]</p>
                  <p className="pl-4"><span className="text-cyan-400">def</span> <span className="text-blue-400">get_status</span>(self):</p>
                  <p className="pl-8"><span className="text-cyan-400">return</span> <span className="text-emerald-400">"Ready for Outlier, Mercor, Freelance & Enterprise Roles!"</span></p>
                </div>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {personalDetails.stats.map(stat => (
                  <div key={stat.label} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                    <p className="text-xl font-extrabold text-cyan-400 font-mono">{stat.value}</p>
                    <p className="text-[11px] text-slate-400">{stat.label}</p>
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
