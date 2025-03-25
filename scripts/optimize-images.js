// Script to optimize images for web performance
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Directories to search for images
const IMAGE_DIRS = [
  path.join(__dirname, '../public'), 
];

// Output directory for optimized images
const OUTPUT_DIR = path.join(__dirname, '../public/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// File patterns to match
const PATTERNS = ['**/*.{png,jpg,jpeg}'];

// Size thresholds for optimization (in bytes)
const SIZE_THRESHOLD = 100 * 1024; // 100KB

// Quality settings for different formats
const QUALITY_SETTINGS = {
  webp: 80,
  avif: 65,
  jpeg: 85,
};

// Resize options for large images
const RESIZE_OPTIONS = {
  width: 1200,
  height: 1200,
  fit: 'inside',
  withoutEnlargement: true,
};

// Function to process an image
async function processImage(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const fileName = path.basename(filePath);
    const fileSize = stats.size;

    // Skip small files
    if (fileSize < SIZE_THRESHOLD) {
      console.log(`Skipping ${fileName} (${(fileSize / 1024).toFixed(2)}KB) - below threshold`);
      return;
    }

    console.log(`Processing ${fileName} (${(fileSize / 1024).toFixed(2)}KB)`);

    // Determine output paths
    const webpPath = path.join(OUTPUT_DIR, `${path.parse(fileName).name}.webp`);
    const avifPath = path.join(OUTPUT_DIR, `${path.parse(fileName).name}.avif`);

    // Read image
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if image is large
    if (metadata.width > RESIZE_OPTIONS.width || metadata.height > RESIZE_OPTIONS.height) {
      image.resize(RESIZE_OPTIONS);
    }

    // Convert to WebP with high quality
    await image
      .webp({ quality: QUALITY_SETTINGS.webp })
      .toFile(webpPath);

    // Convert to AVIF with slightly lower quality (smaller file size)
    await image
      .avif({ quality: QUALITY_SETTINGS.avif })
      .toFile(avifPath);

    // Get stats for the output files
    const webpStats = fs.statSync(webpPath);
    const avifStats = fs.statSync(avifPath);

    console.log(`  → WebP: ${(webpStats.size / 1024).toFixed(2)}KB (${Math.round((1 - webpStats.size / fileSize) * 100)}% reduction)`);
    console.log(`  → AVIF: ${(avifStats.size / 1024).toFixed(2)}KB (${Math.round((1 - avifStats.size / fileSize) * 100)}% reduction)`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Main function to process all images
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const dir of IMAGE_DIRS) {
    for (const pattern of PATTERNS) {
      const files = glob.sync(path.join(dir, pattern), { nodir: true });
      
      console.log(`Found ${files.length} images in ${dir} matching ${pattern}`);
      
      // Process each file
      for (const file of files) {
        await processImage(file);
      }
    }
  }
  
  console.log('Image optimization complete!');
}

// Run the optimization
optimizeImages().catch(console.error); 