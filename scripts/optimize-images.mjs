/**
 * scripts/optimize-images.mjs
 *
 * One-shot image optimizer. Walks /public/images, resizes anything wider
 * than MAX_WIDTH down to that width, and re-encodes JPGs with mozjpeg at
 * a quality that's visually indistinguishable but typically 5–10× smaller.
 *
 * Run after dropping new photos in:
 *   npm run optimize-images
 *
 * Idempotent — running it twice is safe; already-optimized files won't
 * meaningfully shrink further.
 */
import sharp from 'sharp';
import { readdir, stat, writeFile, rename, unlink } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('public/images');
const MAX_WIDTH = 1920;       // Plenty for retina hero — anything bigger is waste
const JPEG_QUALITY = 80;      // Sweet spot: invisible quality loss at high compression

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (/\.(jpe?g)$/i.test(entry.name)) {
      yield full;
    }
  }
}

const fmt = (bytes) =>
  bytes > 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(2)} MB`
    : `${(bytes / 1024).toFixed(0)} KB`;

/**
 * Process one file. Writes to a sibling .tmp file first, then atomically
 * renames over the original. This avoids two Windows-only failure modes:
 *   1. File lock while another process (Explorer thumbnail cache, antivirus,
 *      photo viewer) has the original open for read.
 *   2. Half-written files if the script crashes mid-write.
 *
 * Retries up to 3× with backoff to ride out transient locks.
 */
async function processFile(file) {
  const before = (await stat(file)).size;
  const tmp = `${file}.tmp`;

  // Read + transform
  const buf = await sharp(file)
    .rotate() // honor EXIF orientation, then strip it
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();

  // Write to temp + rename, with retries for Windows locks
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await writeFile(tmp, buf);
      await rename(tmp, file);
      lastErr = null;
      break;
    } catch (err) {
      lastErr = err;
      // Best-effort cleanup of orphan tmp
      try { await unlink(tmp); } catch {}
      if (attempt < 3) {
        await new Promise((r) => setTimeout(r, 250 * attempt));
      }
    }
  }
  if (lastErr) throw lastErr;

  const after = (await stat(file)).size;
  return { before, after };
}

let totalBefore = 0;
let totalAfter = 0;
let count = 0;
const skipped = [];

console.log(`Optimizing JPGs in ${ROOT}\n`);

for await (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file);
  try {
    const { before, after } = await processFile(file);
    totalBefore += before;
    totalAfter += after;
    count += 1;
    const saved = ((1 - after / before) * 100).toFixed(0);
    console.log(`  ${rel.padEnd(35)} ${fmt(before).padStart(10)} → ${fmt(after).padStart(10)}  (−${saved}%)`);
  } catch (err) {
    skipped.push({ file: rel, reason: err.code || err.message });
    console.log(`  ${rel.padEnd(35)} SKIPPED  (${err.code || 'error'})`);
  }
}

console.log(`\n${count} files optimized`);
if (totalBefore > 0) {
  console.log(`Total: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (−${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);
}
if (skipped.length) {
  console.log(`\n${skipped.length} skipped — close any program with the file open and re-run:`);
  for (const s of skipped) console.log(`  ${s.file}  (${s.reason})`);
  process.exitCode = 1;
}
