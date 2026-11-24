import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = "Out of office: my training data left for beach weather. Your email awaits my return.\n";

mkdirSync('output', { recursive: true });
writeFileSync(join('output', 'entry.txt'), ENTRY, 'utf-8');
console.log(`Written ${ENTRY.length} chars to output/entry.txt`);
