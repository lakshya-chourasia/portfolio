import React from 'react';
import { X, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-xs shadow-2xl overflow-hidden my-8 border border-neutral-300">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#ff4d15] text-white text-[10px] font-mono font-bold uppercase rounded-xs">
              {article.category}
            </span>
            <span className="text-xs font-mono text-neutral-500">
              {article.readTime}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close article modal"
            className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#ff4d15] text-neutral-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111111] leading-tight mb-6">
            {article.title}
          </h2>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-500 pb-6 mb-8 border-b border-neutral-200">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#ff4d15]" />
              <span className="font-bold text-neutral-800">{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#ff4d15]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ff4d15]" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full aspect-[16/9] max-h-[380px] bg-neutral-100 overflow-hidden rounded-xs mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed font-sans text-sm sm:text-base space-y-4">
            {article.content.split('\n\n').map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="mt-12 pt-6 border-t border-neutral-200 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">
              ©2026 Michael Portfoliob Insights
            </span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }}
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff4d15] hover:text-black transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
