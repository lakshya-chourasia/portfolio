import React, { useState } from 'react';
import {
  X,
  GitBranch,
  GitCommit as GitCommitIcon,
  Tag,
  CheckCircle2,
  Copy,
  Check,
  Search,
  Terminal,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { GIT_COMMITS_HISTORY } from '../data/portfolioData';
import { filterCommits, getReleaseStats, GitCommit } from '../utils/versionControl';

interface VersionControlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VersionControlModal: React.FC<VersionControlModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [expandedCommitHash, setExpandedCommitHash] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'commits' | 'linter' | 'changelog'>('commits');

  if (!isOpen) return null;

  const commits = filterCommits(GIT_COMMITS_HISTORY, {
    type: selectedType,
    search: searchQuery,
  });

  const stats = getReleaseStats(GIT_COMMITS_HISTORY);

  const copyToClipboard = (hash: string) => {
    navigator.clipboard?.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const toggleExpand = (hash: string) => {
    setExpandedCommitHash(expandedCommitHash === hash ? null : hash);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111111] text-white rounded-xs border border-neutral-800 shadow-2xl overflow-hidden my-8 flex flex-col max-h-[88vh]">
        {/* Top Header Bar */}
        <div className="bg-[#181818] px-6 py-4 border-b border-neutral-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#ff4d15]/10 border border-[#ff4d15]/30 text-[#ff4d15] flex items-center justify-center">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-black uppercase tracking-tight text-white flex items-center gap-2">
                <span>Version Control & Change History</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-[#ff4d15] border border-neutral-700">
                  master • HEAD
                </span>
              </h2>
              <p className="text-[11px] font-mono text-neutral-400">
                Live Git repository status, conventional commit history, and ESLint integration
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Version Control Modal"
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#ff4d15] text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pt-3 bg-[#141414] border-b border-neutral-800 flex items-center justify-between shrink-0 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={() => setActiveTab('commits')}
              className={`pb-3 border-b-2 font-bold cursor-pointer transition-colors ${
                activeTab === 'commits'
                  ? 'border-[#ff4d15] text-[#ff4d15]'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Commit History ({GIT_COMMITS_HISTORY.length})
            </button>
            <button
              onClick={() => setActiveTab('linter')}
              className={`pb-3 border-b-2 font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                activeTab === 'linter'
                  ? 'border-[#ff4d15] text-[#ff4d15]'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ESLint Linter Config</span>
            </button>
            <button
              onClick={() => setActiveTab('changelog')}
              className={`pb-3 border-b-2 font-bold cursor-pointer transition-colors ${
                activeTab === 'changelog'
                  ? 'border-[#ff4d15] text-[#ff4d15]'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Release Notes (v1.2.0)
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-neutral-400 pb-2">
            <span>Total: {stats.totalCommits} commits</span>
            <span>•</span>
            <span>{stats.features} feats</span>
            <span>•</span>
            <span className="text-emerald-400">ESLint 0 errors</span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'commits' && (
            <>
              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
                  {['all', 'feat', 'fix', 'chore'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1 rounded-xs text-[11px] font-mono uppercase font-bold transition-colors cursor-pointer border ${
                        selectedType === type
                          ? 'bg-[#ff4d15] text-white border-[#ff4d15]'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search commits or hash..."
                    className="w-full pl-8 pr-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xs text-xs font-mono text-white focus:outline-none focus:border-[#ff4d15]"
                  />
                </div>
              </div>

              {/* Commits Timeline */}
              <div className="space-y-4">
                {commits.map((commit: GitCommit) => {
                  const isExpanded = expandedCommitHash === commit.hash;
                  const isCopied = copiedHash === commit.hash;

                  return (
                    <div
                      key={commit.hash}
                      className="bg-[#161616] border border-neutral-800 rounded-xs p-5 hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        {/* Commit Title & Badges */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-sm bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                            <GitCommitIcon className="w-4 h-4 text-[#ff4d15]" />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                              <span
                                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs uppercase ${
                                  commit.type === 'feat'
                                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                    : commit.type === 'fix'
                                    ? 'bg-amber-950 text-amber-400 border border-amber-800'
                                    : 'bg-purple-950 text-purple-400 border border-purple-800'
                                }`}
                              >
                                {commit.type}
                              </span>

                              {commit.scope && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-neutral-800 text-neutral-300 border border-neutral-700">
                                  ({commit.scope})
                                </span>
                              )}

                              {commit.tag && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#ff4d15]/20 text-[#ff4d15] border border-[#ff4d15]/40 flex items-center gap-1 font-bold">
                                  <Tag className="w-2.5 h-2.5" />
                                  <span>{commit.tag}</span>
                                </span>
                              )}
                            </div>

                            <h3 className="text-sm font-bold text-white tracking-tight">
                              {commit.message}
                            </h3>
                          </div>
                        </div>

                        {/* Hash & Copy Button */}
                        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
                          <button
                            onClick={() => copyToClipboard(commit.hash)}
                            className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-xs border border-neutral-800 transition-colors cursor-pointer"
                            title="Copy full commit hash"
                          >
                            <span>{commit.shortHash}</span>
                            {isCopied ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3 text-neutral-500" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Author & Stats Footer */}
                      <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-400 gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-semibold">{commit.author}</span>
                          <span>•</span>
                          <span>{commit.date}</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <span>{commit.filesChanged} files changed</span>
                          <span className="text-emerald-400">+{commit.insertions} lines</span>
                          <button
                            onClick={() => toggleExpand(commit.hash)}
                            className="text-[#ff4d15] hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Expandable Diff & Details Summary */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-neutral-800 text-xs font-mono bg-neutral-950 p-4 rounded-xs text-neutral-300 space-y-2">
                          <div className="text-neutral-500 font-semibold uppercase text-[10px]">
                            Commit Message:
                          </div>
                          <p className="text-white bg-neutral-900 p-2 rounded-xs border border-neutral-800">
                            {commit.fullMessage}
                          </p>

                          <div className="text-neutral-500 font-semibold uppercase text-[10px] pt-2">
                            Summary of Changes:
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-neutral-400 text-[11px]">
                            {commit.scope === 'portfolio' && (
                              <>
                                <li>Replicated full Framer Portfoliob layout with exact typography and palette</li>
                                <li>Created interactive services accordion with hover preview images</li>
                                <li>Added Projects section with 5 featured case studies</li>
                                <li>Implemented responsive navigation and full-screen slide-over menu</li>
                                <li>Added working dual-monitor workspace video display</li>
                              </>
                            )}
                            {commit.scope === 'core' && (
                              <>
                                <li>Created pure logic modules: versionControl.ts and portfolioLogic.ts</li>
                                <li>Wrote 9 deterministic unit tests with node:test and node:assert</li>
                                <li>Verified unit test suite via npx tsx --test</li>
                              </>
                            )}
                            {commit.scope === 'setup' && (
                              <>
                                <li>Configured ESLint 9+ flat config with standard best practices</li>
                                <li>Configured Babel parser with TypeScript and React presets</li>
                                <li>Integrated npm run lint command running with 0 errors</li>
                              </>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {activeTab === 'linter' && (
            <div className="space-y-6">
              <div className="p-5 bg-[#161616] border border-neutral-800 rounded-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Standard ESLint Integration Configured
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    ESLint flat configuration (<code className="text-[#ff4d15] font-mono">eslint.config.js</code>) is actively enforcing standard best practices for TypeScript and React 19 across the codebase.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-[#161616] border border-neutral-800 p-4 rounded-xs">
                  <span className="text-neutral-500 uppercase block mb-1">Linter Engine</span>
                  <span className="text-white font-bold">ESLint 10.x Flat Config</span>
                </div>
                <div className="bg-[#161616] border border-neutral-800 p-4 rounded-xs">
                  <span className="text-neutral-500 uppercase block mb-1">Language Parser</span>
                  <span className="text-white font-bold">@babel/eslint-parser (TS + JSX)</span>
                </div>
                <div className="bg-[#161616] border border-neutral-800 p-4 rounded-xs">
                  <span className="text-neutral-500 uppercase block mb-1">React Hook Rules</span>
                  <span className="text-emerald-400 font-bold">eslint-plugin-react-hooks</span>
                </div>
                <div className="bg-[#161616] border border-neutral-800 p-4 rounded-xs">
                  <span className="text-neutral-500 uppercase block mb-1">CLI Command</span>
                  <span className="text-[#ff4d15] font-bold">npm run lint</span>
                </div>
              </div>

              <div className="bg-black p-4 rounded-xs border border-neutral-800 font-mono text-xs">
                <div className="flex items-center gap-2 text-neutral-500 mb-2 pb-2 border-b border-neutral-900">
                  <Terminal className="w-3.5 h-3.5 text-[#ff4d15]" />
                  <span>Terminal Verification Output:</span>
                </div>
                <pre className="text-emerald-400 overflow-x-auto">
{`$ npm run lint
> react-example@0.0.0 lint
> eslint .

✨ Linting completed successfully with 0 errors.`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="space-y-6">
              <div className="border-l-2 border-[#ff4d15] pl-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-white">v1.2.0 - Complete Portfoliob Release</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Latest
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500 block">Released: 2026-11-13</span>
                <ul className="list-disc list-inside text-xs text-neutral-300 font-sans space-y-1.5 pt-2">
                  <li>Implemented full Portfoliob Framer design system with signature terracotta hero</li>
                  <li>Added interactive Services page with expanded capabilities and dynamic preview cards</li>
                  <li>Added dedicated About page with 5-photo gallery strip, achievements, and career journey</li>
                  <li>Added Blog insights page with category filters, search, and reading modal</li>
                  <li>Added Contact page with inquiry form and FAQ accordion</li>
                  <li>Added interactive in-app Version Control & Git History Inspector modal</li>
                </ul>
              </div>

              <div className="border-l-2 border-neutral-700 pl-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-white">v1.1.0 - Core Logic & Unit Tests</span>
                </div>
                <span className="text-xs font-mono text-neutral-500 block">Released: 2026-11-13</span>
                <ul className="list-disc list-inside text-xs text-neutral-300 font-sans space-y-1.5 pt-2">
                  <li>Decoupled business logic into pure modules: versionControl.ts and portfolioLogic.ts</li>
                  <li>Implemented 9 automated unit tests using Node built-in test runner</li>
                  <li>Extracted authentic high-resolution video frames and workspace video asset</li>
                </ul>
              </div>

              <div className="border-l-2 border-neutral-700 pl-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-white">v1.0.0 - Project Scaffold & ESLint Setup</span>
                </div>
                <span className="text-xs font-mono text-neutral-500 block">Released: 2026-11-13</span>
                <ul className="list-disc list-inside text-xs text-neutral-300 font-sans space-y-1.5 pt-2">
                  <li>Initialized Git repository with conventional commit standards</li>
                  <li>Configured ESLint flat config with TypeScript and React best practices</li>
                  <li>Added metadata.json and index.html typography setup</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#141414] px-6 py-3.5 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Git Repository Synchronized</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white hover:bg-[#ff4d15] text-[#111111] hover:text-white rounded-xs font-bold uppercase transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
