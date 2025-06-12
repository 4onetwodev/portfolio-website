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
    
    // Add logging to check image paths
    useEffect(() => {
        console.log('CaseStudies component mounted');
        // Log the first few case studies
        caseStudies.slice(0, 3).forEach(study => {
            console.log(`Case study "${study.title}" image path: ${study.image}`);
            // Check if image exists
            const img = new Image();
            img.onload = () => console.log(`✅ Image ${study.image} loaded successfully`);
            img.onerror = () => console.log(`❌ Error loading image ${study.image}`);
            img.src = study.image;
        });
    }, []);

    const categories = [
        { id: 'all', name: 'All Solutions', icon: <FaCog /> },
        { id: 'web', name: 'Web Development', icon: <FaCode /> },
        { id: 'mobile', name: 'Mobile Apps', icon: <FaMobile /> },
        { id: 'software', name: 'Software Solutions', icon: <FaRocket /> },
        { id: 'iot', name: 'IoT Applications', icon: <FaWifi /> }
    ];
}
