import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseConventionalCommit,
  formatShortHash,
  filterCommits,
  getReleaseStats,
  GitCommit,
} from './versionControl';

test('parseConventionalCommit parses valid conventional commit with scope', () => {
  const result = parseConventionalCommit('feat(ui): add interactive services accordion');
  assert.equal(result.isValid, true);
  assert.equal(result.type, 'feat');
  assert.equal(result.scope, 'ui');
  assert.equal(result.subject, 'add interactive services accordion');
});

test('parseConventionalCommit parses commit without scope', () => {
  const result = parseConventionalCommit('fix: correct mobile menu overlay z-index');
  assert.equal(result.isValid, true);
  assert.equal(result.type, 'fix');
  assert.equal(result.scope, undefined);
  assert.equal(result.subject, 'correct mobile menu overlay z-index');
});

test('parseConventionalCommit handles non-conventional commit gracefully', () => {
  const result = parseConventionalCommit('updated readme and asset links');
  assert.equal(result.isValid, false);
  assert.equal(result.type, 'other');
  assert.equal(result.subject, 'updated readme and asset links');
});

test('formatShortHash shortens git hash to 7 characters', () => {
  assert.equal(formatShortHash('12e09b43ec310ea5ee39c60a0cc46a4fc9d4f422'), '12e09b4');
});

test('filterCommits filters correctly by type and search term', () => {
  const mockCommits: GitCommit[] = [
    {
      hash: '12e09b43ec310ea5ee39c60a0cc46a4fc9d4f422',
      shortHash: '12e09b4',
      type: 'feat',
      scope: 'setup',
      message: 'initialize project and configure ESLint standard linter',
      fullMessage: 'feat(setup): initialize project and configure ESLint standard linter',
      author: 'Michael',
      email: 'michael@portfoliob.dev',
      date: '2026-11-13',
      filesChanged: 12,
    },
    {
      hash: '34f18a901234567890abcdef1234567890abcdef',
      shortHash: '34f18a9',
      type: 'fix',
      scope: 'nav',
      message: 'fix responsive mobile nav close button',
      fullMessage: 'fix(nav): fix responsive mobile nav close button',
      author: 'Michael',
      email: 'michael@portfoliob.dev',
      date: '2026-11-13',
      filesChanged: 3,
    },
  ];

  const searchFiltered = filterCommits(mockCommits, { search: 'ESLint' });
  assert.equal(searchFiltered.length, 1);
  assert.equal(searchFiltered[0].type, 'feat');

  const typeFiltered = filterCommits(mockCommits, { type: 'fix' });
  assert.equal(typeFiltered.length, 1);
  assert.equal(typeFiltered[0].shortHash, '34f18a9');

  const allFiltered = filterCommits(mockCommits, { type: 'all' });
  assert.equal(allFiltered.length, 2);
});

test('getReleaseStats computes accurate metrics', () => {
  const mockCommits: GitCommit[] = [
    {
      hash: '111111111111',
      shortHash: '1111111',
      type: 'feat',
      message: 'feat 1',
      fullMessage: 'feat: 1',
      author: 'M',
      email: 'm@dev.com',
      date: '2026-11-13',
      filesChanged: 4,
    },
    {
      hash: '222222222222',
      shortHash: '2222222',
      type: 'feat',
      message: 'feat 2',
      fullMessage: 'feat: 2',
      author: 'M',
      email: 'm@dev.com',
      date: '2026-11-13',
      filesChanged: 5,
    },
    {
      hash: '333333333333',
      shortHash: '3333333',
      type: 'fix',
      message: 'fix 1',
      fullMessage: 'fix: 1',
      author: 'M',
      email: 'm@dev.com',
      date: '2026-11-13',
      filesChanged: 2,
    },
  ];

  const stats = getReleaseStats(mockCommits);
  assert.equal(stats.totalCommits, 3);
  assert.equal(stats.features, 2);
  assert.equal(stats.fixes, 1);
  assert.equal(stats.chores, 0);
  assert.equal(stats.totalFilesChanged, 11);
});
