import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaMobile } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import LazyImage from '../common/LazyImage';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
            category: 'web',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <SiExpress />, name: 'Express', color: '#000000' }
            ],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team workspace features.',
            category: 'web',
            technologies: [
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <FaDatabase />, name: 'PostgreSQL', color: '#336791' },
                { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06b6d4' }
            ],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 3,
            title: 'Fitness Tracking Mobile App',
            description: 'Cross-platform mobile app for fitness tracking with workout plans and progress analytics.',
            category: 'mobile',
            technologies: [
                { icon: <FaMobile />, name: 'React Native', color: '#61dafb' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' }
            ],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 4,
            title: 'Restaurant Management System',
            description: 'Complete restaurant POS system with order management, inventory tracking, and analytics dashboard.',
            category: 'web',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
                { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06b6d4' }
            ],
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 5,
            title: 'Real Estate Platform',
            description: 'Property listing and management platform with virtual tours and mortgage calculator.',
            category: 'web',
            technologies: [
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <FaDatabase />, name: 'PostgreSQL', color: '#336791' }
            ],
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media management with scheduling and performance tracking.',
            category: 'web',
            technologies: [
                { icon: <FaReact />, name: 'React', color: '#61dafb' },
                { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
                { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
                { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' }
            ],
            image: 'https://images.unsplash.com/photo-1611095790444-1dfa35ad5d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Apps' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'featured', name: 'Featured' }
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'featured') return project.featured;
        return project.category === filter;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0 },
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

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <motion.div 
                    className="portfolio__header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-badge">Our Work</div>
                    <h2 className="section-title">
                        Featured Projects &
                        <span className="title-gradient"> Success Stories</span>
                    </h2>
                    <p className="section-description">
                        Explore our latest projects showcasing innovative solutions and cutting-edge technology implementations.
                    </p>
                </motion.div>

                <motion.div 
                    className="portfolio__filters"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                            onClick={() => setFilter(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div 
                    className="portfolio__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                variants={itemVariants}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                onHoverStart={() => setHoveredProject(project.id)}
                                onHoverEnd={() => setHoveredProject(null)}
                                whileHover={{ y: -10 }}
                            >
                                <div className="project-image">
                                    <LazyImage 
                                        src={project.image} 
                                        alt={project.title}
                                        placeholder="linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)"
                                    />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <motion.a
                                                href={project.liveUrl}
                                                className="project-link"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaExternalLinkAlt />
                                            </motion.a>
                                            <motion.a
                                                href={project.githubUrl}
                                                className="project-link"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub />
                                            </motion.a>
                                        </div>
                                    </div>
                                    {project.featured && (
                                        <div className="featured-badge">Featured</div>
                                    )}
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    
                                    <div className="project-technologies">
                                        {project.technologies.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="tech-badge"
                                                style={{ '--tech-color': tech.color }}
                                                whileHover={{ 
                                                    scale: 1.1,
                                                    color: tech.color
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                {tech.icon}
                                                <span>{tech.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div 
                    className="portfolio__cta"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h3>Have a Project in Mind?</h3>
                    <p>Let's discuss how we can bring your ideas to life with cutting-edge technology.</p>
                    <motion.button 
                        className="btn btn--primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Start a Project
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;