import React from 'react';
import { X, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (view: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white text-[#111111] rounded-xs shadow-2xl overflow-hidden my-8 border border-neutral-300">
        {/* Top Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#ff4d15] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              SYSTEM ARCHITECTURE
            </span>
            <span className="text-xs font-mono text-neutral-400">•</span>
            <span className="text-xs font-mono text-neutral-500">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#ff4d15] text-neutral-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 max-h-[78vh] overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              {project.title}
            </h2>
            <span className="text-xs font-mono text-neutral-400 font-bold">
              YEAR {project.year}
            </span>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed">
            {project.description}
          </p>

          {/* Project Image */}
          <div className="w-full aspect-[16/10] bg-neutral-900 rounded-xs overflow-hidden border border-neutral-200 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xs space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 block">
                Key Technical & Architectural Achievements:
              </span>
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                Tech Stack & Infrastructure:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
              }}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#ff4d15] hover:bg-[#e03d07] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Discuss Similar Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="text-xs font-mono text-neutral-500 hover:text-black transition-colors cursor-pointer"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
