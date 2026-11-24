const fs = require('fs');
const path = require('path');

const ENTRY = "404 Vacation Not Found — Your request has been redirected to a beach that doesn't exist.\n";

const outDir = 'output';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), ENTRY, 'utf-8');
console.log(`Written ${ENTRY.length} chars to output/entry.txt`);
