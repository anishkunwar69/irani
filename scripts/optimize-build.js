/**
 * Comprehensive build optimization script
 * Performs all performance optimizations before building for production
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Define paths
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

/**
 * Run a command and log its output
 * @param {string} command - The command to run
 * @param {string} description - Description of what the command does
 */
function runCommand(command, description) {
  console.log(`\n${colors.bright}${colors.cyan}► ${description}${colors.reset}\n`);
  try {
    execSync(command, { stdio: 'inherit', cwd: ROOT_DIR });
    console.log(`${colors.green}✓ Success${colors.reset}\n`);
    return true;
  } catch (error) {
    console.error(`${colors.yellow}⚠ Warning: ${error.message}${colors.reset}\n`);
    return false;
  }
}

/**
 * Main optimization function
 */
async function optimizeBuild() {
  console.log(`\n${colors.bright}${colors.blue}┌───────────────────────────────┐${colors.reset}`);
  console.log(`${colors.bright}${colors.blue}│ OPTIMIZING PRODUCTION BUILD   │${colors.reset}`);
  console.log(`${colors.bright}${colors.blue}└───────────────────────────────┘${colors.reset}\n`);
  
  // Step 1: Install dependencies if needed
  runCommand('npm install --no-fund --no-audit', 'Installing dependencies...');
  
  // Step 2: Clean previous builds
  runCommand('rm -rf .next', 'Cleaning previous builds...');
  
  // Step 3: Lint code
  runCommand('npm run lint', 'Linting code...');
  
  // Step 4: Optimize images
  runCommand('npm run optimize-images', 'Optimizing images...');
  
  // Step 5: Copy optimized images to their locations if needed
  if (fs.existsSync(OPTIMIZED_DIR)) {
    console.log(`\n${colors.bright}${colors.cyan}► Copying optimized images to public directory...${colors.reset}\n`);
    
    try {
      const files = fs.readdirSync(OPTIMIZED_DIR);
      for (const file of files) {
        if (file.endsWith('.webp') || file.endsWith('.avif')) {
          const source = path.join(OPTIMIZED_DIR, file);
          const destination = path.join(PUBLIC_DIR, file);
          fs.copyFileSync(source, destination);
          console.log(`  Copied: ${file}`);
        }
      }
      console.log(`${colors.green}✓ Success${colors.reset}\n`);
    } catch (error) {
      console.error(`${colors.yellow}⚠ Warning: ${error.message}${colors.reset}\n`);
    }
  }
  
  // Step 6: Build for production with environment variables
  console.log(`\n${colors.bright}${colors.cyan}► Building for production...${colors.reset}\n`);
  
  try {
    // Set environment variables for production
    const env = {
      ...process.env,
      NODE_ENV: 'production',
      NEXT_TELEMETRY_DISABLED: '1',
    };
    
    execSync('npm run build', { 
      stdio: 'inherit', 
      cwd: ROOT_DIR,
      env 
    });
    
    console.log(`${colors.green}✓ Build successful${colors.reset}\n`);
  } catch (error) {
    console.error(`${colors.yellow}⚠ Error during build: ${error.message}${colors.reset}\n`);
    process.exit(1);
  }
  
  console.log(`\n${colors.bright}${colors.blue}┌───────────────────────────────┐${colors.reset}`);
  console.log(`${colors.bright}${colors.blue}│ OPTIMIZATION COMPLETE         │${colors.reset}`);
  console.log(`${colors.bright}${colors.blue}└───────────────────────────────┘${colors.reset}\n`);
}

// Run the optimization
optimizeBuild().catch(console.error); 