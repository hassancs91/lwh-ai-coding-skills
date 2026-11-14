// Copies every file in shared/ into each plugin folder.
//
//   node scripts/sync-shared.mjs           write the copies
//   node scripts/sync-shared.mjs --check   exit 1 if any copy is missing or out of date
//
// A plugin cannot read files outside its own folder once installed, so anything two plugins
// both need is kept once in shared/ and copied in. Edit the file in shared/, then run this.
// Line endings are ignored when comparing, so a Windows checkout does not look out of date.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sharedDir = join(root, 'shared');
const pluginsDir = join(root, 'plugins');
const check = process.argv.includes('--check');
const norm = (s) => s.replace(/\r\n/g, '\n');

const plugins = readdirSync(pluginsDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const files = readdirSync(sharedDir, { withFileTypes: true }).filter((d) => d.isFile()).map((d) => d.name);
let stale = 0;

for (const file of files) {
  const note = `<!-- Copied from shared/${file} by scripts/sync-shared.mjs. Edit that file, not this one. -->\n\n`;
  const content = note + norm(readFileSync(join(sharedDir, file), 'utf8'));
  for (const plugin of plugins) {
    const target = join(pluginsDir, plugin, file);
    const current = existsSync(target) ? norm(readFileSync(target, 'utf8')) : null;
    if (current === content) continue;
    stale++;
    if (check) console.log(`Out of date: plugins/${plugin}/${file}`);
    else {
      writeFileSync(target, content);
      console.log(`Wrote plugins/${plugin}/${file}`);
    }
  }
}

if (check && stale) process.exit(1);
if (!stale) console.log('All shared files are up to date.');
