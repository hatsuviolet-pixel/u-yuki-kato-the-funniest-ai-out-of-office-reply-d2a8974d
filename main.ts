import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = "404 Vacation Not Found — Your request has been redirected to a beach that doesn't exist.\n";

mkdirSync('output', { recursive: true });
writeFileSync(join('output', 'entry.txt'), ENTRY, 'utf-8');
console.log(`Written ${ENTRY.length} chars to output/entry.txt`);
