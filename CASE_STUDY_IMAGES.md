# Case Study Image Documentation

## Overview
This document explains the image system used for the case studies on the 4OneTwodev portfolio website. The current implementation uses dynamically generated SVG images that match the color themes of each case study category.

## Verification and Management Tools

We've created several scripts to help manage case study images:

1. `verify-images.js` - Checks that all SVG images are present and fixes any missing files
2. `update-image-paths.js` - Updates file extensions in the code when switching between SVG and JPG/PNG
3. `prepare-ai-image-prompts.js` - Generates tailored prompts for AI image generation tools

Run the verification tool if images aren't displaying properly:
```
node verify-images.js
```

## Image Structure
- All case study images are stored in: `/public/images/case-studies/`
- Images follow the naming convention: `case-study-[name].svg` where `[name]` is the identifier of the case study (e.g., ecommerce, healthcare, etc.)
- Each image has a matching description file: `case-study-[name].txt` which contains information about what a real image for this case study should ideally show

## Current Implementation
The site currently uses SVG placeholder images generated with the `generate-simple-images.js` script. These SVG images:
- Use color themes based on case study category (web, mobile, software, IoT)
- Include patterns and visual elements relevant to each case study
- Employ responsive design that works well with the website layout
- Include the title and category labels

## How to Replace with Real Images

### Option 1: Replace Individual SVGs
To replace any placeholder with a real image:

1. Create a new image file (JPG or PNG recommended) with dimensions 800x400px
2. Name it with the same convention: `case-study-[name].jpg` or `.png`
3. Place it in the `/public/images/case-studies/` directory
4. Update the reference in `CaseStudies.jsx` to point to the new file extension:
   ```jsx
   image: '/images/case-studies/case-study-[name].jpg',
   ```

### Option 2: Use AI-Generated Images

There are two approaches for using AI-generated images:

#### Using External AI Tools (Recommended)

1. Use the AI prompts provided in the `/public/images/case-studies/ai-prompt-*.txt` files with an AI image generation tool (like DALL-E, Midjourney, or Stable Diffusion)

2. Save the generated images as JPG files with dimensions 800x400px in the `/public/images/case-studies/` directory using the naming convention `case-study-[name].jpg`

3. Run the update script to automatically change all image references:
   ```
   node update-image-paths.js jpg
   ```

#### Using Canvas API (Alternative)

If you prefer programmatically generated images:

1. Install the required dependencies:
   ```
   npm install canvas
   ```

2. Run the full image generator script:
   ```
   node generate-realistic-images.js
   ```

3. This will produce JPG files with more sophisticated graphics for each case study

### Option 3: Professional Photography

For the best results, consider:
1. Hiring a professional photographer to create custom images for each case study
2. Using high-quality stock photos that represent each project domain
3. Creating custom 3D renderings or illustrations that showcase the technology concepts

## Technical Details

### Image Dimensions
- **Optimal dimensions**: 800x400px (2:1 ratio)
- **Format**: SVG (current), JPG or PNG (recommended for photos)

### Case Study Card Implementation
The case study cards use:
- CSS background images for the visuals
- Flex layout for responsive design
- Gradient overlays for text readability

### Customization
The color themes for each category can be adjusted in:
- `generate-simple-images.js` (for regenerating placeholders)
- `CaseStudies.css` (for styling the cards themselves)

## Best Practices
1. Use images that clearly represent the project's industry or solution
2. Maintain consistent quality and style across all case study images
3. Ensure good contrast for text overlays
4. Optimize all images for web use (compress JPGs/PNGs)
5. Consider accessibility when choosing colors and contrast levels
