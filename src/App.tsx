/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FullscreenMenu } from './components/FullscreenMenu';
import { Hero } from './components/Hero';
import { TrustedBrands } from './components/TrustedBrands';
import { ImpactSection } from './components/ImpactSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DesignProcess } from './components/DesignProcess';
import { WhyChooseMe } from './components/WhyChooseMe';
import { WorkspaceMedia } from './components/WorkspaceMedia';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { BlogSection } from './components/BlogSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { BlogsView } from './components/BlogsView';
import { ContactView } from './components/ContactView';
import { NotFoundView } from './components/NotFoundView';

import { ArticleModal } from './components/ArticleModal';
import { ProjectModal } from './components/ProjectModal';
import { VersionControlModal } from './components/VersionControlModal';
import { VersionSwitcher, PortfolioVersion } from './components/VersionSwitcher';

import { PROJECTS } from './data/portfolioData';
import { Project, Article } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [versionMode, setVersionMode] = useState<PortfolioVersion>('v2');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVersionControlOpen, setIsVersionControlOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Auto scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const selectedProject: Project | null =
    PROJECTS.find((p) => p.id === selectedProjectId) || null;

  return (
    <div
      className={`min-h-screen text-[#111111] font-sans antialiased selection:bg-[#ff4d15] selection:text-white transition-colors duration-500 ${
        versionMode === 'v1' ? 'bg-[#0f0f0f]' : 'bg-[#111111]'
      }`}
    >
      {/* Top Fixed Header Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenVersionControl={() => setIsVersionControlOpen(true)}
      />

      {/* Main Page View Renderer */}
      <main>
        {currentView === 'home' && (
          <>
            <Hero
              onNavigate={handleNavigate}
              onSelectProject={handleSelectProject}
              versionMode={versionMode}
            />
            <TrustedBrands />
            <ImpactSection />
            <ServicesSection onNavigate={handleNavigate} />
            <ProjectsSection
              onSelectProject={handleSelectProject}
              onNavigate={handleNavigate}
              versionMode={versionMode}
            />
            <DesignProcess />
            <WhyChooseMe versionMode={versionMode} />
            <WorkspaceMedia />
            <TestimonialsSection />
            <PricingSection onNavigate={handleNavigate} />
            <BlogSection
              onSelectArticle={(art) => setSelectedArticle(art)}
              onNavigate={handleNavigate}
            />
            <CtaSection />
            <Footer
              onNavigate={handleNavigate}
              onOpenVersionControl={() => setIsVersionControlOpen(true)}
            />
          </>
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenVersionControl={() => setIsVersionControlOpen(true)}
            versionMode={versionMode}
          />
        )}

        {currentView === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenVersionControl={() => setIsVersionControlOpen(true)}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentView === 'blogs' && (
          <BlogsView
            onSelectArticle={(art) => setSelectedArticle(art)}
            onNavigate={handleNavigate}
            onOpenVersionControl={() => setIsVersionControlOpen(true)}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenVersionControl={() => setIsVersionControlOpen(true)}
          />
        )}

        {currentView === '404' && (
          <NotFoundView
            onNavigate={handleNavigate}
            onOpenVersionControl={() => setIsVersionControlOpen(true)}
          />
        )}
      </main>

      {/* Floating Version Switcher Bar */}
      <VersionSwitcher
        currentVersion={versionMode}
        onVersionChange={setVersionMode}
      />

      {/* Fullscreen Framer Overlay Menu */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenVersionControl={() => setIsVersionControlOpen(true)}
      />

      {/* Git Version Control & Change History Modal */}
      <VersionControlModal
        isOpen={isVersionControlOpen}
        onClose={() => setIsVersionControlOpen(false)}
      />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onNavigate={handleNavigate}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
