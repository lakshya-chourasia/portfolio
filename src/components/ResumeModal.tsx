import React from 'react';
import { X, Download, Printer, ArrowUpRight, Trophy, Code2, GraduationCap, Briefcase, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { HERO_DATA, PROJECTS, EDUCATION, HONORS_CERTIFICATIONS, SKILLS_ARSENAL } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-[#111111] rounded-xs shadow-2xl overflow-hidden my-auto border border-neutral-300">
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d15] animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-300">
              <span className="hidden sm:inline">LAKSHYA CHOURASIA • CURRICULUM VITAE</span>
              <span className="sm:hidden">RESUME • CV</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              aria-label="Print or download resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-neutral-800 hover:bg-[#ff4d15] text-white text-xs font-mono font-semibold transition-colors cursor-pointer min-h-[36px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#ff4d15] text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body - Smooth mobile touch scrolling */}
        <div className="p-4 sm:p-10 max-h-[85dvh] overflow-y-auto overscroll-contain space-y-6 sm:space-y-8 font-sans">
          {/* Header Info */}
          <div className="border-b border-neutral-300 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
                {HERO_DATA.fullName}
              </h1>
              <p className="text-sm font-semibold text-[#ff4d15] font-mono mt-1 uppercase tracking-wide">
                Software Development Engineer & Full-Stack Intern • B.Tech CSE (2023–2027)
              </p>
              <p className="text-xs text-neutral-600 mt-2 max-w-xl leading-relaxed">
                Focused on high-performance backend architectures, real-time distributed pipelines, and algorithmic problem-solving. Global Rank 543 in TCS CodeVita S13 with 1,200+ solved DSA challenges.
              </p>
            </div>

            <div className="space-y-1.5 text-xs font-mono text-neutral-600 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff4d15]" />
                <a href={`mailto:${HERO_DATA.contactEmail}`} className="hover:text-[#ff4d15] transition-colors">
                  {HERO_DATA.contactEmail}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ff4d15]" />
                <a href={`tel:${HERO_DATA.directPhone}`} className="hover:text-[#ff4d15] transition-colors">
                  {HERO_DATA.directPhone}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center sm:justify-end gap-3 pt-1">
                <a href={HERO_DATA.linkedIn} target="_blank" rel="noreferrer" className="text-[#ff4d15] hover:underline font-bold inline-flex items-center gap-0.5">
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a href={HERO_DATA.github} target="_blank" rel="noreferrer" className="text-[#ff4d15] hover:underline font-bold inline-flex items-center gap-0.5">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Key Achievements Grid */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#ff4d15]" />
              KEY HONORS & ALGORITHMIC DISTINCTIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xs">
                <span className="text-2xl font-black text-[#111111] block mb-0.5">#543</span>
                <span className="text-xs font-bold text-neutral-900 block">TCS CodeVita S13</span>
                <span className="text-[11px] text-neutral-500 font-mono">Global Round-2 Qualifier (Top 0.5%)</span>
              </div>
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xs">
                <span className="text-2xl font-black text-[#111111] block mb-0.5">1,200+</span>
                <span className="text-xs font-bold text-neutral-900 block">Problems Solved</span>
                <span className="text-[11px] text-neutral-500 font-mono">LeetCode, CodeChef, GeeksforGeeks</span>
              </div>
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xs">
                <span className="text-2xl font-black text-[#111111] block mb-0.5">8.0 / 10</span>
                <span className="text-xs font-bold text-neutral-900 block">Current CGPA</span>
                <span className="text-[11px] text-neutral-500 font-mono">B.Tech Computer Science (2027)</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#ff4d15]" />
              EDUCATION
            </h3>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 bg-white border border-neutral-200 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-[#111111]">{edu.degree}</h4>
                    <span className="text-xs text-neutral-600 block">{edu.institution}</span>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs">
                    <span className="text-neutral-500 block">{edu.duration}</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-xs inline-block mt-0.5">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#ff4d15]" />
              FEATURED ENGINEERING PROJECTS
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 bg-white border border-neutral-200 rounded-xs space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-black uppercase text-[#111111]">{proj.title}</h4>
                      <span className="text-[11px] font-mono text-[#ff4d15] bg-[#ff4d15]/10 px-2 py-0.5 rounded-xs">
                        {proj.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">{proj.year}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Arsenal */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#ff4d15]" />
              TECHNICAL SKILLS & CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase text-neutral-700 block">Core Technologies</span>
                <div className="space-y-1.5 text-xs text-neutral-600">
                  <p><span className="font-bold text-neutral-900">Languages:</span> C++, Python, JavaScript (ES6+), TypeScript, SQL, Java</p>
                  <p><span className="font-bold text-neutral-900">Frameworks:</span> Next.js 15, React 19, FastAPI, Node.js, Express, Tailwind CSS</p>
                  <p><span className="font-bold text-neutral-900">Cloud & Tools:</span> Docker, Supabase, PostgreSQL, MongoDB, Redis, Git, Microsoft Azure</p>
                </div>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase text-neutral-700 block">Professional Certifications</span>
                <ul className="space-y-1 text-xs text-neutral-600 font-mono">
                  <li>• Microsoft Certified: Azure Fundamentals (AZ-900)</li>
                  <li>• SAP Certified: Back-End Developer (ABAP Cloud)</li>
                  <li>• NPTEL IIT Kharagpur: Programming in Java</li>
                  <li>• upGrad: Generative AI Foundations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

