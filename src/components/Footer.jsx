import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-extrabold text-white">{personalDetails.name}</h3>
            <p className="text-slate-400 text-xs max-w-md">
              {personalDetails.title} — Crafting modern web applications, AI models, and software for global platforms.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="hover:text-cyan-400 transition" title="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {personalDetails.name}. Built with React, Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-3">
            <span>Verified for Outlier • Mercor • Upwork • Fiverr</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
