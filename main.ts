// firmware-32172929: a robot's wedding vow. This program writes that
// single vow to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The vow: a machine speaking about its own firmware, battery and errors —
// the joke lands because the error is the meeting itself, and the tenderness
// is that he never wants it fixed.
const LINE =
  'I vow to love you through every firmware update and every low battery — you were my favorite error, and I will spend my last percent of charge saying your name.';

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
