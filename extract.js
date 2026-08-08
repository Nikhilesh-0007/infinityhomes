import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const buf = fs.readFileSync('Akshaya Residency Brochure.pdf');
const parser = new PDFParse();
parser.parse(buf).then(data => {
  console.log('PAGES:', data.numpages);
  console.log(data.text);
}).catch(e => console.error(e));
