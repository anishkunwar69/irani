const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories to scan for images
const directories = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/images'),
  path.join(__dirname, '../public/showcase'),
  path.join(__dirname, '../public/branches'),
  path.join(__dirname, '../public/selected'),
  path.join(__dirname, '../public/hd-imgs'),
  path.join(__dirname, '../public/seo'),
];

// Image formats to optimize
const imageFormats = ['.jpg', '.jpeg', '.png'];

// Function to optimize an image
async function optimizeImage(filePath) {
  try {
    const fileInfo = path.parse(filePath);
    const optimizedPath = path.join(fileInfo.dir, `${fileInfo.name}-optimized${fileInfo.ext}`);
    
    // Skip already optimized images
    if (filePath.includes('-optimized')) {
      return;
    }
    
    console.log(`Optimizing: ${filePath}`);
    
    let pipeline = sharp(filePath);
    
    // Get image metadata
    const metadata = await pipeline.metadata();
    
    // Resize if image is very large
    if (metadata.width > 1920) {
      pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
    }
    
    if (fileInfo.ext.toLowerCase() === '.jpg' || fileInfo.ext.toLowerCase() === '.jpeg') {
      // Optimize JPEG images
      await pipeline
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(optimizedPath);
    } else if (fileInfo.ext.toLowerCase() === '.png') {
      // Optimize PNG images - also create WebP version
      await pipeline
        .png({ quality: 80, progressive: true, compressionLevel: 9 })
        .toFile(optimizedPath);
      
      // Create WebP version
      await pipeline
        .webp({ quality: 80 })
        .toFile(path.join(fileInfo.dir, `${fileInfo.name}.webp`));
    }
    
    // Get the stats of both files
    const originalStats = fs.statSync(filePath);
    const optimizedStats = fs.statSync(optimizedPath);
    
    const savingsPercent = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(2);
    
    console.log(`Optimized: ${filePath}`);
    console.log(`Original: ${(originalStats.size / 1024).toFixed(2)} KB`);
    console.log(`Optimized: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`Savings: ${savingsPercent}%`);
    console.log('-----------------------------------');
    
    // Replace original with optimized if successful and there are savings
    if (optimizedStats.size < originalStats.size) {
      fs.unlinkSync(filePath);
      fs.renameSync(optimizedPath, filePath);
      console.log(`Replaced original with optimized version: ${filePath}`);
    } else {
      fs.unlinkSync(optimizedPath);
      console.log(`Kept original (already optimized): ${filePath}`);
    }
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
  }
}

// Function to recursively find and optimize images
async function optimizeImagesInDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await optimizeImagesInDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageFormats.includes(ext)) {
          await optimizeImage(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Main function to run the optimization
async function main() {
  console.log('Starting image optimization...');
  
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      await optimizeImagesInDirectory(dir);
    } else {
      console.log(`Directory does not exist: ${dir}`);
    }
  }
  
  console.log('Image optimization complete!');
}

main().catch(console.error); 