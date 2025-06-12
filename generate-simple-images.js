const fs = require('fs');
const path = require('path');

// Configuration
const outputDir = path.join(__dirname, 'public', 'images', 'case-studies');
const width = 800;
const height = 400;

// Color themes for different categories
const colorThemes = {
  web: {
    primary: '#8b5cf6',
    secondary: '#6366f1', 
    accent: '#a855f7',
    bg: '#1e1e2e'
  },
  mobile: {
    primary: '#06b6d4',
    secondary: '#0ea5e9',
    accent: '#3b82f6',
    bg: '#1e293b'
  },
  software: {
    primary: '#f97316',
    secondary: '#f59e0b',
    accent: '#eab308',
    bg: '#292524'
  },
  iot: {
    primary: '#22c55e',
    secondary: '#10b981',
    accent: '#14b8a6',
    bg: '#1e2b20'
  }
};

// Define case studies
const caseStudies = [
  {
    name: 'ecommerce',
    title: 'E-Commerce Platform with AI Recommendations',
    category: 'web',
    patterns: ['grid', 'circles', 'dots'],
    icons: ['cart', 'ai', 'tag']
  },
  {
    name: 'healthcare',
    title: 'Healthcare Patient Portal & Telemedicine',
    category: 'web',
    patterns: ['wave', 'pulse', 'cross'],
    icons: ['health', 'video', 'shield']
  },
  {
    name: 'realestate',
    title: 'Real Estate Virtual Tour Platform',
    category: 'web',
    patterns: ['3d', 'room', 'perspective'],
    icons: ['home', 'camera', 'vr']
  },
  {
    name: 'lms',
    title: 'Learning Management System for Universities',
    category: 'web',
    patterns: ['books', 'chart', 'calendar'],
    icons: ['graduation', 'video', 'chart']
  },
  {
    name: 'fitness',
    title: 'Fitness Tracking & Social Workout App',
    category: 'mobile',
    patterns: ['wave', 'pulse', 'stat'],
    icons: ['heart', 'runner', 'chart']
  },
  {
    name: 'smarthome',
    title: 'Smart Home Automation Control App',
    category: 'mobile',
    patterns: ['home', 'connect', 'grid'],
    icons: ['home', 'light', 'thermometer']
  },
  {
    name: 'fooddelivery',
    title: 'Food Delivery & Restaurant Discovery App',
    category: 'mobile',
    patterns: ['map', 'route', 'location'],
    icons: ['food', 'car', 'pin']
  },
  {
    name: 'fintech',
    title: 'Personal Finance & Investment Tracker',
    category: 'mobile',
    patterns: ['chart', 'wave', 'grid'],
    icons: ['money', 'chart', 'shield']
  },
  {
    name: 'erp',
    title: 'Enterprise Resource Planning (ERP) System',
    category: 'software',
    patterns: ['connect', 'grid', 'flow'],
    icons: ['database', 'chart', 'cog']
  },
  {
    name: 'support',
    title: 'AI-Powered Customer Support Platform',
    category: 'software',
    patterns: ['bubble', 'wave', 'grid'],
    icons: ['chat', 'ai', 'support']
  },
  {
    name: 'supplychain',
    title: 'Supply Chain Visibility & Analytics Platform',
    category: 'software',
    patterns: ['map', 'flow', 'connect'],
    icons: ['truck', 'box', 'chart']
  },
  {
    name: 'hr',
    title: 'HR Management & Recruitment Platform',
    category: 'software',
    patterns: ['connect', 'profile', 'grid'],
    icons: ['people', 'document', 'chart']
  },
  {
    name: 'smartcity',
    title: 'Smart City Traffic Management System',
    category: 'iot',
    patterns: ['map', 'grid', 'flow'],
    icons: ['traffic', 'building', 'sensor']
  },
  {
    name: 'industrial',
    title: 'Industrial Equipment Monitoring System',
    category: 'iot',
    patterns: ['wave', 'grid', 'pulse'],
    icons: ['factory', 'gauge', 'alert']
  },
  {
    name: 'agriculture',
    title: 'Smart Agriculture Monitoring Solution',
    category: 'iot',
    patterns: ['field', 'grid', 'wave'],
    icons: ['plant', 'water', 'sun']
  },
  {
    name: 'smartgrid',
    title: 'Smart Energy Management Grid System',
    category: 'iot',
    patterns: ['grid', 'wave', 'connect'],
    icons: ['energy', 'house', 'chart']
  }
];

// Function to create a simple SVG placeholder with gradients based on category
function createSVGPlaceholder(caseStudy) {
  const colors = colorThemes[caseStudy.category] || colorThemes.web;
  const pattern = caseStudy.patterns[0] || 'grid';
  
  // SVG opening tag with viewBox
  let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
  
  // Define gradients
  svg += `
    <defs>
      <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${colors.primary}" />
        <stop offset="100%" stop-color="${colors.secondary}" />
      </linearGradient>
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="rgba(0,0,0,0)" />
        <stop offset="100%" stop-color="${colors.bg}" />
      </radialGradient>
    </defs>`;
  
  // Background
  svg += `<rect width="${width}" height="${height}" fill="${colors.bg}" />`;
  
  // Add pattern based on type
  switch (pattern) {
    case 'grid':
      // Grid pattern
      svg += `<g stroke="${colors.accent}" stroke-width="1" opacity="0.1">`;
      for (let x = 0; x <= width; x += 30) {
        svg += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" />`;
      }
      for (let y = 0; y <= height; y += 30) {
        svg += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" />`;
      }
      svg += '</g>';
      break;
      
    case 'wave':
      // Wave pattern
      svg += `<g stroke="${colors.accent}" stroke-width="2" opacity="0.1">`;
      for (let waveOffset = 0; waveOffset < height; waveOffset += 50) {
        let path = `<path d="M0,${waveOffset}`;
        for (let x = 0; x < width; x += 20) {
          const y = waveOffset + Math.sin(x * 0.01) * 30;
          path += ` L${x},${y}`;
        }
        path += `" fill="none" />`;
        svg += path;
      }
      svg += '</g>';
      break;
      
    case 'circles':
      // Circle pattern
      svg += `<g opacity="0.1">`;
      for (let i = 0; i < 20; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const radius = 20 + Math.floor(Math.random() * 60);
        const color = i % 2 === 0 ? colors.primary : colors.secondary;
        
        svg += `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" />`;
      }
      svg += '</g>';
      break;
      
    case '3d':
      // 3D grid pattern
      svg += `<g stroke="${colors.accent}" stroke-width="1" opacity="0.15">`;
      
      // Vanishing point
      const vpX = width / 2;
      const vpY = height / 2;
      
      // Draw horizontal lines
      const lineCount = 10;
      const spacing = height / lineCount;
      
      for (let i = 0; i <= lineCount; i++) {
        const y = i * spacing;
        
        svg += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" />`;
        svg += `<line x1="0" y1="${y}" x2="${vpX}" y2="${vpY}" />`;
        svg += `<line x1="${width}" y1="${y}" x2="${vpX}" y2="${vpY}" />`;
      }
      
      // Draw vertical lines
      const columnCount = 10;
      const columnWidth = width / columnCount;
      
      for (let i = 0; i <= columnCount; i++) {
        const x = i * columnWidth;
        svg += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" />`;
      }
      
      svg += '</g>';
      break;
      
    default:
      // Default gradient background
      svg += `<rect width="${width}" height="${height}" fill="url(#bg-gradient)" opacity="0.3" />`;
  }
  
  // Add category icon in the middle
  const iconSize = 80;
  const iconX = width / 2 - iconSize / 2;
  const iconY = height / 2 - iconSize / 2;
  
  svg += `<circle cx="${width/2}" cy="${height/3}" r="${iconSize/2}" fill="${colors.accent}" opacity="0.8" />`;
  
  // Add vignette effect
  svg += `<rect width="${width}" height="${height}" fill="url(#vignette)" opacity="0.5" />`;
  
  // Add category name
  svg += `
    <text x="${width/2}" y="${height - 100}" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">
      ${caseStudy.title}
    </text>
  `;
  
  // Add divider line
  svg += `
    <line x1="${width/2 - 100}" y1="${height - 70}" x2="${width/2 + 100}" y2="${height - 70}" 
          stroke="${colors.accent}" stroke-width="3" />
  `;
  
  // Add category tag
  svg += `
    <rect x="${width/2 - 60}" y="${height - 50}" width="120" height="30" rx="15" 
          fill="${colors.accent}" opacity="0.8" />
    <text x="${width/2}" y="${height - 30}" font-family="Arial" font-size="14" 
          fill="white" text-anchor="middle">
      ${caseStudy.category.toUpperCase()}
    </text>
  `;
  
  // Close SVG
  svg += '</svg>';
  
  return svg;
}

// Function to save SVG as file
function saveSVGToFile(svg, filename) {
  fs.writeFileSync(filename, svg);
}

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate SVGs for each case study
console.log('Generating SVG placeholder images for case studies...');

for (const caseStudy of caseStudies) {
  const svg = createSVGPlaceholder(caseStudy);
  const filePath = path.join(outputDir, `case-study-${caseStudy.name}.svg`);
  
  saveSVGToFile(svg, filePath);
  console.log(`Created: ${filePath}`);
}

console.log('All SVG placeholder images generated successfully!');
