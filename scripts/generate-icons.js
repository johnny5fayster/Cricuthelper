#!/usr/bin/env node
/**
 * Generate PWA icons from SVG source
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputSvg = path.join(__dirname, '../public/icons/icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

async function generateIcons() {
  console.log('🎨 Generating PWA icons...\n');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(inputSvg)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Generated ${size}x${size}`);
    } catch (error) {
      console.error(`✗ Failed ${size}x${size}: ${error.message}`);
    }
  }

  console.log('\n✅ Icon generation complete!');
}

generateIcons().catch(console.error);
