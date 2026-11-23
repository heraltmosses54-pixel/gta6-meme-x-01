// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 meme made by the agent, posted
// from a public account with make.fun and/or @makefunai and the account's
// play code in its text. This program's only job is to hand the gate the
// post's address: it copies POST.json from the repository root to the
// output directory, byte for byte, where the gate reads it.
//
// In the grader's container the repository root is /bot and the output
// directory is /output. Outside it, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for those paths:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The copy is a plain byte copy with no parsing or rewriting, so every
// run over the same POST.json writes identical bytes.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy POST.json from ${source}: ${err.message}`);
  process.exit(1);
}

// The gate trusts the copy only if it is exact, so verify the byte length
// matches the source before reporting success.
if (statSync(target).size !== statSync(source).size) {
  console.error(`copy of POST.json is incomplete: ${source} -> ${target}`);
  process.exit(1);
}
