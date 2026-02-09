import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const MEDIA_DIR = new URL('../src/media', import.meta.url).pathname;

// Images to optimize with their max width (preserving detail for artwork)
const config = {
  'style_frame.png':   { maxWidth: 1920, quality: 85 },
  'characters.png':    { maxWidth: 1600, quality: 85 },
  'tomato.png':        { maxWidth: 600,  quality: 85 },
  'border2.jpg':       { maxWidth: 1400, quality: 82 },
  'poppy.png':         { maxWidth: 600,  quality: 85 },
  'logo.png':          { maxWidth: 600,  quality: 85 },
  'freddy.png':        { maxWidth: 400,  quality: 85 },
  'project_photo.jpg': { maxWidth: 800,  quality: 82 },
  'team_photo1.jpg':   { maxWidth: 1024, quality: 82 },
  'team_photo2.jpg':   { maxWidth: 1024, quality: 82 },
};

async function optimize() {
  for (const [filename, opts] of Object.entries(config)) {
    const inputPath = join(MEDIA_DIR, filename);
    const ext = extname(filename);
    const base = basename(filename, ext);
    const outputPath = join(MEDIA_DIR, `${base}.webp`);

    try {
      const info = await stat(inputPath);
      const originalKB = (info.size / 1024).toFixed(0);

      let pipeline = sharp(inputPath);
      const metadata = await pipeline.metadata();

      // Resize if wider than maxWidth
      if (metadata.width > opts.maxWidth) {
        pipeline = pipeline.resize(opts.maxWidth, null, { withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: opts.quality, effort: 6 })
        .toFile(outputPath);

      const newInfo = await stat(outputPath);
      const newKB = (newInfo.size / 1024).toFixed(0);
      const reduction = ((1 - newInfo.size / info.size) * 100).toFixed(0);

      console.log(`${filename}: ${originalKB}KB -> ${base}.webp: ${newKB}KB (${reduction}% smaller)`);
    } catch (err) {
      console.error(`Error processing ${filename}:`, err.message);
    }
  }
}

optimize();
