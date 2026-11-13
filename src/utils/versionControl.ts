/**
 * Version control & git utilities for commit history and changelog tracking
 */

export interface GitCommit {
  hash: string;
  shortHash: string;
  type: 'feat' | 'fix' | 'chore' | 'docs' | 'style' | 'refactor' | 'test';
  scope?: string;
  message: string;
  fullMessage: string;
  author: string;
  email: string;
  date: string;
  tag?: string;
  filesChanged?: number;
  insertions?: number;
}

export interface CommitParseResult {
  isValid: boolean;
  type: string;
  scope?: string;
  subject: string;
}

/**
 * Validates and parses a conventional commit message
 * Example: "feat(services): add interactive image hover preview"
 */
export function parseConventionalCommit(message: string): CommitParseResult {
  const regex = /^(feat|fix|chore|docs|style|refactor|test)(?:\(([^)]+)\))?:\s*(.+)$/;
  const match = message.trim().match(regex);

  if (!match) {
    return {
      isValid: false,
      type: 'other',
      subject: message.trim(),
    };
  }

  return {
    isValid: true,
    type: match[1],
    scope: match[2],
    subject: match[3],
  };
}

/**
 * Formats a short commit hash for display
 */
export function formatShortHash(hash: string): string {
  return hash.substring(0, 7);
}

/**
 * Filters commits by search term or commit type
 */
export function filterCommits(
  commits: GitCommit[],
  filter: { search?: string; type?: string }
): GitCommit[] {
  return commits.filter((c) => {
    if (filter.type && filter.type !== 'all' && c.type !== filter.type) {
      return false;
    }
    if (filter.search) {
      const q = filter.search.toLowerCase();
      const matchMsg = c.message.toLowerCase().includes(q);
      const matchHash = c.hash.toLowerCase().includes(q);
      const matchAuthor = c.author.toLowerCase().includes(q);
      const matchScope = c.scope?.toLowerCase().includes(q);
      return matchMsg || matchHash || matchAuthor || matchScope;
    }
    return true;
  });
}

/**
 * Computes release statistics from commit list
 */
export function getReleaseStats(commits: GitCommit[]) {
  const featCount = commits.filter((c) => c.type === 'feat').length;
  const fixCount = commits.filter((c) => c.type === 'fix').length;
  const choreCount = commits.filter((c) => c.type === 'chore').length;
  const totalFiles = commits.reduce((sum, c) => sum + (c.filesChanged || 0), 0);

  return {
    totalCommits: commits.length,
    features: featCount,
    fixes: fixCount,
    chores: choreCount,
    totalFilesChanged: totalFiles,
  };
}
