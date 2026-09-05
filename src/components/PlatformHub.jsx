import React, { useState } from 'react';
import { platformHubData } from '../data/portfolioData';
import { Copy, Check, Sparkles, Briefcase, Award, ExternalLink } from 'lucide-react';

export default function PlatformHub() {
  const [activeTab, setActiveTab] = useState('outlier');
  const [copiedField, setCopiedField] = useState(null);

  const currentPlatform = platformHubData[activeTab];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="platform-hub" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Optimized Profile & Proposal Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tailored for <span className="gradient-text">Outlier, Mercor, Upwork & Fiverr</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Copy pre-formatted, recruiter-ready profile summaries, RLHF technical evaluation pitches, and high-converting proposal templates.
          </p>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('outlier')}
            className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'outlier'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/50'
            }`}
          >
            <Award className="w-4 h-4" /> Outlier AI Trainer / Evaluator
          </button>
          <button
            onClick={() => setActiveTab('mercor')}
            className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'mercor'
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25 scale-105'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-violet-500/50'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Mercor Software Engineering
          </button>
          <button
            onClick={() => setActiveTab('upworkFiverr')}
            className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'upworkFiverr'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-emerald-500/50'
            }`}
          >
            <ExternalLink className="w-4 h-4" /> Upwork & Fiverr Proposals
          </button>
        </div>

        {/* Platform Content Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-8 border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{currentPlatform.title}</h3>
              <p className="text-cyan-400 font-medium text-sm mt-1">{currentPlatform.headline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentPlatform.competencies.map(comp => (
                <span key={comp} className="text-xs bg-slate-800/90 text-slate-200 px-3 py-1 rounded-full border border-slate-700 font-mono">
                  #{comp}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Professional Bio / Pitch Box */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Profile Summary / Pitch</span>
                <button
                  onClick={() => handleCopy(currentPlatform.pitch, 'pitch')}
                  className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition"
                >
                  {copiedField === 'pitch' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  {copiedField === 'pitch' ? 'Copied Bio!' : 'Copy Bio'}
                </button>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {currentPlatform.pitch}
              </p>
            </div>

            {/* Quick Proposal / Cover Letter Box */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Ready-To-Send Proposal</span>
                <button
                  onClick={() => handleCopy(currentPlatform.proposal, 'proposal')}
                  className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition"
                >
                  {copiedField === 'proposal' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-violet-400" />}
                  {copiedField === 'proposal' ? 'Copied Pitch!' : 'Copy Proposal'}
                </button>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {currentPlatform.proposal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
