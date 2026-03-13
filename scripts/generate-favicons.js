import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2dd4bf"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="37" fill="url(#g)"/>
  <text x="90" y="118" font-family="system-ui, -apple-system, sans-serif" font-size="90" font-weight="700" fill="white" text-anchor="middle">jF</text>
</svg>`;

const svgBuffer = Buffer.from(svgContent);

// Generate 32x32 icons for both light and dark mode (same branded icon)
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile('public/icon-dark-32x32.png');

console.log('Generated icon-dark-32x32.png');

await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile('public/icon-light-32x32.png');

console.log('Generated icon-light-32x32.png');

// Generate 180x180 apple icon
await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile('public/apple-icon.png');

console.log('Generated apple-icon.png');
console.log('All favicons generated successfully!');
