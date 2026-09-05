import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import FoodCalorieWidget from './FoodCalorieWidget';
import CarPriceWidget from './CarPriceWidget';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, CheckCircle2, X, Eye, Code } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web Development", "AI & ML", "Java Applications", "Automation & Tools"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" /> Strong Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="gradient-text">Projects & Live Demos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Detailed breakdown of live business applications, machine learning vision pipelines, and full-stack software solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-mono px-2.5 py-1 rounded-md border border-slate-700">
                    {project.tag}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    <strong className="text-slate-200">Problem:</strong> {project.problem}
                  </p>

                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">Role:</span>
                    <span className="text-xs font-semibold text-cyan-400">{project.role}</span>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-0.5 rounded-md font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] bg-slate-900 text-slate-500 px-2 py-0.5 rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/80 gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-800 transition"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" /> Details
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveDemo}
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-2 rounded-lg transition"
                  >
                    Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive AI Widgets Showcase Section */}
        <div className="space-y-8 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Interactive AI Live Model Simulators</h3>
            <p className="text-xs text-slate-400 mt-1">Test computer vision calorie estimation and machine learning car price regression directly on this page.</p>
          </div>

          <div id="food-calorie-demo" className="scroll-mt-24">
            <FoodCalorieWidget />
          </div>

          <div id="car-price-demo" className="scroll-mt-24 pt-4">
            <CarPriceWidget />
          </div>
        </div>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20 inline-block">
                {selectedProject.tag}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
              <p className="text-xs text-slate-400">Role: <strong className="text-white">{selectedProject.role}</strong></p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800 h-64 bg-slate-950">
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <h4 className="font-bold text-white text-base mb-1">Problem & Purpose</h4>
                <p className="leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-base mb-2">Key Features</h4>
                <ul className="space-y-1.5">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-base mb-1">My Contribution</h4>
                <p className="text-xs leading-relaxed">{selectedProject.contribution}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Results & Impact</span>
                <p className="text-xs font-medium text-white">{selectedProject.impact}</p>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(t => (
                    <span key={t} className="text-xs bg-slate-800 text-cyan-300 font-mono px-3 py-1 rounded-md border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl transition"
              >
                <Github className="w-4 h-4" /> View Code
              </a>
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-5 py-2.5 rounded-xl transition"
              >
                <ExternalLink className="w-4 h-4" /> Open Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
