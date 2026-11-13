import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../data/portfolioData';
import { Article } from '../types';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
  onNavigate: (view: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  onNavigate,
}) => {
  const featuredArticle = ARTICLES[0];
  const sideArticles = ARTICLES.slice(1, 3);

  return (
    <section className="w-full bg-[#f6f6f6] py-20 sm:py-28 text-[#111111] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Tag */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // DESIGN INSIGHTS
          </span>
        </div>

        {/* Section Headline & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none max-w-2xl">
            LATEST DESIGN <br />
            <span className="text-neutral-500 font-extrabold">INSIGHTS</span>
          </h2>

          <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-500 max-w-md leading-relaxed">
            EXPLORE INSIGHTS, DESIGN TRENDS, AND CREATIVE IDEAS FOCUSED ON UI/UX, DIGITAL PRODUCTS AND BUILDING.
          </p>
        </div>

        {/* Articles Grid matching video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Large Featured Article Card (lg:col-span-7) */}
          <div
            onClick={() => onSelectArticle(featuredArticle)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectArticle(featuredArticle)}
            aria-label={`Read article: ${featuredArticle.title}`}
            className="lg:col-span-7 group cursor-pointer bg-white p-6 sm:p-8 rounded-xs shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200"
          >
            <div className="w-full aspect-square max-h-[460px] bg-neutral-100 overflow-hidden mb-6 relative">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#111111]/90 backdrop-blur-sm text-white text-[11px] font-mono uppercase font-bold tracking-wider">
                {featuredArticle.category}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mb-3">
              <span>{featuredArticle.date}</span>
              <span>•</span>
              <span>{featuredArticle.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#ff4d15] transition-colors mb-3">
              {featuredArticle.title}
            </h3>

            <p className="text-sm text-neutral-600 font-medium leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ff4d15]">
              <span>Read Full Article</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Two Stacked Side Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectArticle(article)}
                aria-label={`Read article: ${article.title}`}
                className="group cursor-pointer bg-white p-6 rounded-xs shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200"
              >
                <div className="w-full aspect-[16/9] bg-neutral-100 overflow-hidden mb-4 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#111111]/90 backdrop-blur-sm text-white text-[10px] font-mono uppercase font-bold tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mb-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#ff4d15] transition-colors mb-2">
                  {article.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ff4d15] pt-2">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Articles Link */}
        <div className="mt-14 flex items-center justify-start">
          <button
            onClick={() => onNavigate('blogs')}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-neutral-800 hover:text-[#ff4d15] transition-colors cursor-pointer"
          >
            <span>VIEW ALL 6 ARTICLES</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
