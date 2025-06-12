const fs = require('fs');
const path = require('path');

// Configuration
const caseStudyDir = path.join(__dirname, 'public', 'images', 'case-studies');

// Color themes for different categories
const colorThemes = {
  web: {
    name: 'Purple and blue',
    colors: ['#8b5cf6', '#6366f1', '#a855f7'],
  },
  mobile: {
    name: 'Blue and cyan',
    colors: ['#06b6d4', '#0ea5e9', '#3b82f6'],
  },
  software: {
    name: 'Orange and amber',
    colors: ['#f97316', '#f59e0b', '#eab308'],
  },
  iot: {
    name: 'Green and teal',
    colors: ['#22c55e', '#10b981', '#14b8a6'],
  }
};

// Define case studies and their details
const caseStudies = [
  {
    name: 'ecommerce',
    title: 'E-Commerce Platform with AI Recommendations',
    category: 'web',
    keywords: ['e-commerce', 'product recommendations', 'online shopping', 'retail', 'AI'],
    tech: ['Next.js', 'React', 'MongoDB', 'AI personalization', 'payment processing']
  },
  {
    name: 'healthcare',
    title: 'Healthcare Patient Portal & Telemedicine',
    category: 'web',
    keywords: ['healthcare', 'patient portal', 'telemedicine', 'medical records', 'video consultation'],
    tech: ['React', 'TypeScript', 'PostgreSQL', 'WebRTC', 'secure messaging']
  },
  {
    name: 'realestate',
    title: 'Real Estate Virtual Tour Platform',
    category: 'web',
    keywords: ['real estate', 'virtual tour', '3D walkthrough', 'property listing', 'panoramic view'],
    tech: ['Three.js', 'WebGL', 'React', 'panoramic imaging', '3D rendering']
  },
  {
    name: 'lms',
    title: 'Learning Management System for Universities',
    category: 'web',
    keywords: ['education', 'learning management', 'courses', 'assignments', 'university'],
    tech: ['React', 'Node.js', 'MongoDB', 'video streaming', 'interactive content']
  },
  {
    name: 'fitness',
    title: 'Fitness Tracking & Social Workout App',
    category: 'mobile',
    keywords: ['fitness', 'workout', 'tracking', 'health metrics', 'social features'],
    tech: ['React Native', 'Firebase', 'health APIs', 'social sharing', 'activity tracking']
  },
  {
    name: 'smarthome',
    title: 'Smart Home Automation Control App',
    category: 'mobile',
    keywords: ['smart home', 'home automation', 'IoT control', 'devices management', 'scenes'],
    tech: ['React Native', 'MQTT', 'Bluetooth LE', 'IoT protocols', 'device control']
  },
  {
    name: 'fooddelivery',
    title: 'Food Delivery & Restaurant Discovery App',
    category: 'mobile',
    keywords: ['food delivery', 'restaurants', 'ordering', 'menus', 'map navigation'],
    tech: ['Flutter', 'Firebase', 'location services', 'payment integration', 'real-time tracking']
  },
  {
    name: 'fintech',
    title: 'Personal Finance & Investment Tracker',
    category: 'mobile',
    keywords: ['finance', 'investment', 'banking', 'budget tracking', 'portfolio management'],
    tech: ['React Native', 'secure APIs', 'charts', 'financial data processing', 'encryption']
  },
  {
    name: 'erp',
    title: 'Enterprise Resource Planning (ERP) System',
    category: 'software',
    keywords: ['ERP', 'business management', 'resource planning', 'enterprise', 'dashboards'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'data visualization', 'workflow automation']
  },
  {
    name: 'support',
    title: 'AI-Powered Customer Support Platform',
    category: 'software',
    keywords: ['customer support', 'AI chatbot', 'ticket management', 'self-service', 'knowledge base'],
    tech: ['React', 'Node.js', 'NLP models', 'machine learning', 'real-time communications']
  },
  {
    name: 'supplychain',
    title: 'Supply Chain Visibility & Analytics Platform',
    category: 'software',
    keywords: ['supply chain', 'logistics', 'inventory', 'analytics', 'tracking'],
    tech: ['React', 'Python', 'data visualization', 'predictive analytics', 'IoT integration']
  },
  {
    name: 'hr',
    title: 'HR Management & Recruitment Platform',
    category: 'software',
    keywords: ['HR', 'recruitment', 'talent management', 'employee data', 'onboarding'],
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'document processing', 'workflow automation']
  },
  {
    name: 'smartcity',
    title: 'Smart City Traffic Management System',
    category: 'iot',
    keywords: ['smart city', 'traffic management', 'urban planning', 'sensors', 'real-time monitoring'],
    tech: ['IoT devices', 'data analytics', 'real-time processing', 'dashboard', 'traffic optimization']
  },
  {
    name: 'industrial',
    title: 'Industrial Equipment Monitoring System',
    category: 'iot',
    keywords: ['industrial IoT', 'equipment monitoring', 'predictive maintenance', 'sensors', 'factory'],
    tech: ['IoT sensors', 'data processing', 'machine learning', 'alert systems', 'dashboard']
  },
  {
    name: 'agriculture',
    title: 'Smart Agriculture Monitoring Solution',
    category: 'iot',
    keywords: ['agriculture', 'farming', 'crop monitoring', 'irrigation', 'soil sensors'],
    tech: ['IoT sensors', 'data analytics', 'weather integration', 'mobile app', 'automation']
  },
  {
    name: 'smartgrid',
    title: 'Smart Energy Management Grid System',
    category: 'iot',
    keywords: ['energy', 'smart grid', 'power management', 'sustainability', 'monitoring'],
    tech: ['IoT devices', 'data analytics', 'energy optimization', 'dashboard', 'renewable integration']
  }
];

// Create AI image generation prompts
try {
  // Ensure the directory exists
  if (!fs.existsSync(caseStudyDir)) {
    fs.mkdirSync(caseStudyDir, { recursive: true });
    console.log(`Created directory: ${caseStudyDir}`);
  }

  for (const caseStudy of caseStudies) {
    const theme = colorThemes[caseStudy.category];
    
    // Create a comprehensive prompt for AI image generation
    const prompt = `
Professional ${caseStudy.category} application interface for ${caseStudy.title.toLowerCase()},
modern UI/UX design with ${caseStudy.tech.slice(0, 3).join(', ')} elements.
High-quality business presentation image with ${theme.name.toLowerCase()} color palette.
Key visual elements: ${caseStudy.keywords.join(', ')}.
Photorealistic, high-detail render, suitable for a portfolio website.
`.trim();

    // Generate a text file with the prompt for AI image generation
    const outputPath = path.join(caseStudyDir, `ai-prompt-${caseStudy.name}.txt`);
    fs.writeFileSync(outputPath, prompt);
    console.log(`Created AI image prompt for: ${caseStudy.name}`);
  }
} catch (error) {
  console.error('Error generating prompts:', error.message);
}

console.log('\nAll AI image prompts generated successfully!');
console.log('\nNext steps:');
console.log('1. Use these prompts with an AI image generation service like DALL-E, Midjourney, or Stable Diffusion');
console.log('2. Save the generated images as JPGs with dimensions 800x400px');
console.log('3. Name the files using the pattern: case-study-[name].jpg');
console.log('4. Place the images in the public/images/case-studies directory');
console.log('5. Update the references in CaseStudies.jsx if needed\n');
