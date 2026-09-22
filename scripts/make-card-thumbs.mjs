// Generates the small card images the /projects grid shows, one per project
// (its first photo), at public/assets/thumbs/<same path as the original>.
//
// The site is a static export with image optimization off, so without these the
// grid served every project's full 1500px original — ~13MB and ~150 large
// decoded bitmaps, which is what made the page stall on phones.
//
// Runs as `prebuild`. Only missing thumbs are written, and the thumbs are
// committed, so if sharp isn't installed the build carries on with them.
import fs from 'node:fs';
import path from 'node:path';

const WIDTH = 800;
const root = path.resolve(import.meta.dirname, '..');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.warn('make-card-thumbs: sharp not available, using committed thumbs');
  process.exit(0);
}

// Pull each project's first photo src out of content/projects.ts.
const source = fs.readFileSync(path.join(root, 'content/projects.ts'), 'utf8');
const firstPhotos = [...source.matchAll(/"photos":\s*\[\s*\{\s*"src":\s*"([^"]+)"/g)].map((m) => m[1]);

let made = 0;
for (const src of firstPhotos) {
  const input = path.join(root, 'public', src);
  const output = path.join(root, 'public/assets/thumbs', src.replace(/^\/assets\//, '').replace(/\.\w+$/, '.webp'));
  if (fs.existsSync(output) || !fs.existsSync(input)) continue;
  fs.mkdirSync(path.dirname(output), { recursive: true });
  await sharp(input).resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: 72 }).toFile(output);
  made++;
}
console.log(`make-card-thumbs: ${made} new, ${firstPhotos.length} total`);
