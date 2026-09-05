import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Menu, X, FileText, Sparkles, Send, Github, Linkedin } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Platform Hub", href: "#platform-hub" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#080c14]/90 backdrop-blur-md py-3.5 border-b border-slate-800/80 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-0.5 shadow-lg group-hover:shadow-cyan-500/30 transition duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-lg font-mono">
              SR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white tracking-tight text-lg group-hover:text-cyan-400 transition">
              {personalDetails.name}
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase -mt-1">
              Software & AI Developer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 px-4 py-2 rounded-xl transition duration-200"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            Resume
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 px-4.5 py-2 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 py-2.5 rounded-xl"
            >
              <FileText className="w-4 h-4 text-cyan-400" /> View & Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 py-2.5 rounded-xl"
            >
              <Send className="w-4 h-4" /> Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
