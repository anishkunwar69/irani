const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all CSS files in the .next directory
async function main() {
  console.log('Starting PurgeCSS to remove unused CSS from production build...');

  try {
    // Get all CSS files from .next/static directory
    const cssFiles = glob.sync('.next/static/**/*.css');
    
    if (cssFiles.length === 0) {
      console.log('No CSS files found in .next/static. Make sure you have built the project first.');
      return;
    }

    console.log(`Found ${cssFiles.length} CSS files to optimize.`);

    // For each CSS file, run PurgeCSS
    for (const cssFile of cssFiles) {
      const originalContent = fs.readFileSync(cssFile, 'utf8');
      const originalSize = Buffer.byteLength(originalContent, 'utf8');
      
      console.log(`Processing: ${cssFile} (${(originalSize / 1024).toFixed(2)} KB)`);

      // Run PurgeCSS
      const results = await new PurgeCSS().purge({
        content: [
          '.next/server/**/*.js', 
          '.next/static/**/*.js',
          'src/**/*.{js,jsx,ts,tsx}',
        ],
        css: [cssFile],
        safelist: {
          standard: [
            // Add any selectors that should never be removed
            /^page-transition/, 
            /^image-placeholder/,
            /^swiper-/, 
            /^leaflet-/,
            /^fa-/,
            /^animate__/,
          ],
          deep: [/swiper-.*/, /leaflet-.*/, /fa-.*/, /animate__.*/, /react-.*/, /next-.*/, /transition-.*/],
        },
        // Necessary to properly handle tailwind
        defaultExtractor: (content) => {
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
          const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
          return [...broadMatches, ...innerMatches];
        },
      });

      if (!results || results.length === 0) {
        console.log(`No output generated for ${cssFile}, skipping...`);
        continue;
      }

      // Write the result back to the file
      const purgedCSS = results[0].css;
      const purgedSize = Buffer.byteLength(purgedCSS, 'utf8');
      const savings = originalSize - purgedSize;
      const savingsPercentage = ((savings / originalSize) * 100).toFixed(2);

      fs.writeFileSync(cssFile, purgedCSS);
      
      console.log(`  Optimized: ${cssFile}`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
      console.log(`  Optimized: ${(purgedSize / 1024).toFixed(2)} KB`);
      console.log(`  Savings: ${savingsPercentage}% (${(savings / 1024).toFixed(2)} KB)`);
      console.log('----------------------------------');
    }

    console.log('PurgeCSS completed successfully!');
  } catch (error) {
    console.error('Error running PurgeCSS:', error);
  }
}

main(); 