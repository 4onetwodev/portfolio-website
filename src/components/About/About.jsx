import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaMobile, FaCode, FaRocket, FaMicrochip, FaWifi } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiDocker, SiKubernetes, SiArduino, SiRaspberrypi } from 'react-icons/si';
import './About.css';

const About = () => {
    const technologies = [
        { icon: <FaReact />, name: 'React', color: '#61dafb' },
        { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
        { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
        { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
        { icon: <FaAws />, name: 'AWS', color: '#ff9900' },
        { icon: <FaMobile />, name: 'React Native', color: '#61dafb' },
        { icon: <SiArduino />, name: 'Arduino', color: '#00979d' },
        { icon: <SiRaspberrypi />, name: 'Raspberry Pi', color: '#c51a4a' },
    ];

    const services = [
        {
            icon: <FaCode />,
            title: 'Web Development',
            description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
            features: ['React & Next.js', 'Full-Stack Solutions', 'E-commerce Platforms', 'Progressive Web Apps']
        },
        {
            icon: <FaMobile />,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android devices.',
            features: ['React Native', 'Native iOS & Android', 'App Store Deployment', 'Push Notifications']
        },
        {
            icon: <FaRocket />,
            title: 'Software Development',
            description: 'Custom software solutions tailored to your business needs and requirements.',
            features: ['Desktop Applications', 'API Development', 'Database Design', 'System Integration']
        },
        {
            icon: <FaWifi />,
            title: 'IoT Applications',
            description: 'Internet of Things solutions connecting devices and enabling smart automation.',
            features: ['Device Integration', 'Real-time Monitoring', 'Data Analytics', 'Cloud Connectivity']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
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
        <section id="about" className="about">
            <div className="container">
                <motion.div 
                    className="about__header"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="section-badge" variants={itemVariants}>
                        About Us
                    </motion.div>
                    <motion.h2 className="section-title" variants={itemVariants}>
                        We Build Digital Solutions That
                        <span className="title-gradient"> Drive Results</span>
                    </motion.h2>
                    <motion.p className="section-description" variants={itemVariants}>
                        Specializing in web development, mobile applications, software solutions, and IoT implementations. 
                        We transform complex business challenges into innovative digital experiences through proven methodologies and cutting-edge technology.
                    </motion.p>
                </motion.div>

                <div className="about__content">
                    <motion.div 
                        className="about__story"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="story-card">
                            <h3>Our Story</h3>
                            <p>
                                Founded with a passion for innovation, 4OneTwoDev specializes in creating 
                                cutting-edge digital solutions across web development, mobile applications, 
                                custom software, and IoT implementations. We believe in the power of clean code, 
                                thoughtful design, and seamless user experiences.
                            </p>
                            <p>
                                Our mission is to help businesses leverage technology to achieve their 
                                goals, whether that's building a responsive web platform, developing a 
                                mobile app, creating custom software, or implementing smart IoT solutions 
                                that connect and automate your operations.
                            </p>
                            <div className="story-stats">
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Commitment Level</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">4</span>
                                    <span className="stat-label">Core Specializations</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">Support Ready</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="about__technologies"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3>Technologies We Love</h3>
                        <div className="tech-grid">
                            {technologies.map((tech, index) => (
                                <motion.div 
                                    key={tech.name}
                                    className="tech-item"
                                    whileHover={{ 
                                        scale: 1.1,
                                        color: tech.color,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="tech-icon" style={{ color: tech.color }}>
                                        {tech.icon}
                                    </div>
                                    <span className="tech-name">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    className="about__services"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.h3 
                        className="services-title"
                        variants={itemVariants}
                    >
                        What We Do Best
                    </motion.h3>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div 
                                key={service.title}
                                className="service-card"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -10,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;