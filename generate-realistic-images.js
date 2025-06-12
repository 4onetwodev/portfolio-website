const fs = require('fs');
const path = require('path');

// Check if node-canvas is installed
try {
  const { createCanvas, loadImage } = require('canvas');
  generateImages(createCanvas, loadImage);
} catch (error) {
  console.error('Error: The "canvas" package is not installed.');
  console.error('Please install it by running: npm install canvas');
  console.error('If you encounter installation issues, consider using a pre-built canvas alternative.');
  process.exit(1);
}

// Main image generation function
function generateImages(createCanvas, loadImage) {
  // Configuration
  const outputDir = path.join(__dirname, 'public', 'images', 'case-studies');
  const width = 800;
  const height = 400;
  const mockupsDir = path.join(__dirname, 'src', 'assets', 'mockups');
  
  // Ensure directories exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Color themes for different categories
  const colorThemes = {
    web: {
      primary: '#8b5cf6',
      secondary: '#6366f1', 
      accent: '#a855f7',
      bg: '#1e1e2e',
      gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)'
    },
    mobile: {
      primary: '#06b6d4',
      secondary: '#0ea5e9',
      accent: '#3b82f6',
      bg: '#1e293b',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    software: {
      primary: '#f97316',
      secondary: '#f59e0b',
      accent: '#eab308',
      bg: '#292524',
      gradient: 'linear-gradient(135deg, #f97316, #eab308)'
    },
    iot: {
      primary: '#22c55e',
      secondary: '#10b981',
      accent: '#14b8a6',
      bg: '#1e2b20',
      gradient: 'linear-gradient(135deg, #22c55e, #14b8a6)'
    }
  };

  // Define case studies
  const caseStudies = [
    {
      name: 'ecommerce',
      title: 'E-Commerce Platform with AI Recommendations',
      category: 'web',
      uiType: 'dashboard',
      elements: ['product-cards', 'recommendations', 'cart']
    },
    {
      name: 'healthcare',
      title: 'Healthcare Patient Portal & Telemedicine',
      category: 'web',
      uiType: 'dashboard',
      elements: ['patient-profile', 'video-call', 'medical-records']
    },
    {
      name: 'realestate',
      title: 'Real Estate Virtual Tour Platform',
      category: 'web',
      uiType: 'gallery',
      elements: ['3d-view', 'property-details', 'tour-controls']
    },
    {
      name: 'lms',
      title: 'Learning Management System',
      category: 'web',
      uiType: 'dashboard',
      elements: ['courses', 'calendar', 'grades']
    },
    {
      name: 'fitness',
      title: 'Fitness Tracking App',
      category: 'mobile',
      uiType: 'mobile',
      elements: ['activity-tracker', 'stats', 'social-feed']
    },
    {
      name: 'smarthome',
      title: 'Smart Home Control App',
      category: 'mobile',
      uiType: 'mobile',
      elements: ['device-controls', 'rooms', 'automations']
    },
    {
      name: 'fooddelivery',
      title: 'Food Delivery App',
      category: 'mobile',
      uiType: 'mobile',
      elements: ['restaurants', 'menu', 'order-tracking']
    },
    {
      name: 'fintech',
      title: 'Finance & Investment Tracker',
      category: 'mobile',
      uiType: 'mobile',
      elements: ['charts', 'accounts', 'transactions']
    },
    {
      name: 'erp',
      title: 'Enterprise Resource Planning',
      category: 'software',
      uiType: 'dashboard',
      elements: ['analytics', 'modules', 'tables']
    },
    {
      name: 'support',
      title: 'AI Customer Support Platform',
      category: 'software',
      uiType: 'dashboard',
      elements: ['chat-interface', 'ticket-system', 'knowledge-base']
    },
    {
      name: 'supplychain',
      title: 'Supply Chain Analytics',
      category: 'software',
      uiType: 'dashboard',
      elements: ['map-view', 'inventory', 'analytics']
    },
    {
      name: 'hr',
      title: 'HR Management Platform',
      category: 'software',
      uiType: 'dashboard',
      elements: ['employee-profiles', 'recruitment', 'analytics']
    },
    {
      name: 'smartcity',
      title: 'Smart City Traffic Management',
      category: 'iot',
      uiType: 'dashboard',
      elements: ['map-view', 'traffic-data', 'sensor-feeds']
    },
    {
      name: 'industrial',
      title: 'Industrial Monitoring System',
      category: 'iot',
      uiType: 'dashboard',
      elements: ['equipment-status', 'alerts', 'metrics']
    },
    {
      name: 'agriculture',
      title: 'Smart Agriculture Solution',
      category: 'iot',
      uiType: 'dashboard',
      elements: ['field-view', 'sensor-data', 'weather']
    },
    {
      name: 'smartgrid',
      title: 'Energy Management System',
      category: 'iot',
      uiType: 'dashboard',
      elements: ['power-distribution', 'consumption', 'analytics']
    }
  ];

  // Base mockup images we'll draw (if they exist)
  const mockupImages = {
    'dashboard': 'dashboard-mockup.png',
    'mobile': 'mobile-mockup.png',
    'gallery': 'gallery-mockup.png',
    'default': 'default-mockup.png'
  };

  // Generate a realistic UI mockup for each case study
  async function generateMockupImages() {
    console.log('Generating realistic case study mockup images...');
    
    for (const caseStudy of caseStudies) {
      try {
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        const colors = colorThemes[caseStudy.category];
        
        // Fill background
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, width, height);
        
        // Draw gradient overlay for visual interest
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, `${colors.primary}33`); // 20% opacity
        gradient.addColorStop(1, `${colors.secondary}33`); // 20% opacity
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Draw a grid pattern in the background
        drawGridPattern(ctx, colors);
        
        // Try to load a mockup image
        const mockupType = caseStudy.uiType || 'default';
        const mockupFile = mockupImages[mockupType];
        
        try {
          if (fs.existsSync(path.join(mockupsDir, mockupFile))) {
            // Load and draw mockup image if exists
            const mockupImage = await loadImage(path.join(mockupsDir, mockupFile));
            ctx.drawImage(mockupImage, width/2 - mockupImage.width/2, height/2 - mockupImage.height/2);
          } else {
            // If no mockup image, draw a placeholder UI
            drawPlaceholderUI(ctx, caseStudy, colors);
          }
        } catch (error) {
          // If image loading fails, draw a placeholder UI
          drawPlaceholderUI(ctx, caseStudy, colors);
        }
        
        // Add color accents specific to the category
        drawAccents(ctx, caseStudy, colors);
        
        // Draw title and overlay
        drawTitleOverlay(ctx, caseStudy, colors);
        
        // Save the image
        const filename = `case-study-${caseStudy.name}.jpg`;
        const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
        fs.writeFileSync(path.join(outputDir, filename), buffer);
        
        console.log(`Generated image: ${filename}`);
      } catch (error) {
        console.error(`Error generating image for ${caseStudy.name}:`, error);
      }
    }
  }

  // Function to draw a grid pattern
  function drawGridPattern(ctx, colors) {
    ctx.strokeStyle = `${colors.primary}22`; // Very transparent
    ctx.lineWidth = 1;
    
    // Draw vertical lines
    for (let x = 0; x <= width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    // Draw horizontal lines
    for (let y = 0; y <= height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  // Function to draw a placeholder UI based on case study type
  function drawPlaceholderUI(ctx, caseStudy, colors) {
    if (caseStudy.uiType === 'mobile') {
      // Draw mobile device frame
      drawMobileFrame(ctx, colors);
    } else if (caseStudy.uiType === 'gallery') {
      // Draw gallery/3D view interface
      drawGalleryInterface(ctx, caseStudy, colors);
    } else {
      // Default to dashboard interface
      drawDashboardInterface(ctx, caseStudy, colors);
    }
  }

  // Function to draw mobile app frame
  function drawMobileFrame(ctx, colors) {
    // Phone frame
    const frameX = width/2 - 120;
    const frameY = 40;
    const frameWidth = 240;
    const frameHeight = 320;
    
    // Draw phone outer body
    ctx.fillStyle = '#222';
    roundRect(ctx, frameX - 10, frameY - 20, frameWidth + 20, frameHeight + 40, 20);
    ctx.fill();
    
    // Draw phone screen
    ctx.fillStyle = colors.bg;
    roundRect(ctx, frameX, frameY, frameWidth, frameHeight, 10);
    ctx.fill();
    
    // Draw status bar
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(frameX, frameY, frameWidth, 24);
    
    // Draw home button
    ctx.beginPath();
    ctx.arc(frameX + frameWidth/2, frameY + frameHeight + 15, 15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fill();
    
    // Draw app UI elements
    drawAppElements(ctx, frameX, frameY + 30, frameWidth, frameHeight - 30, colors);
  }

  // Function to draw app UI elements
  function drawAppElements(ctx, x, y, width, height, colors) {
    // Navigation bar
    ctx.fillStyle = colors.primary;
    ctx.fillRect(x, y, width, 40);
    
    // Draw some mock content
    const contentPadding = 10;
    const contentX = x + contentPadding;
    const contentY = y + 40 + contentPadding;
    const contentWidth = width - contentPadding * 2;
    const contentHeight = height - 40 - contentPadding * 2;
    
    // Content cards
    for (let i = 0; i < 3; i++) {
      const cardHeight = contentHeight / 3 - 10;
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      roundRect(ctx, contentX, contentY + (cardHeight + 10) * i, contentWidth, cardHeight, 10);
      ctx.fill();
      
      // Card content
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.fillRect(contentX + 10, contentY + 10 + (cardHeight + 10) * i, 40, 40);
      
      // Card text lines
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.fillRect(contentX + 60, contentY + 10 + (cardHeight + 10) * i, contentWidth - 70, 8);
      ctx.fillRect(contentX + 60, contentY + 25 + (cardHeight + 10) * i, contentWidth - 70, 8);
    }
    
    // Bottom navigation
    ctx.fillStyle = colors.secondary;
    ctx.fillRect(x, y + height - 50, width, 50);
    
    // Nav icons
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.arc(x + (width / 4) * i + width / 8, y + height - 25, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Function to draw dashboard interface
  function drawDashboardInterface(ctx, caseStudy, colors) {
    // Sidebar
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(20, 20, 160, height - 40);
    
    // Logo area
    ctx.fillStyle = colors.primary;
    roundRect(ctx, 40, 40, 120, 40, 5);
    ctx.fill();
    
    // Menu items
    for (let i = 0; i < 5; i++) {
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fillRect(40, 100 + i * 50, 120, 30);
    }
    
    // Main content area
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fillRect(200, 20, width - 220, height - 40);
    
    // Header bar
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(200, 20, width - 220, 60);
    
    // Draw different content based on case study type
    switch(caseStudy.category) {
      case 'software':
        drawDataDashboard(ctx, 200, 100, width - 220, height - 140, colors);
        break;
      case 'iot':
        drawIoTDashboard(ctx, 200, 100, width - 220, height - 140, colors);
        break;
      default:
        drawStandardDashboard(ctx, 200, 100, width - 220, height - 140, colors);
    }
  }

  // Function to draw standard dashboard elements
  function drawStandardDashboard(ctx, x, y, width, height, colors) {
    // Draw 4 stats cards
    const cardWidth = (width - 30) / 2;
    const cardHeight = 100;
    
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        roundRect(ctx, 
          x + 10 + j * (cardWidth + 10), 
          y + 10 + i * (cardHeight + 10), 
          cardWidth, 
          cardHeight, 
          8);
        ctx.fill();
        
        // Stat number
        ctx.fillStyle = colors.accent;
        ctx.font = 'bold 24px Arial';
        ctx.fillText('65%', x + 30 + j * (cardWidth + 10), y + 50 + i * (cardHeight + 10));
        
        // Stat label
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '14px Arial';
        ctx.fillText('Stat Label', x + 30 + j * (cardWidth + 10), y + 75 + i * (cardHeight + 10));
      }
    }
    
    // Draw main content area
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    roundRect(ctx, x + 10, y + 230, width - 20, height - 240, 8);
    ctx.fill();
    
    // Chart area
    const chartX = x + 30;
    const chartY = y + 250;
    const chartWidth = width - 60;
    const chartHeight = 120;
    
    // Chart background
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(chartX, chartY, chartWidth, chartHeight);
    
    // Chart data
    ctx.beginPath();
    ctx.moveTo(chartX, chartY + chartHeight);
    
    for (let i = 0; i <= 10; i++) {
      const dataX = chartX + (chartWidth / 10) * i;
      const dataY = chartY + chartHeight - (Math.sin(i * 0.5) + 1) * (chartHeight / 3) - Math.random() * 20;
      ctx.lineTo(dataX, dataY);
    }
    
    ctx.lineTo(chartX + chartWidth, chartY + chartHeight);
    ctx.closePath();
    
    const chartGradient = ctx.createLinearGradient(chartX, chartY, chartX, chartY + chartHeight);
    chartGradient.addColorStop(0, `${colors.accent}99`);
    chartGradient.addColorStop(1, `${colors.accent}11`);
    ctx.fillStyle = chartGradient;
    ctx.fill();
    
    // Chart line
    ctx.beginPath();
    
    for (let i = 0; i <= 10; i++) {
      const dataX = chartX + (chartWidth / 10) * i;
      const dataY = chartY + chartHeight - (Math.sin(i * 0.5) + 1) * (chartHeight / 3) - Math.random() * 20;
      
      if (i === 0) {
        ctx.moveTo(dataX, dataY);
      } else {
        ctx.lineTo(dataX, dataY);
      }
    }
    
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // Function to draw IoT dashboard elements
  function drawIoTDashboard(ctx, x, y, width, height, colors) {
    // Draw device status section
    const sectionPadding = 10;
    const sectionX = x + sectionPadding;
    const sectionY = y + sectionPadding;
    const sectionWidth = width - sectionPadding * 2;
    const sectionHeight = 100;
    
    // Header
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Device Status', sectionX, sectionY);
    
    // Device indicators
    for (let i = 0; i < 5; i++) {
      const indicatorX = sectionX + i * 110;
      const indicatorY = sectionY + 20;
      
      // Device box
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      roundRect(ctx, indicatorX, indicatorY, 100, 60, 5);
      ctx.fill();
      
      // Status indicator
      ctx.beginPath();
      ctx.arc(indicatorX + 20, indicatorY + 30, 10, 0, Math.PI * 2);
      ctx.fillStyle = i % 3 === 0 ? '#22c55e' : (i % 3 === 1 ? '#eab308' : colors.accent);
      ctx.fill();
      
      // Device name
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = '12px Arial';
      ctx.fillText(`Device ${i+1}`, indicatorX + 40, indicatorY + 35);
    }
    
    // Sensor data visualization
    const vizX = sectionX;
    const vizY = sectionY + sectionHeight + 20;
    const vizWidth = sectionWidth;
    const vizHeight = 150;
    
    // Viz bg
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    roundRect(ctx, vizX, vizY, vizWidth, vizHeight, 8);
    ctx.fill();
    
    // Header
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Sensor Readings', vizX + 10, vizY + 25);
    
    // Graph area
    const graphX = vizX + 20;
    const graphY = vizY + 40;
    const graphWidth = vizWidth - 40;
    const graphHeight = 90;
    
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(graphX, graphY, graphWidth, graphHeight);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const lineY = graphY + (graphHeight / 4) * i;
      
      ctx.beginPath();
      ctx.moveTo(graphX, lineY);
      ctx.lineTo(graphX + graphWidth, lineY);
      ctx.stroke();
      
      // Y-axis labels
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = '10px Arial';
      ctx.fillText(`${100 - i * 25}%`, graphX - 20, lineY + 3);
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
      const lineX = graphX + (graphWidth / 6) * i;
      
      ctx.beginPath();
      ctx.moveTo(lineX, graphY);
      ctx.lineTo(lineX, graphY + graphHeight);
      ctx.stroke();
    }
    
    // Draw multiple data lines
    const dataPoints = [
      [0.2, 0.4, 0.45, 0.3, 0.5, 0.55, 0.7],
      [0.5, 0.3, 0.6, 0.7, 0.5, 0.4, 0.3],
      [0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.4]
    ];
    
    const lineColors = [colors.primary, colors.accent, colors.secondary];
    
    dataPoints.forEach((data, index) => {
      ctx.beginPath();
      
      for (let i = 0; i <= 6; i++) {
        const pointX = graphX + (graphWidth / 6) * i;
        const pointY = graphY + graphHeight - (data[i] * graphHeight);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      
      ctx.strokeStyle = lineColors[index];
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Data points
      for (let i = 0; i <= 6; i++) {
        const pointX = graphX + (graphWidth / 6) * i;
        const pointY = graphY + graphHeight - (data[i] * graphHeight);
        
        ctx.beginPath();
        ctx.arc(pointX, pointY, 4, 0, Math.PI * 2);
        ctx.fillStyle = lineColors[index];
        ctx.fill();
      }
    });
    
    // Map visualization (common in IoT dashboards)
    const mapX = vizX;
    const mapY = vizY + vizHeight + 20;
    const mapWidth = vizWidth;
    const mapHeight = 120;
    
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    roundRect(ctx, mapX, mapY, mapWidth, mapHeight, 8);
    ctx.fill();
    
    // Map simulation
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    roundRect(ctx, mapX + 20, mapY + 20, mapWidth - 40, mapHeight - 40, 4);
    ctx.fill();
    
    // Title
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Device Locations', mapX + 10, mapY + 15);
    
    // Map location markers
    const locations = [
      { x: 0.2, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.8, y: 0.4 },
      { x: 0.3, y: 0.7 },
      { x: 0.7, y: 0.2 },
    ];
    
    locations.forEach((loc) => {
      // Pulse effect
      ctx.beginPath();
      ctx.arc(
        mapX + 20 + (mapWidth - 40) * loc.x, 
        mapY + 20 + (mapHeight - 40) * loc.y, 
        10, 0, Math.PI * 2
      );
      const gradient = ctx.createRadialGradient(
        mapX + 20 + (mapWidth - 40) * loc.x, 
        mapY + 20 + (mapHeight - 40) * loc.y, 
        2,
        mapX + 20 + (mapWidth - 40) * loc.x, 
        mapY + 20 + (mapHeight - 40) * loc.y, 
        10
      );
      gradient.addColorStop(0, colors.accent);
      gradient.addColorStop(1, `${colors.accent}00`);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Center dot
      ctx.beginPath();
      ctx.arc(
        mapX + 20 + (mapWidth - 40) * loc.x, 
        mapY + 20 + (mapHeight - 40) * loc.y, 
        3, 0, Math.PI * 2
      );
      ctx.fillStyle = colors.accent;
      ctx.fill();
    });
  }

  // Function to draw data dashboard
  function drawDataDashboard(ctx, x, y, width, height, colors) {
    // Top stats row
    const statWidth = (width - 40) / 3;
    
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      roundRect(ctx, x + 10 + i * (statWidth + 10), y, statWidth, 80, 8);
      ctx.fill();
      
      // Stat value
      ctx.fillStyle = colors.primary;
      ctx.font = 'bold 24px Arial';
      const values = ['92%', '$14.3K', '7,843'];
      ctx.fillText(values[i], x + 25 + i * (statWidth + 10), y + 35);
      
      // Stat label
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = '14px Arial';
      const labels = ['Completion', 'Revenue', 'Users'];
      ctx.fillText(labels[i], x + 25 + i * (statWidth + 10), y + 60);
    }
    
    // Data tables - common in data-heavy dashboards
    const tableX = x + 10;
    const tableY = y + 100;
    const tableWidth = width - 20;
    const tableHeight = 200;
    
    // Table header
    ctx.fillStyle = colors.primary;
    roundRect(ctx, tableX, tableY, tableWidth, 40, 8, true, false);
    ctx.fill();
    
    // Column headers
    const columns = ['ID', 'Name', 'Status', 'Date', 'Value'];
    const columnWidth = tableWidth / columns.length;
    
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = 'bold 14px Arial';
    
    columns.forEach((col, i) => {
      ctx.fillText(col, tableX + 20 + i * columnWidth, tableY + 25);
    });
    
    // Table rows
    for (let i = 0; i < 5; i++) {
      const rowY = tableY + 40 + i * 32;
      
      // Row background (alternating)
      ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)';
      ctx.fillRect(tableX, rowY, tableWidth, 32);
      
      // Row data
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = '14px Arial';
      
      // ID
      ctx.fillText(`#${1000 + i}`, tableX + 20, rowY + 20);
      
      // Name
      const names = ['Project Alpha', 'System Update', 'Client Meeting', 'Data Migration', 'Server Setup'];
      ctx.fillText(names[i], tableX + 20 + columnWidth, rowY + 20);
      
      // Status
      const statuses = ['Complete', 'In Progress', 'Pending', 'Complete', 'In Progress'];
      const statusColors = {
        'Complete': '#22c55e',
        'In Progress': '#eab308',
        'Pending': '#f97316'
      };
      ctx.fillStyle = statusColors[statuses[i]];
      ctx.fillText(statuses[i], tableX + 20 + columnWidth * 2, rowY + 20);
      
      // Date
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      const dates = ['2025-05-12', '2025-05-14', '2025-05-15', '2025-05-18', '2025-05-20'];
      ctx.fillText(dates[i], tableX + 20 + columnWidth * 3, rowY + 20);
      
      // Value
      const values = ['$1,240', '$3,500', '$800', '$6,200', '$1,800'];
      ctx.fillText(values[i], tableX + 20 + columnWidth * 4, rowY + 20);
    }
    
    // Controls/actions area
    const controlsX = tableX;
    const controlsY = tableY + 40 + 5 * 32 + 20;
    const controlsWidth = tableWidth;
    const controlsHeight = 50;
    
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    roundRect(ctx, controlsX, controlsY, controlsWidth, controlsHeight, 8);
    ctx.fill();
    
    // Page navigation
    for (let i = 0; i < 5; i++) {
      ctx.fillStyle = i === 0 ? colors.primary : 'rgba(255,255,255,0.1)';
      roundRect(ctx, controlsX + 20 + i * 40, controlsY + 10, 30, 30, 4);
      ctx.fill();
      
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.font = '14px Arial';
      ctx.fillText(`${i + 1}`, controlsX + 30 + i * 40, controlsY + 30);
    }
    
    // Action buttons
    const buttons = ['Export', 'Filter', 'Add New'];
    buttons.forEach((btn, i) => {
      ctx.fillStyle = i === buttons.length - 1 ? colors.accent : 'rgba(255,255,255,0.1)';
      roundRect(ctx, controlsX + controlsWidth - 250 + i * 85, controlsY + 10, 80, 30, 4);
      ctx.fill();
      
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.font = '14px Arial';
      ctx.fillText(btn, controlsX + controlsWidth - 230 + i * 85, controlsY + 30);
    });
  }

  // Function to draw gallery interface
  function drawGalleryInterface(ctx, caseStudy, colors) {
    // Main header
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(20, 20, width - 40, 60);
    
    // Logo/title area
    ctx.fillStyle = colors.primary;
    roundRect(ctx, 40, 30, 120, 40, 5);
    ctx.fill();
    
    // Nav items
    const navItems = ['Home', 'Gallery', 'Virtual Tours', 'Contact'];
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '14px Arial';
    
    navItems.forEach((item, i) => {
      const highlighted = i === 1 || i === 2;
      ctx.fillStyle = highlighted ? colors.accent : 'rgba(255,255,255,0.7)';
      ctx.fillText(item, width - 380 + i * 100, 55);
    });
    
    // Large 3D view/gallery area
    const galleryX = 20;
    const galleryY = 100;
    const galleryWidth = width - 40;
    const galleryHeight = 220;
    
    // Gallery background
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(galleryX, galleryY, galleryWidth, galleryHeight);
    
    // Faux 3D effect
    const perspectivePoints = [
      { x: galleryWidth * 0.2, y: galleryHeight * 0.3 },
      { x: galleryWidth * 0.8, y: galleryHeight * 0.3 },
      { x: galleryWidth * 0.9, y: galleryHeight * 0.9 },
      { x: galleryWidth * 0.1, y: galleryHeight * 0.9 }
    ];
    
    ctx.beginPath();
    ctx.moveTo(galleryX + perspectivePoints[0].x, galleryY + perspectivePoints[0].y);
    for (let i = 1; i < perspectivePoints.length; i++) {
      ctx.lineTo(galleryX + perspectivePoints[i].x, galleryY + perspectivePoints[i].y);
    }
    ctx.closePath();
    
    const roomGradient = ctx.createLinearGradient(
      galleryX, galleryY, 
      galleryX, galleryY + galleryHeight
    );
    roomGradient.addColorStop(0, 'rgba(255,255,255,0.1)');
    roomGradient.addColorStop(1, 'rgba(0,0,0,0.3)');
    
    ctx.fillStyle = roomGradient;
    ctx.fill();
    
    // Draw perspective lines
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= 5; i++) {
      const x1 = galleryX + (galleryWidth * 0.1) + (galleryWidth * 0.8) * (i / 6);
      const y1 = galleryY + galleryHeight * 0.9;
      
      const x2 = galleryX + (galleryWidth * 0.2) + (galleryWidth * 0.6) * (i / 6);
      const y2 = galleryY + galleryHeight * 0.3;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    // 3D control elements
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    roundRect(ctx, galleryX + galleryWidth/2 - 150, galleryY + galleryHeight - 40, 300, 30, 15);
    ctx.fill();
    
    // Control dots
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.arc(galleryX + galleryWidth/2 - 90 + i * 30, galleryY + galleryHeight - 25, 5, 0, Math.PI * 2);
      ctx.fillStyle = i === 3 ? colors.accent : 'rgba(255,255,255,0.5)';
      ctx.fill();
    }
    
    // Navigation controls
    const controlSize = 40;
    const controls = [
      { x: galleryX + 20, y: galleryY + galleryHeight/2 - controlSize/2 },  // Left
      { x: galleryX + galleryWidth - 20 - controlSize, y: galleryY + galleryHeight/2 - controlSize/2 },  // Right
      { x: galleryX + galleryWidth/2 - controlSize/2, y: galleryY + 20 },  // Up
      { x: galleryX + galleryWidth/2 - controlSize/2, y: galleryY + galleryHeight - 20 - controlSize }   // Down
    ];
    
    controls.forEach((control) => {
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      roundRect(ctx, control.x, control.y, controlSize, controlSize, 20);
      ctx.fill();
      
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.arc(control.x + controlSize/2, control.y + controlSize/2, 15, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Thumbnail gallery
    const thumbsY = galleryY + galleryHeight + 20;
    const thumbSize = (width - 80) / 5;
    
    for (let i = 0; i < 5; i++) {
      ctx.fillStyle = i === 2 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)';
      roundRect(ctx, 20 + i * (thumbSize + 10), thumbsY, thumbSize, thumbSize / 1.5, 5);
      ctx.fill();
      
      // Selection indicator
      if (i === 2) {
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 3;
        roundRect(ctx, 20 + i * (thumbSize + 10), thumbsY, thumbSize, thumbSize / 1.5, 5, false, true);
      }
    }
  }

  // Function to draw category-specific accents
  function drawAccents(ctx, caseStudy, colors) {
    switch (caseStudy.category) {
      case 'web':
        // Browser window frame elements
        ctx.fillStyle = colors.primary;
        roundRect(ctx, width - 100, 20, 80, 30, 5);
        ctx.fill();
        
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(25 + i * 15, 25, 5, 0, Math.PI * 2);
          ctx.fillStyle = i === 0 ? '#f97316' : (i === 1 ? '#eab308' : '#22c55e');
          ctx.fill();
        }
        break;
        
      case 'mobile':
        // Mobile elements - status icons
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.fillStyle = colors.accent;
          const iconSize = 8 + i * 2;
          ctx.fillRect(width - 40 + i * 10, 15, 5, iconSize);
        }
        break;
        
      case 'software':
        // Code/data elements
        ctx.fillStyle = colors.accent;
        for (let i = 0; i < 5; i++) {
          const barHeight = 4 + Math.random() * 10;
          ctx.fillRect(width - 100 + i * 15, 30 - barHeight, 10, barHeight);
        }
        break;
        
      case 'iot':
        // Connection lines for IoT
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < 5; i++) {
          const startX = width - 150 + i * 10;
          const startY = 30;
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          
          // Create zig-zag IoT connection line
          for (let j = 1; j <= 3; j++) {
            const xOffset = j % 2 === 0 ? 10 : -10;
            ctx.lineTo(startX + xOffset, startY + j * 5);
          }
          
          ctx.stroke();
        }
        
        // Connected dots
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(width - 130 + i * 20, 20 + i * 5, 3, 0, Math.PI * 2);
          ctx.fillStyle = colors.accent;
          ctx.fill();
        }
        break;
    }
  }

  // Function to draw title overlay
  function drawTitleOverlay(ctx, caseStudy, colors) {
    // Gradient overlay at the bottom
    const overlayHeight = 100;
    const gradient = ctx.createLinearGradient(0, height - overlayHeight, 0, height);
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.8)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, height - overlayHeight, width, overlayHeight);
    
    // Title text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(caseStudy.title, width/2, height - 50);
    
    // Category tag
    const categoryText = caseStudy.category.charAt(0).toUpperCase() + caseStudy.category.slice(1);
    const textWidth = ctx.measureText(categoryText).width;
    
    ctx.fillStyle = colors.accent;
    roundRect(ctx, width/2 - textWidth/2 - 15, height - 30, textWidth + 30, 20, 10);
    ctx.fill();
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(categoryText, width/2, height - 17);
    
    // Decorative accent line
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width/2 - 60, height - 75);
    ctx.lineTo(width/2 + 60, height - 75);
    ctx.stroke();
  }

  // Helper function to draw rounded rectangles
  function roundRect(ctx, x, y, width, height, radius, fill = true, stroke = false) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    
    if (fill) {
      ctx.fill();
    }
    
    if (stroke) {
      ctx.stroke();
    }
  }

  // Create directory to store any mockup assets if needed
  if (!fs.existsSync(mockupsDir)) {
    try {
      fs.mkdirSync(mockupsDir, { recursive: true });
      console.log(`Created mockups directory: ${mockupsDir}`);
    } catch (error) {
      console.log(`Note: Could not create mockups directory: ${error.message}`);
      // Continue execution, this is not critical
    }
  }

  // Run the image generation
  generateMockupImages().then(() => {
    console.log('\nAll case study images generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Check the images in the public/images/case-studies directory');
    console.log('2. Update the CaseStudies.jsx component to reference .jpg files instead of .svg');
    console.log('3. Run the development server to verify the images are displayed correctly');
  }).catch((error) => {
    console.error('Error generating images:', error);
  });
}
