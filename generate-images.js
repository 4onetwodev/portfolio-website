const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
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

// Define case studies and their details
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

// Helper function to draw pattern
function drawPattern(ctx, pattern, colors) {
  const { width, height } = ctx.canvas;

  // Base background
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, width, height);
  
  switch (pattern) {
    case 'grid':
      // Draw grid pattern
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;
      
      const gridSize = 30;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      break;
      
    case 'wave':
      // Draw wave pattern
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.1;
      
      const waveCount = 5;
      const amplitude = 30;
      const frequency = 0.01;
      
      for (let waveOffset = 0; waveOffset < height; waveOffset += 50) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 2) {
          const y = waveOffset + Math.sin(x * frequency) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      break;
      
    case 'circles':
      // Draw circles pattern
      ctx.globalAlpha = 0.1;
      
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = 20 + Math.random() * 60;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? colors.primary : colors.secondary;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      break;
      
    case 'dots':
      // Draw dot pattern
      ctx.globalAlpha = 0.2;
      
      const dotSpacing = 40;
      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          const dotRadius = Math.random() * 3 + 1;
          const offsetX = Math.random() * 10 - 5;
          const offsetY = Math.random() * 10 - 5;
          
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = Math.random() > 0.5 ? colors.primary : colors.secondary;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      break;
      
    case '3d':
      // Draw 3D perspective grid
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.15;
      
      // Vanishing point
      const vpX = width / 2;
      const vpY = height / 2;
      
      // Draw horizontal lines
      const lineCount = 10;
      const spacing = height / lineCount;
      
      for (let i = 0; i <= lineCount; i++) {
        const y = i * spacing;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        
        // Perspective lines
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(vpX, vpY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(width, y);
        ctx.lineTo(vpX, vpY);
        ctx.stroke();
      }
      
      // Draw vertical lines
      const columnCount = 10;
      const columnWidth = width / columnCount;
      
      for (let i = 0; i <= columnCount; i++) {
        const x = i * columnWidth;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      ctx.globalAlpha = 1;
      break;
      
    case 'flow':
      // Draw flowing lines
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;
      
      const lineCount2 = 30;
      for (let i = 0; i < lineCount2; i++) {
        const startY = Math.random() * height;
        ctx.beginPath();
        ctx.moveTo(0, startY);
        
        let x = 0;
        let y = startY;
        
        while (x < width) {
          x += Math.random() * 50 + 50;
          y += (Math.random() - 0.5) * 100;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = i % 2 === 0 ? colors.primary : colors.secondary;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      break;
      
    case 'connect':
      // Draw connection dots pattern
      ctx.globalAlpha = 0.15;
      
      const points = [];
      const pointCount = 20;
      
      // Create random points
      for (let i = 0; i < pointCount; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 5 + 3
        });
      }
      
      // Draw connections between nearby points
      const connectionDistance = 150;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < pointCount; i++) {
        for (let j = i + 1; j < pointCount; j++) {
          const p1 = points[i];
          const p2 = points[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors.accent;
            ctx.stroke();
          }
        }
      }
      
      // Draw points
      for (const point of points) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.primary;
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
      break;
      
    default:
      // Default pattern - diagonal gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(1, colors.secondary);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
  }
}

// Function to draw simple icons
function drawIcon(ctx, icon, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = size / 10;
  
  switch (icon) {
    case 'cart':
      // Shopping cart icon
      ctx.beginPath();
      ctx.rect(x - size/3, y - size/4, size/1.5, size/2);
      ctx.stroke();
      
      // Wheels
      ctx.beginPath();
      ctx.arc(x - size/6, y + size/4, size/8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(x + size/6, y + size/4, size/8, 0, Math.PI * 2);
      ctx.fill();
      
      // Handle
      ctx.beginPath();
      ctx.moveTo(x - size/3, y - size/8);
      ctx.lineTo(x - size/2, y - size/8);
      ctx.stroke();
      break;
      
    case 'ai':
      // AI icon
      ctx.beginPath();
      ctx.rect(x - size/3, y - size/3, size/1.5, size/1.5);
      ctx.stroke();
      
      // CPU connections
      for (let i = 0; i < 4; i++) {
        const angle = i * Math.PI/2;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(angle) * size/3, y + Math.sin(angle) * size/3);
        ctx.lineTo(x + Math.cos(angle) * size/2, y + Math.sin(angle) * size/2);
        ctx.stroke();
      }
      
      // Center circle
      ctx.beginPath();
      ctx.arc(x, y, size/6, 0, Math.PI * 2);
      ctx.fill();
      break;
      
    case 'chart':
      // Chart icon
      ctx.beginPath();
      ctx.moveTo(x - size/3, y + size/3);
      ctx.lineTo(x - size/3, y - size/3);
      ctx.lineTo(x + size/3, y - size/3);
      ctx.stroke();
      
      // Bars
      ctx.fillRect(x - size/4, y, size/6, size/3);
      ctx.fillRect(x, y - size/6, size/6, size/2);
      ctx.fillRect(x + size/4, y + size/6, size/6, size/6);
      break;
      
    case 'energy':
      // Energy/lightning bolt icon
      ctx.beginPath();
      ctx.moveTo(x, y - size/2);
      ctx.lineTo(x - size/4, y);
      ctx.lineTo(x, y);
      ctx.lineTo(x - size/5, y + size/2);
      ctx.lineTo(x + size/4, y - size/6);
      ctx.lineTo(x, y - size/6);
      ctx.closePath();
      ctx.fill();
      break;
      
    case 'factory':
      // Factory icon
      ctx.beginPath();
      ctx.moveTo(x - size/2, y + size/3);
      ctx.lineTo(x - size/2, y - size/6);
      ctx.lineTo(x - size/4, y - size/3);
      ctx.lineTo(x + size/4, y - size/3);
      ctx.lineTo(x + size/2, y - size/6);
      ctx.lineTo(x + size/2, y + size/3);
      ctx.closePath();
      ctx.stroke();
      
      // Chimney
      ctx.fillRect(x - size/4, y - size/2, size/6, size/5);
      
      // Windows
      ctx.fillRect(x - size/3, y - size/6, size/6, size/6);
      ctx.fillRect(x + size/6, y - size/6, size/6, size/6);
      break;
      
    case 'home':
      // Home icon
      ctx.beginPath();
      ctx.moveTo(x, y - size/2);
      ctx.lineTo(x - size/2, y);
      ctx.lineTo(x + size/2, y);
      ctx.closePath();
      ctx.fill();
      
      ctx.fillRect(x - size/3, y, size/1.5, size/3);
      
      // Door
      ctx.beginPath();
      ctx.rect(x - size/8, y + size/8, size/4, size/4);
      ctx.stroke();
      break;
      
    default:
      // Default icon - circle
      ctx.beginPath();
      ctx.arc(x, y, size/3, 0, Math.PI * 2);
      ctx.fill();
  }
}

// Main function to generate all images
async function generateImages() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Generate an image for each case study
  for (const caseStudy of caseStudies) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Get color theme for the category
    const colors = colorThemes[caseStudy.category] || colorThemes.web;
    
    // Draw background pattern
    const pattern = caseStudy.patterns[0] || 'grid';
    drawPattern(ctx, pattern, colors);
    
    // Draw gradient overlay
    ctx.globalAlpha = 0.5;
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width);
    gradient.addColorStop(0, 'transparent');
    gradient.addColorStop(1, colors.bg);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Draw title text
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(caseStudy.title, width/2, height - 50);
    
    // Draw a decorative line
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width/2 - 100, height - 70);
    ctx.lineTo(width/2 + 100, height - 70);
    ctx.stroke();
    
    // Draw some icons based on the category
    if (caseStudy.icons && caseStudy.icons.length > 0) {
      // First icon - top left
      drawIcon(ctx, caseStudy.icons[0], width/4, height/3, 80, colors.accent);
      
      // Second icon - bottom right
      if (caseStudy.icons.length > 1) {
        drawIcon(ctx, caseStudy.icons[1], width * 3/4, height/2, 60, colors.primary);
      }
      
      // Third icon - center
      if (caseStudy.icons.length > 2) {
        drawIcon(ctx, caseStudy.icons[2], width/2, height/4, 70, colors.secondary);
      }
    }
    
    // Save the image
    const filename = `case-study-${caseStudy.name}.jpg`;
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(path.join(outputDir, filename), buffer);
    
    console.log(`Generated image: ${filename}`);
  }
  
  console.log('All images generated successfully!');
}

// Execute the image generation
generateImages().catch(console.error);
