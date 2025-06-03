import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaCode, FaMobile, FaRocket, FaWifi, FaGithub, FaExternalLinkAlt, 
    FaReact, FaNodeJs, FaDatabase, FaMicrochip, FaChartLine, FaShoppingCart,
    FaCog, FaCloud, FaLock, FaUsers
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiArduino, SiRaspberrypi } from 'react-icons/si';
import './CaseStudies.css';

const CaseStudies = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredCase, setHoveredCase] = useState(null);

    const categories = [
        { id: 'all', name: 'All Solutions', icon: <FaCog /> },
        { id: 'web', name: 'Web Development', icon: <FaCode /> },
        { id: 'mobile', name: 'Mobile Apps', icon: <FaMobile /> },
        { id: 'software', name: 'Software Solutions', icon: <FaRocket /> },
        { id: 'iot', name: 'IoT Applications', icon: <FaWifi /> }
    ];

    const caseStudies = [
        {
            id: 1,
            title: 'E-Commerce Platform Transformation',
            category: 'web',
            challenge: 'Local retailer needed to establish online presence during digital transformation',
            solution: 'Built a full-stack e-commerce platform with inventory management and payment integration',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06b6d4' }
            ],
            features: [
                'Real-time inventory tracking',
                'Secure payment processing',
                'Admin dashboard with analytics',
                'Mobile-responsive design',
                'SEO optimization'
            ],
            metrics: {
                'Performance': '95% Lighthouse Score',
                'Load Time': '< 2 seconds',
                'Uptime': '99.9%',
                'User Experience': 'Mobile-first design'
            },
            image: '/images/case-study-ecommerce.jpg',
            demoUrl: '#demo-ecommerce',
            codeUrl: '#code-ecommerce'
        },
        {
            id: 2,
            title: 'Smart Inventory Management App',
            category: 'mobile',
            challenge: 'Warehouse operations needed real-time inventory tracking across multiple locations',
            solution: 'Cross-platform mobile app with barcode scanning and cloud synchronization',
            technologies: [
                { icon: <FaMobile />, name: 'React Native', color: '#61dafb' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <FaCloud />, name: 'AWS', color: '#ff9900' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' }
            ],
            features: [
                'Barcode/QR code scanning',
                'Offline data synchronization',
                'Real-time updates across devices',
                'Location-based inventory',
                'Analytics dashboard'
            ],
            metrics: {
                'Efficiency': '40% faster operations',
                'Accuracy': '99.5% scan accuracy',
                'Sync Time': '< 5 seconds',
                'Platform': 'iOS & Android'
            },
            image: '/images/case-study-inventory.jpg',
            demoUrl: '#demo-inventory',
            codeUrl: '#code-inventory'
        },
        {
            id: 3,
            title: 'Customer Relationship Management System',
            category: 'software',
            challenge: 'Growing business needed centralized customer data and automated workflows',
            solution: 'Custom CRM with lead tracking, automated communications, and reporting',
            technologies: [
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <SiExpress />, name: 'Express.js', color: '#000000' },
                { icon: <FaDatabase />, name: 'PostgreSQL', color: '#336791' }
            ],
            features: [
                'Lead scoring and tracking',
                'Automated email campaigns',
                'Sales pipeline management',
                'Custom reporting tools',
                'Third-party integrations'
            ],
            metrics: {
                'Lead Conversion': '+35% improvement',
                'Time Saved': '20 hours/week',
                'Data Accuracy': '98% clean data',
                'User Adoption': '95% team usage'
            },
            image: '/images/case-study-crm.jpg',
            demoUrl: '#demo-crm',
            codeUrl: '#code-crm'
        },
        {
            id: 4,
            title: 'Smart Building Monitoring System',
            category: 'iot',
            challenge: 'Office building needed energy optimization and environmental monitoring',
            solution: 'IoT sensor network with real-time monitoring and automated climate control',
            technologies: [
                { icon: <SiArduino />, name: 'Arduino', color: '#00979d' },
                { icon: <SiRaspberrypi />, name: 'Raspberry Pi', color: '#c51a4a' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <FaReact />, name: 'React Dashboard', color: '#61dafb' }
            ],
            features: [
                'Temperature & humidity sensors',
                'Energy consumption tracking',
                'Automated HVAC control',
                'Real-time alerts',
                'Historical data analysis'
            ],
            metrics: {
                'Energy Savings': '25% reduction',
                'Response Time': '< 1 second',
                'Sensor Network': '50+ devices',
                'Uptime': '99.8% availability'
            },
            image: '/images/case-study-iot.jpg',
            demoUrl: '#demo-iot',
            codeUrl: '#code-iot'
        },
        {
            id: 5,
            title: 'Progressive Web App for Food Delivery',
            category: 'web',
            challenge: 'Restaurant chain wanted app-like experience without mobile app development costs',
            solution: 'Progressive Web App with offline ordering and push notifications',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaDatabase />, name: 'IndexedDB', color: '#336791' },
                { icon: <FaCog />, name: 'Service Workers', color: '#4285f4' }
            ],
            features: [
                'Offline ordering capability',
                'Push notifications',
                'GPS location tracking',
                'Payment integration',
                'Order status updates'
            ],
            metrics: {
                'Install Rate': '35% of users',
                'Offline Usage': '20% of orders',
                'Load Time': '< 1.5 seconds',
                'Engagement': '+50% return visits'
            },
            image: '/images/case-study-pwa.jpg',
            demoUrl: '#demo-pwa',
            codeUrl: '#code-pwa'
        },
        {
            id: 6,
            title: 'Fleet Management Dashboard',
            category: 'software',
            challenge: 'Logistics company needed real-time vehicle tracking and route optimization',
            solution: 'Comprehensive dashboard with GPS tracking, fuel monitoring, and maintenance scheduling',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <FaDatabase />, name: 'TimescaleDB', color: '#336791' },
                { icon: <FaChartLine />, name: 'Chart.js', color: '#ff6384' }
            ],
            features: [
                'Real-time GPS tracking',
                'Route optimization',
                'Fuel consumption analytics',
                'Maintenance scheduling',
                'Driver performance metrics'
            ],
            metrics: {
                'Fuel Savings': '18% reduction',
                'Route Efficiency': '+22% improvement',
                'Maintenance Costs': '30% reduction',
                'Fleet Size': '200+ vehicles'
            },
            image: '/images/case-study-fleet.jpg',
            demoUrl: '#demo-fleet',
            codeUrl: '#code-fleet'
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
                            >
                                <div className="case-study-image">
                                    <div className="image-placeholder">
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
