const fs = require('fs');
const path = require('path');

// Configuration
const componentsDir = path.join(__dirname, 'src', 'components');
const caseStudiesFile = path.join(componentsDir, 'CaseStudies', 'CaseStudies.jsx');
const imagesDir = path.join(__dirname, 'public', 'images', 'case-studies');

// Check for both SVG and JPG files
function checkImageFiles() {
  const files = fs.readdirSync(imagesDir);
  
  // Check for SVG files
  const svgFiles = files.filter(file => file.endsWith('.svg') && file.startsWith('case-study-'));
  
  // Check for JPG files
  const jpgFiles = files.filter(file => file.endsWith('.jpg') && file.startsWith('case-study-'));
  
  // Check for PNG files
  const pngFiles = files.filter(file => file.endsWith('.png') && file.startsWith('case-study-'));
  
  console.log(`Found ${svgFiles.length} SVG files`);
  console.log(`Found ${jpgFiles.length} JPG files`);
  console.log(`Found ${pngFiles.length} PNG files`);
  
  return {
    svg: svgFiles,
    jpg: jpgFiles,
    png: pngFiles
  };
}

// Update image paths in the component
function updateImagePaths(extension) {
  if (!['svg', 'jpg', 'png'].includes(extension)) {
    console.error('Error: extension must be "svg", "jpg", or "png"');
    return;
  }
  
  // Read the component file
  const content = fs.readFileSync(caseStudiesFile, 'utf8');
  
  // Replace SVG extensions with the provided extension
  const updatedContent = content.replace(
    /image: '\/images\/case-studies\/case-study-(.+?)\.(svg|jpg|png)'/g, 
    `image: '/images/case-studies/case-study-$1.${extension}'`
  );
  
  // Write back to the file
  fs.writeFileSync(caseStudiesFile, updatedContent);
  
  console.log(`\nUpdated all image paths to use .${extension} extension in CaseStudies.jsx`);
}

// Main execution
const files = checkImageFiles();

// Check if enough JPG files exist to switch to them
if (files.jpg.length >= 16) {
  console.log('\nEnough JPG files found to use them instead of SVGs');
  console.log('Would you like to update all image paths to use .jpg extension? (y/n)');
  // Since we can't get direct input in this script execution, just provide instructions
  console.log('\nTo update image paths to JPG:');
  console.log('node update-image-paths.js jpg');
} else if (files.png.length >= 16) {
  console.log('\nEnough PNG files found to use them instead of SVGs');
  console.log('\nTo update image paths to PNG:');
  console.log('node update-image-paths.js png');
} else {
  console.log('\nNot enough JPG or PNG files found. Keep using SVG placeholders for now.');
  console.log('\nAfter generating AI images, run:');
  console.log('node update-image-paths.js jpg');
  console.log('  or');
  console.log('node update-image-paths.js png');
}

// If an extension argument is provided, update the paths
const args = process.argv.slice(2);
if (args.length > 0) {
  const extension = args[0].toLowerCase();
  if (['svg', 'jpg', 'png'].includes(extension)) {
    updateImagePaths(extension);
  } else {
    console.error(`Error: Unknown extension "${extension}". Use "svg", "jpg", or "png".`);
  }
}
