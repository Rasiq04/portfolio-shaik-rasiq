import React from 'react';
import { personalDetails, educationData, experienceData, certificationsData, projectsData } from '../data/portfolioData';
import { X, Download, FileText, CheckCircle2, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown downloadable resume blob for immediate download
    const cvText = `
SHAIK RASIQ
${personalDetails.phone} | ${personalDetails.email} | Location: ${personalDetails.location}

CAREER OBJECTIVE
${personalDetails.bio}

EDUCATION
${educationData.map(e => `- ${e.degree} | ${e.institution} | ${e.gpa} | ${e.timeline}`).join('\n')}

TECHNICAL SKILLS
- Programming Languages: Java, Python, C++, JavaScript
- Web Technologies: HTML5, CSS3, Bootstrap, Tailwind, React.js, Next.js, Django
- Databases & Cloud: MySQL, AWS Cloud Basics, Vercel
- Version Control: Git, GitHub, Debugging

PROJECTS
${projectsData.map(p => `- ${p.name}\n  Role: ${p.role}\n  Stack: ${p.technologies.join(', ')}\n  Impact: ${p.impact}`).join('\n\n')}

EXPERIENCE & INTERNSHIPS
${experienceData.map(e => `- ${e.role} @ ${e.company} (${e.period})\n  ${e.description}`).join('\n\n')}

CERTIFICATIONS
${certificationsData.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shaik_Rasiq_Software_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Curriculum Vitae Preview</h3>
              <p className="text-xs text-slate-400">Shaik Rasiq — Software Developer | B.Tech CSE (8.55 GPA)</p>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-5 py-2.5 rounded-xl shadow-lg transition self-start sm:self-auto"
          >
            <Download className="w-4 h-4" /> Download Resume (TXT/PDF Format)
          </button>
        </div>

        {/* Printable Resume Document Format */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6 text-slate-200 text-xs sm:text-sm font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-4 space-y-1 text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-white tracking-wide">{personalDetails.name}</h2>
            <p className="text-xs font-mono text-cyan-400">
              {personalDetails.phone} | {personalDetails.email} | Kurnool, AP, India
            </p>
            <p className="text-[11px] text-slate-400">
              LinkedIn: {personalDetails.linkedin} | GitHub: {personalDetails.github}
            </p>
          </div>

          {/* Career Objective */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">Career Objective</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{personalDetails.bio}</p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">Technical Skills</h4>
            <div className="space-y-1 text-xs text-slate-300">
              <p><strong className="text-white">• Languages:</strong> Java, Python, C++ (basic), JavaScript (ES6+)</p>
              <p><strong className="text-white">• Web Tech:</strong> HTML5, CSS3, Bootstrap, Tailwind CSS, React.js, Next.js, Django</p>
              <p><strong className="text-white">• Databases & Cloud:</strong> MySQL, AWS Cloud Basics, Vercel</p>
              <p><strong className="text-white">• Version Control & Core:</strong> Git, GitHub, Debugging, OOP Design</p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">Key Portfolio Projects</h4>
            {projectsData.map(p => (
              <div key={p.id} className="pl-3 border-l-2 border-slate-800 space-y-0.5">
                <h5 className="font-bold text-white text-xs">{p.name}</h5>
                <p className="text-[11px] text-slate-400">Role: {p.role} | Stack: {p.technologies.join(', ')}</p>
                <p className="text-[11px] text-slate-300">{p.contribution}</p>
              </div>
            ))}
          </div>

          {/* Internships & Experience */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">Work Experience & Internships</h4>
            {experienceData.map((e, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>{e.role} – {e.company}</span>
                  <span className="font-mono text-cyan-400">{e.period}</span>
                </div>
                <p className="text-[11px] text-slate-300">{e.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">Education</h4>
            {educationData.map((edu, i) => (
              <div key={i} className="flex justify-between text-xs text-slate-300">
                <span><strong>{edu.degree}</strong> - {edu.institution}</span>
                <span className="font-mono text-cyan-400 font-bold">{edu.gpa}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 font-mono">Certifications</h4>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
              {certificationsData.map((c, i) => (
                <li key={i}><strong>{c.title}</strong> — {c.issuer} ({c.badge})</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
