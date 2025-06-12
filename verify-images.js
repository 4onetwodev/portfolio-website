const fs = require('fs');
const path = require('path');

// Configuration
const caseStudyDir = path.join(__dirname, 'public', 'images', 'case-studies');
const buildDir = path.join(__dirname, 'build', 'images', 'case-studies');

// Ensures both the public and build directories have the same SVG images
async function verifySvgImages() {
  console.log('Verifying SVG images in public and build directories...\n');

  try {
    // Check for caseStudyDir
    if (!fs.existsSync(caseStudyDir)) {
      console.log(`Creating directory: ${caseStudyDir}`);
      fs.mkdirSync(caseStudyDir, { recursive: true });
    }

    // Check if build directory exists
    const buildExists = fs.existsSync(buildDir);
    
    // Get SVG files from public
    let publicSvgFiles = [];
    try {
      publicSvgFiles = fs.readdirSync(caseStudyDir)
        .filter(file => file.endsWith('.svg'))
        .map(file => file);
    } catch (err) {
      console.log(`No SVG files found in public directory: ${err.message}`);
    }

    // Get SVG files from build if it exists
    let buildSvgFiles = [];
    if (buildExists) {
      try {
        buildSvgFiles = fs.readdirSync(buildDir)
          .filter(file => file.endsWith('.svg'))
          .map(file => file);
      } catch (err) {
        console.log(`No SVG files found in build directory: ${err.message}`);
      }
    }

    console.log(`SVG files in public directory: ${publicSvgFiles.length}`);
    if (buildExists) {
      console.log(`SVG files in build directory: ${buildSvgFiles.length}`);
    }

    // Check if public directory has all the SVG files
    if (publicSvgFiles.length < 16) {
      console.log('\n⚠️ Warning: Not all SVG files found in public directory');
      console.log('Running generate-simple-images.js to create missing SVGs...');
      
      // Run the generation script if the module is available
      try {
        const generateModule = require('./generate-simple-images.js');
        if (typeof generateModule === 'function') {
          await generateModule();
        } else {
          console.log('Running built-in SVG generation...');
          // If not a module, run as a separate process
          const { execSync } = require('child_process');
          execSync('node generate-simple-images.js', { stdio: 'inherit' });
        }
        console.log('SVG files generated successfully.');
      } catch (err) {
        console.error('Error running SVG generation:', err.message);
      }
    } else {
      console.log('\n✅ All SVG files present in public directory');
    }

    // If build directory exists but is missing SVGs, copy from public
    if (buildExists && buildSvgFiles.length < 16) {
      console.log('\n⚠️ Warning: Not all SVG files found in build directory');
      console.log('Copying SVG files from public to build directory...');

      publicSvgFiles.forEach(file => {
        const sourcePath = path.join(caseStudyDir, file);
        const destPath = path.join(buildDir, file);
        
        if (!fs.existsSync(destPath)) {
          try {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied ${file} to build directory`);
          } catch (err) {
            console.error(`Error copying ${file}: ${err.message}`);
          }
        }
      });
      
      console.log('Files copied successfully.');
    } else if (buildExists) {
      console.log('\n✅ All SVG files present in build directory');
    }

    console.log('\nVerification complete!');
  } catch (error) {
    console.error('\n❌ Error during verification:', error.message);
  }
}

// Run the verification
verifySvgImages();
