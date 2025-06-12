import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaCode, FaMobile, FaRocket, FaWifi, FaGithub, FaExternalLinkAlt, 
    FaReact, FaNodeJs, FaDatabase, FaMicrochip, FaChartLine, FaShoppingCart,
    FaCog, FaCloud, FaLock, FaUsers, FaPython, FaDocker, FaAws, FaGoogle,
    FaShieldAlt, FaCreditCard, FaGamepad, FaHeart, FaGraduationCap, FaHome,
    FaTruck, FaLeaf, FaVideo, FaCar, FaIndustry, FaCamera, FaMapMarkedAlt, FaJava
} from 'react-icons/fa';
import { 
    SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiArduino, SiRaspberrypi,
    SiNextdotjs, SiRedis, SiStripe, SiFlutter, SiFirebase, SiTensorflow,
    SiPostgresql, SiMysql, SiRedux, SiGraphql, SiKubernetes, SiElasticsearch,
    SiReactquery, SiSocketdotio, SiPwa, SiWebrtc, SiOpencv, SiVuedotjs,
    SiAngular, SiSpring, SiDotnet, SiSwift, SiKotlin, SiJavascript,
    SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiNestjs
} from 'react-icons/si';
import './CaseStudies.css';

const CaseStudies = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredCase, setHoveredCase] = useState(null);
      // Track image loading status
    const [imagesLoaded, setImagesLoaded] = useState({});
    
    // Load and verify images when component mounts
    useEffect(() => {
        console.log('CaseStudies component mounted');
        
        // Preload all case study images
        caseStudies.forEach(study => {
            const img = new Image();
            img.onload = () => {
                console.log(`✅ Image ${study.image} loaded successfully`);
                setImagesLoaded(prev => ({
                    ...prev,
                    [study.id]: true
                }));
            };
            img.onerror = () => {
                console.log(`❌ Error loading image ${study.image}`);
                setImagesLoaded(prev => ({
                    ...prev,
                    [study.id]: false
                }));
            };
            img.src = study.image;
        });
    }, []);

    const categories = [
        { id: 'all', name: 'All Solutions', icon: <FaCog /> },
        { id: 'web', name: 'Web Development', icon: <FaCode /> },
        { id: 'mobile', name: 'Mobile Apps', icon: <FaMobile /> },
        { id: 'software', name: 'Software Solutions', icon: <FaRocket /> },
        { id: 'iot', name: 'IoT Applications', icon: <FaWifi /> }
    ];    const caseStudies = [
        // ===== WEB DEVELOPMENT SOLUTIONS =====
        {
            id: 1,
            title: 'E-Commerce Platform with AI Recommendations',
            category: 'web',
            challenge: 'Local retailer chain needed modern e-commerce platform with personalized shopping experience to compete with major online retailers and increase conversion rates',
            solution: 'Built full-stack platform with Next.js, AI-powered product recommendations, real-time inventory management, and seamless payment processing',
            technologies: [
                { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <SiRedis />, name: 'Redis Cache', color: '#dc382d' },
                { icon: <SiStripe />, name: 'Stripe', color: '#008cdd' }
            ],
            features: [
                'AI-powered product recommendations',
                'Real-time inventory synchronization',
                'Multi-vendor marketplace support',
                'Advanced analytics dashboard',
                'Mobile-first responsive design',
                'Progressive Web App capabilities'
            ],
            metrics: {
                'Conversion Rate': '+45% increase',
                'Page Load Speed': '< 1.5 seconds',
                'Mobile Performance': '98 Lighthouse Score',
                'User Engagement': '+65% session time'
            },
            image: '/images/case-studies/case-study-ecommerce.svg',
            demoUrl: '#demo-ecommerce',
            codeUrl: '#code-ecommerce'
        },
        {
            id: 2,
            title: 'Healthcare Patient Portal & Telemedicine',
            category: 'web',
            challenge: 'Medical practice needed secure patient portal for appointment scheduling, medical records access, and virtual consultations during digital health transformation',
            solution: 'Developed HIPAA-compliant web platform with video consultations, secure messaging, prescription management, and integrated appointment system',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <SiNestjs />, name: 'NestJS', color: '#e0234e' },
                { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
                { icon: <SiWebrtc />, name: 'WebRTC', color: '#333333' },
                { icon: <FaShieldAlt />, name: 'HIPAA Security', color: '#28a745' }
            ],
            features: [
                'HIPAA-compliant data encryption',
                'HD video consultations',
                'Secure document sharing',
                'Prescription management',
                'Appointment scheduling system',
                'Real-time chat with providers'
            ],
            metrics: {
                'Patient Satisfaction': '4.9/5 rating',
                'Consultation Time': '30% faster setup',
                'Security Compliance': '100% HIPAA certified',
                'Platform Adoption': '85% patient usage'
            },
            image: '/images/case-studies/case-study-healthcare.svg',
            demoUrl: '#demo-healthcare',
            codeUrl: '#code-healthcare'
        },
        {
            id: 3,
            title: 'Real Estate Virtual Tour Platform',
            category: 'web',
            challenge: 'Real estate agency wanted immersive virtual property tours with 3D walkthroughs to showcase properties remotely and reduce physical viewings',
            solution: 'Created interactive 3D virtual tour platform with 360° photography integration, floor plan mapping, and VR compatibility for enhanced property viewing',
            technologies: [
                { icon: <SiVuedotjs />, name: 'Vue.js', color: '#4fc08d' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiGraphql />, name: 'GraphQL', color: '#e10098' },
                { icon: <FaAws />, name: 'AWS S3', color: '#ff9900' },
                { icon: <FaCamera />, name: '360° Integration', color: '#ff6b6b' }
            ],
            features: [
                '360° virtual walkthroughs',
                'Interactive floor plans',
                'VR headset compatibility',
                'Lead capture integration',
                'Property comparison tool',
                'Mobile-optimized viewing'
            ],
            metrics: {
                'Viewing Time': '+280% increase',
                'Lead Generation': '+150% boost',
                'Travel Reduction': '70% fewer visits',
                'Client Satisfaction': '96% positive feedback'
            },
            image: '/images/case-studies/case-study-realestate.svg',
            demoUrl: '#demo-realestate',
            codeUrl: '#code-realestate'
        },
        {
            id: 4,
            title: 'Learning Management System for Universities',
            category: 'web',
            challenge: 'University needed comprehensive LMS to manage courses, student progress, online assessments, and virtual classrooms during remote learning transition',
            solution: 'Built scalable LMS with interactive course content, automated grading, video lectures, discussion forums, and comprehensive analytics',
            technologies: [
                { icon: <SiAngular />, name: 'Angular', color: '#dd1b16' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <SiSpring />, name: 'Spring Boot', color: '#6db33f' },
                { icon: <SiMysql />, name: 'MySQL', color: '#4479a1' },
                { icon: <SiElasticsearch />, name: 'Elasticsearch', color: '#005571' },
                { icon: <FaVideo />, name: 'Video Streaming', color: '#ff4757' }
            ],
            features: [
                'Interactive course builder',
                'Automated assessment system',
                'Live virtual classrooms',
                'Student progress analytics',
                'Discussion forums & chat',
                'Mobile learning app'
            ],
            metrics: {
                'Student Engagement': '+120% increase',
                'Assessment Efficiency': '80% time savings',
                'Platform Uptime': '99.95% availability',
                'Course Completion': '+35% improvement'
            },
            image: '/images/case-studies/case-study-lms.svg',
            demoUrl: '#demo-lms',
            codeUrl: '#code-lms'
        },

        // ===== MOBILE APP SOLUTIONS =====
        {
            id: 5,
            title: 'Fitness Tracking & Social Workout App',
            category: 'mobile',
            challenge: 'Fitness startup needed engaging mobile app to track workouts, connect users socially, and provide personalized training programs with wearable device integration',
            solution: 'Developed cross-platform fitness app with social features, AI workout recommendations, wearable integration, and gamification elements',
            technologies: [
                { icon: <SiFlutter />, name: 'Flutter', color: '#02569b' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiFirebase />, name: 'Firebase', color: '#ffca28' },
                { icon: <SiTensorflow />, name: 'TensorFlow', color: '#ff6f00' },
                { icon: <SiRedis />, name: 'Redis', color: '#dc382d' },
                { icon: <FaHeart />, name: 'HealthKit', color: '#ff3b30' }
            ],
            features: [
                'AI-powered workout recommendations',
                'Social challenges and leaderboards',
                'Wearable device synchronization',
                'Video exercise library',
                'Nutrition tracking integration',
                'Personal trainer marketplace'
            ],
            metrics: {
                'User Retention': '78% after 6 months',
                'Daily Active Users': '45K+ users',
                'Workout Completion': '+85% rate',
                'App Store Rating': '4.8/5 stars'
            },
            image: '/images/case-studies/case-study-fitness.svg',
            demoUrl: '#demo-fitness',
            codeUrl: '#code-fitness'
        },
        {
            id: 6,
            title: 'Smart Home Automation Control App',
            category: 'mobile',
            challenge: 'IoT company needed intuitive mobile app to control smart home devices, create automation rules, and provide energy consumption insights',
            solution: 'Built native mobile app with device discovery, custom automation workflows, voice control, and real-time energy monitoring dashboard',
            technologies: [
                { icon: <SiSwift />, name: 'Swift (iOS)', color: '#fa7343' },
                { icon: <SiKotlin />, name: 'Kotlin (Android)', color: '#7f52ff' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <SiSocketdotio />, name: 'WebSocket', color: '#25c2a0' },
                { icon: <FaHome />, name: 'HomeKit/Google', color: '#4285f4' }
            ],
            features: [
                'Universal device compatibility',
                'Custom automation workflows',
                'Voice control integration',
                'Energy consumption analytics',
                'Geofencing automation',
                'Family sharing controls'
            ],
            metrics: {
                'Device Compatibility': '500+ brands',
                'Response Time': '< 200ms',
                'Energy Savings': '25% average reduction',
                'User Satisfaction': '92% approval rate'
            },
            image: '/images/case-studies/case-study-smarthome.svg',
            demoUrl: '#demo-smarthome',
            codeUrl: '#code-smarthome'
        },
        {
            id: 7,
            title: 'Food Delivery & Restaurant Discovery App',
            category: 'mobile',
            challenge: 'Local food delivery startup needed mobile platform to connect customers with restaurants, provide real-time tracking, and optimize delivery routes',
            solution: 'Created comprehensive food delivery ecosystem with customer app, restaurant dashboard, and delivery driver app with real-time GPS tracking',
            technologies: [
                { icon: <FaReact />, name: 'React Native', color: '#61dafb' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
                { icon: <SiStripe />, name: 'Stripe Payments', color: '#008cdd' },
                { icon: <FaMapMarkedAlt />, name: 'Google Maps', color: '#4285f4' }
            ],
            features: [
                'Real-time order tracking',
                'Smart delivery route optimization',
                'In-app payment processing',
                'Restaurant analytics dashboard',
                'Customer review system',
                'Push notification system'
            ],
            metrics: {
                'Delivery Time': '35% faster average',
                'Order Accuracy': '98.5% success rate',
                'Restaurant Partners': '500+ active',
                'Monthly Orders': '50K+ completed'
            },
            image: '/images/case-studies/case-study-fooddelivery.svg',
            demoUrl: '#demo-fooddelivery',
            codeUrl: '#code-fooddelivery'
        },
        {
            id: 8,
            title: 'Personal Finance & Investment Tracker',
            category: 'mobile',
            challenge: 'Fintech startup needed secure mobile app for personal finance management, investment tracking, and automated savings with bank integration',
            solution: 'Developed secure financial app with bank account aggregation, investment portfolio tracking, AI-powered insights, and automated savings features',
            technologies: [
                { icon: <SiFlutter />, name: 'Flutter', color: '#02569b' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <FaShieldAlt />, name: 'Bank-level Security', color: '#28a745' },
                { icon: <SiTensorflow />, name: 'AI Analytics', color: '#ff6f00' },
                { icon: <FaCreditCard />, name: 'Plaid API', color: '#00d4aa' }
            ],
            features: [
                'Bank account aggregation',
                'Investment portfolio tracking',
                'AI spending insights',
                'Automated savings goals',
                'Bill payment reminders',
                'Financial goal planning'
            ],
            metrics: {
                'User Savings': '$2.5M+ tracked',
                'Security Rating': 'Bank-grade encryption',
                'User Growth': '300% year-over-year',
                'Feature Usage': '85% daily engagement'
            },
            image: '/images/case-studies/case-study-fintech.svg',
            demoUrl: '#demo-fintech',
            codeUrl: '#code-fintech'
        },

        // ===== SOFTWARE SOLUTIONS =====
        {
            id: 9,
            title: 'Enterprise Resource Planning (ERP) System',
            category: 'software',
            challenge: 'Manufacturing company needed integrated ERP solution to manage inventory, production planning, financial reporting, and supply chain operations',
            solution: 'Built comprehensive ERP system with modules for inventory, production, finance, HR, and supply chain with real-time dashboards and reporting',
            technologies: [
                { icon: <SiDotnet />, name: '.NET Core', color: '#512bd4' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
                { icon: <SiRedis />, name: 'Redis', color: '#dc382d' },
                { icon: <FaChartLine />, name: 'Power BI', color: '#f2c811' }
            ],
            features: [
                'Integrated inventory management',
                'Production planning & scheduling',
                'Financial reporting & analytics',
                'Supply chain optimization',
                'HR management system',
                'Real-time business dashboards'
            ],
            metrics: {
                'Operational Efficiency': '+40% improvement',
                'Inventory Costs': '30% reduction',
                'Report Generation': '90% faster',
                'System Integration': '15+ modules'
            },
            image: '/images/case-studies/case-study-erp.svg',
            demoUrl: '#demo-erp',
            codeUrl: '#code-erp'
        },
        {
            id: 10,
            title: 'AI-Powered Customer Support Platform',
            category: 'software',
            challenge: 'SaaS company needed intelligent customer support system with chatbot integration, ticket routing, and knowledge base to handle growing support volume',
            solution: 'Developed AI-powered support platform with natural language processing, automated ticket routing, and self-service knowledge base',
            technologies: [
                { icon: <FaPython />, name: 'Python', color: '#3776ab' },
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <SiTensorflow />, name: 'TensorFlow', color: '#ff6f00' },
                { icon: <SiElasticsearch />, name: 'Elasticsearch', color: '#005571' },
                { icon: <SiRedis />, name: 'Redis', color: '#dc382d' },
                { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' }
            ],
            features: [
                'AI-powered chatbot responses',
                'Intelligent ticket routing',
                'Multi-language support',
                'Knowledge base automation',
                'Customer sentiment analysis',
                'Performance analytics dashboard'
            ],
            metrics: {
                'Response Time': '75% faster',
                'Resolution Rate': '85% first contact',
                'Customer Satisfaction': '4.7/5 rating',
                'Cost Reduction': '50% support costs'
            },
            image: '/images/case-studies/case-study-support.svg',
            demoUrl: '#demo-support',
            codeUrl: '#code-support'
        },
        {
            id: 11,
            title: 'Supply Chain Visibility & Analytics Platform',
            category: 'software',
            challenge: 'Logistics company needed end-to-end supply chain visibility with predictive analytics to optimize routes, reduce costs, and improve delivery times',
            solution: 'Built comprehensive supply chain platform with real-time tracking, predictive analytics, route optimization, and supplier performance monitoring',
            technologies: [
                { icon: <FaJava />, name: 'Java Spring', color: '#ed8b00' },
                { icon: <SiAngular />, name: 'Angular', color: '#dd1b16' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326ce5' },
                { icon: <FaAws />, name: 'AWS', color: '#ff9900' },
                { icon: <FaTruck />, name: 'IoT Sensors', color: '#ff6b6b' }
            ],
            features: [
                'Real-time shipment tracking',
                'Predictive delivery analytics',
                'Route optimization algorithms',
                'Supplier performance metrics',
                'Inventory forecasting',
                'Risk management alerts'
            ],
            metrics: {
                'Delivery Accuracy': '96% on-time',
                'Cost Reduction': '22% logistics savings',
                'Visibility': '100% shipment tracking',
                'Efficiency': '+35% route optimization'
            },
            image: '/images/case-studies/case-study-supplychain.svg',
            demoUrl: '#demo-supplychain',
            codeUrl: '#code-supplychain'
        },
        {
            id: 12,
            title: 'HR Management & Recruitment Platform',
            category: 'software',
            challenge: 'Growing company needed comprehensive HR platform for recruitment, employee management, performance tracking, and payroll processing',
            solution: 'Created integrated HR platform with applicant tracking, employee self-service, performance management, and automated payroll processing',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMysql />, name: 'MySQL', color: '#4479a1' },
                { icon: <SiRedux />, name: 'Redux', color: '#764abc' },
                { icon: <FaUsers />, name: 'LDAP Integration', color: '#4f46e5' }
            ],
            features: [
                'Applicant tracking system',
                'Employee self-service portal',
                'Performance review workflows',
                'Automated payroll processing',
                'Time & attendance tracking',
                'Compliance reporting tools'
            ],
            metrics: {
                'Recruitment Efficiency': '+60% faster hiring',
                'HR Productivity': '45% time savings',
                'Employee Satisfaction': '91% portal usage',
                'Compliance': '100% audit ready'
            },
            image: '/images/case-studies/case-study-hr.svg',
            demoUrl: '#demo-hr',
            codeUrl: '#code-hr'
        },

        // ===== IOT APPLICATIONS =====
        {
            id: 13,
            title: 'Smart City Traffic Management System',
            category: 'iot',
            challenge: 'City government needed intelligent traffic management to reduce congestion, optimize signal timing, and improve emergency vehicle response times',
            solution: 'Deployed IoT sensor network with AI-powered traffic optimization, real-time monitoring, and adaptive signal control system',
            technologies: [
                { icon: <SiArduino />, name: 'Arduino Sensors', color: '#00979d' },
                { icon: <SiRaspberrypi />, name: 'Raspberry Pi', color: '#c51a4a' },
                { icon: <FaPython />, name: 'Python', color: '#3776ab' },
                { icon: <SiTensorflow />, name: 'TensorFlow', color: '#ff6f00' },
                { icon: <FaAws />, name: 'AWS IoT', color: '#ff9900' },
                { icon: <FaCar />, name: 'Traffic Analytics', color: '#28a745' }
            ],
            features: [
                'Real-time traffic flow monitoring',
                'AI-powered signal optimization',
                'Emergency vehicle prioritization',
                'Air quality monitoring',
                'Pedestrian safety systems',
                'Traffic data analytics dashboard'
            ],
            metrics: {
                'Traffic Flow': '+35% improvement',
                'Emergency Response': '40% faster',
                'Fuel Consumption': '25% reduction',
                'Sensor Network': '200+ intersections'
            },
            image: '/images/case-studies/case-study-smartcity.svg',
            demoUrl: '#demo-smartcity',
            codeUrl: '#code-smartcity'
        },
        {
            id: 14,
            title: 'Industrial Equipment Monitoring System',
            category: 'iot',
            challenge: 'Manufacturing plant needed predictive maintenance solution to prevent equipment failures, reduce downtime, and optimize maintenance schedules',
            solution: 'Implemented IoT-based predictive maintenance system with vibration sensors, temperature monitoring, and machine learning failure prediction',
            technologies: [
                { icon: <SiArduino />, name: 'Arduino', color: '#00979d' },
                { icon: <FaPython />, name: 'Python', color: '#3776ab' },
                { icon: <SiTensorflow />, name: 'Machine Learning', color: '#ff6f00' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <FaIndustry />, name: 'Industrial Sensors', color: '#6c757d' },
                { icon: <FaChartLine />, name: 'Grafana', color: '#f46800' }
            ],
            features: [
                'Vibration & temperature monitoring',
                'Predictive failure algorithms',
                'Automated maintenance alerts',
                'Equipment performance analytics',
                'Energy consumption tracking',
                'Historical trend analysis'
            ],
            metrics: {
                'Downtime Reduction': '65% decrease',
                'Maintenance Costs': '40% savings',
                'Prediction Accuracy': '92% success rate',
                'Equipment Monitored': '150+ machines'
            },
            image: '/images/case-studies/case-study-industrial.svg',
            demoUrl: '#demo-industrial',
            codeUrl: '#code-industrial'
        },
        {
            id: 15,
            title: 'Smart Agriculture Monitoring Solution',
            category: 'iot',
            challenge: 'Agricultural cooperative needed precision farming solution to monitor soil conditions, automate irrigation, and optimize crop yields',
            solution: 'Developed comprehensive IoT agriculture platform with soil sensors, weather monitoring, automated irrigation, and crop health analytics',
            technologies: [
                { icon: <SiRaspberrypi />, name: 'Raspberry Pi', color: '#c51a4a' },
                { icon: <SiArduino />, name: 'Arduino Sensors', color: '#00979d' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <FaLeaf />, name: 'Crop Analytics', color: '#28a745' },
                { icon: <FaCloud />, name: 'Weather API', color: '#007bff' }
            ],
            features: [
                'Soil moisture & pH monitoring',
                'Automated irrigation control',
                'Weather station integration',
                'Crop health image analysis',
                'Pest detection alerts',
                'Yield prediction modeling'
            ],
            metrics: {
                'Water Savings': '35% reduction',
                'Crop Yield': '+28% increase',
                'Labor Efficiency': '50% time savings',
                'Farm Coverage': '500+ acres monitored'
            },
            image: '/images/case-studies/case-study-agriculture.svg',
            demoUrl: '#demo-agriculture',
            codeUrl: '#code-agriculture'
        },
        {
            id: 16,
            title: 'Smart Energy Management Grid System',
            category: 'iot',
            challenge: 'Energy utility company needed smart grid solution to optimize energy distribution, integrate renewable sources, and provide real-time consumption monitoring',
            solution: 'Built intelligent energy management system with smart meters, load balancing algorithms, renewable energy integration, and consumer dashboards',
            technologies: [
                { icon: <SiRaspberrypi />, name: 'Raspberry Pi', color: '#c51a4a' },
                { icon: <FaPython />, name: 'Python', color: '#3776ab' },
                { icon: <SiReactquery />, name: 'React Dashboard', color: '#61dafb' },
                { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
                { icon: <FaLeaf />, name: 'Renewable Integration', color: '#28a745' },
                { icon: <FaChartLine />, name: 'Energy Analytics', color: '#ffc107' }
            ],
            features: [
                'Smart meter data collection',
                'Load balancing optimization',
                'Renewable energy integration',
                'Real-time consumption monitoring',
                'Peak demand prediction',
                'Consumer energy dashboards'
            ],
            metrics: {
                'Energy Efficiency': '+30% improvement',
                'Peak Load Reduction': '25% decrease',
                'Renewable Integration': '40% grid capacity',
                'Customer Satisfaction': '88% approval'
            },
            image: '/images/case-studies/case-study-smartgrid.svg',
            demoUrl: '#demo-smartgrid',
            codeUrl: '#code-smartgrid'
        }
    ];

    const filteredCases = selectedCategory === 'all' 
        ? caseStudies 
        : caseStudies.filter(study => study.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 120
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 120
            }
        },
        exit: {
            scale: 0.8,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <section id="case-studies" className="case-studies">
            <div className="container">
                <motion.div 
                    className="case-studies__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">Case Studies</div>
                    <h2 className="section-title">
                        Real-World Solutions &
                        <span className="title-gradient"> Technical Concepts</span>
                    </h2>
                    <p className="section-description">
                        Explore our approach to solving complex business challenges through innovative 
                        technology solutions. Each case study demonstrates our expertise across different 
                        domains and technical stacks.
                    </p>
                </motion.div>

                <motion.div 
                    className="case-studies__filters"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.icon}
                            <span>{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        key={selectedCategory}
                        className="case-studies__grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {filteredCases.map((study) => (
                            <motion.div
                                key={study.id}
                                className="case-study-card"
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredCase(study.id)}
                                onMouseLeave={() => setHoveredCase(null)}
                                whileHover={{ y: -10 }}
                                layout
                            >                                <div 
                                    className="case-study-image" 
                                    style={{ 
                                        backgroundImage: `url(${study.image})`, 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                        backgroundColor: study.category === 'web' ? '#8b5cf6' : 
                                                        study.category === 'mobile' ? '#06b6d4' : 
                                                        study.category === 'software' ? '#f97316' : 
                                                        '#22c55e'
                                    }}
                                >
                                    {/* Show the placeholder icon with reduced opacity */}
                                    <div className="image-placeholder" style={{ opacity: 0.3 }}>
                                        {categories.find(cat => cat.id === study.category)?.icon}
                                    </div>
                                    <div className="case-study-overlay">
                                        <div className="overlay-buttons">
                                            <button className="overlay-btn">
                                                <FaExternalLinkAlt />
                                                <span>View Demo</span>
                                            </button>
                                            <button className="overlay-btn">
                                                <FaGithub />
                                                <span>View Code</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="case-study-content">
                                    <div className="case-study-header">
                                        <h3 className="case-study-title">{study.title}</h3>
                                        <div className="case-study-category">
                                            {categories.find(cat => cat.id === study.category)?.name}
                                        </div>
                                    </div>

                                    <div className="case-study-challenge">
                                        <h4>Challenge</h4>
                                        <p>{study.challenge}</p>
                                    </div>

                                    <div className="case-study-solution">
                                        <h4>Solution</h4>
                                        <p>{study.solution}</p>
                                    </div>

                                    <div className="case-study-technologies">
                                        <h4>Technologies</h4>
                                        <div className="tech-stack">
                                            {study.technologies.map((tech, index) => (
                                                <div 
                                                    key={index}
                                                    className="tech-item"
                                                    style={{ color: tech.color }}
                                                >
                                                    {tech.icon}
                                                    <span>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="case-study-features">
                                        <h4>Key Features</h4>
                                        <ul>
                                            {study.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="case-study-metrics">
                                        <h4>Results & Metrics</h4>
                                        <div className="metrics-grid">
                                            {Object.entries(study.metrics).map(([key, value]) => (
                                                <div key={key} className="metric-item">
                                                    <span className="metric-label">{key}</span>
                                                    <span className="metric-value">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div 
                    className="case-studies__cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3>Ready to Build Your Solution?</h3>
                    <p>Let's discuss how we can solve your business challenges with innovative technology.</p>
                    <motion.button 
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Start Your Project
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudies;
