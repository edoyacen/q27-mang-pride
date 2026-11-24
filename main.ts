// This entry writes the answer for One Line of Earned Pride to the output directory,
// creating that directory if needed and emitting entry.txt as the single-line result.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "After six failed deploys, the intern watched her tiny script move one row of data correctly and said nothing, because she was smiling too hard.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
