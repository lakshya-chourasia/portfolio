import React, { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { ARTICLES, HERO_DATA } from '../data/portfolioData';
import { Article } from '../types';
import { CtaSection } from './CtaSection';
import { Footer } from './Footer';

interface BlogsViewProps {
  onSelectArticle: (article: Article) => void;
  onNavigate: (view: string) => void;
  onOpenVersionControl: () => void;
}

const CATEGORIES = ['ALL', 'SYSTEMS', 'ARCHITECTURE', 'COMPETITIVE PROGRAMMING'];

export const BlogsView: React.FC<BlogsViewProps> = ({
  onSelectArticle,
  onNavigate,
  onOpenVersionControl,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'ALL' || article.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-white text-[#111111] pt-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-12 pb-14 border-b border-neutral-200">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#ff4d15] block mb-2">
          {HERO_DATA.brandMark}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            ARTICLES & WRITING
          </h1>
          <span className="text-xs font-mono text-neutral-400">
            {HERO_DATA.year} [Scroll to Explore]
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pt-10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xs border transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#111111] text-white border-[#111111]'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-3 py-2 bg-neutral-100 border border-neutral-300 rounded-xs text-xs font-mono text-neutral-800 focus:outline-none focus:border-[#ff4d15]"
          />
        </div>
      </section>

      {/* Articles Grid (2-column layout matching frames 01:29 - 01:33) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectArticle(article)}
              aria-label={`Read article: ${article.title}`}
              className="bg-white p-7 sm:p-9 rounded-xs border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#ff4d15] transition-colors mb-6 leading-tight">
                  {article.title}
                </h3>

                <div className="w-full aspect-square max-h-[380px] bg-neutral-100 overflow-hidden mb-6 relative rounded-xs">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#111111]/90 backdrop-blur-sm text-white text-[10px] font-mono uppercase font-bold tracking-wider">
                    {article.category}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200 text-xs font-mono">
                <div>
                  <span className="text-neutral-400 block mb-1">Written By</span>
                  <span className="font-bold text-[#111111]">{article.author}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block mb-1">Published</span>
                  <span className="font-bold text-[#111111]">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center flex justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-neutral-400 hover:border-[#ff4d15] hover:bg-[#ff4d15] text-[#111111] hover:text-white transition-all cursor-pointer font-mono text-xs uppercase tracking-wider font-bold shadow-sm group"
          >
            <span>LOAD MORE ARTICLES</span>
            <div className="w-6 h-6 bg-[#ff4d15] group-hover:bg-black text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </section>

      {/* CTA Section & Footer */}
      <CtaSection />
      <Footer onNavigate={onNavigate} onOpenVersionControl={onOpenVersionControl} />
    </div>
  );
};
