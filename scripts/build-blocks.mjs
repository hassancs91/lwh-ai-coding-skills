// Builds the blocks index that ships in the plugin.
//
//   node scripts/build-blocks.mjs <path-to-book.html>          write plugins/lwh-ai-coding/blocks/
//   node scripts/build-blocks.mjs <path-to-book.html> --list   print the blocks found in the book
//
// Names, taglines and parts come from the book. Everything else (applies when, stage, kind,
// done when) is written by hand in scripts/blocks-meta.json, keyed by block name.
// A block in the book with no entry in blocks-meta.json is reported and left out.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'plugins', 'lwh-ai-coding', 'blocks');
const metaPath = join(root, 'scripts', 'blocks-meta.json');

const [bookPath, flag] = process.argv.slice(2);
if (!bookPath) {
  console.error('Usage: node scripts/build-blocks.mjs <path-to-book.html> [--list]');
  process.exit(1);
}

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const pick = (chunk, re) => {
  const m = chunk.match(re);
  return m ? decode(m[1]) : '';
};

const html = readFileSync(bookPath, 'utf8');
const blocks = html
  .split(/<section class="sheet bb[^"]*">/)
  .slice(1)
  .map((chunk) => ({
    name: pick(chunk, /<h1 class="title">([\s\S]*?)<\/h1>/),
    tagline: pick(chunk, /<div class="sub">([\s\S]*?)<\/div>/),
    part: pick(chunk, /<span class="series">([\s\S]*?)<\/span>/),
  }))
  .filter((b) => b.name && b.part);

if (flag === '--list') {
  for (const b of blocks) console.log(`${b.part} | ${b.name} | ${b.tagline}`);
  console.error(`${blocks.length} blocks`);
  process.exit(0);
}

const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : {};
const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const parts = new Map();
const missing = [];
for (const b of blocks) {
  const m = meta[b.name];
  if (!m) {
    missing.push(b.name);
    continue;
  }
  if (!parts.has(b.part)) parts.set(b.part, []);
  parts.get(b.part).push({ ...b, ...m });
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const index = [
  '# Blocks index',
  '',
  'Every block, with when it applies and when it starts to matter. Pick blocks from these tables, then open only the part files you need for the full entries.',
  '',
  '**Stage:** when the block starts to matter.',
  '- `day-one`: every app, from the first version.',
  '- `day-one-if`: from the first version, when the app has the feature in "Applies when".',
  '- `go-live`: before the app is put on the internet for real users.',
  '- `with-users`: after launch, once people use it.',
  '- `at-scale`: with real traffic.',
  '- `any`: a concept, explained when the term comes up.',
  '',
  '**Kind:** `checkable` (a test or a reviewer can prove it), `practice` (a way of working), `concept` (something to understand; never put in a plan or turned into a check).',
  '',
];

const sentence = (s) => (/[.?!]$/.test(s) ? s : `${s}.`);

let count = 0;
for (const [part, list] of parts) {
  const file = `${slug(part)}.md`;
  index.push(`## ${part}`, '', `File: \`${file}\``, '', '| Block | Applies when | Stage | Kind |', '|---|---|---|---|');
  const body = [`# ${part}`, ''];
  for (const b of list) {
    index.push(`| ${b.name} | ${b.applies} | ${b.stage} | ${b.kind} |`);
    body.push(`### ${b.name}`, `- What: ${sentence(b.what || b.tagline)}`, `- Applies when: ${sentence(b.applies)}`, `- Stage: ${b.stage}`, `- Kind: ${b.kind}`);
    if (b.check) body.push(`- Done when: ${b.check}`);
    body.push('');
    count++;
  }
  index.push('');
  writeFileSync(join(outDir, file), body.join('\n'));
}
writeFileSync(join(outDir, 'index.md'), index.join('\n'));

console.log(`Wrote ${count} blocks in ${parts.size} parts to ${outDir}`);
if (missing.length) console.log(`No entry in blocks-meta.json for ${missing.length}: ${missing.join(', ')}`);
const stale = Object.keys(meta).filter((k) => !blocks.some((b) => b.name === k));
if (stale.length) console.log(`In blocks-meta.json but not in the book: ${stale.join(', ')}`);
