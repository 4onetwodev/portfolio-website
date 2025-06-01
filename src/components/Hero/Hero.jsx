import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { FaCode, FaMobile, FaCloud } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero__background">
                <motion.div 
                    className="hero__gradient"
                    animate={{
                        background: [
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="hero__particles">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            initial={{ 
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                scale: 0
                            }}
                            animate={{
                                y: [null, Math.random() * window.innerHeight],
                                x: [null, Math.random() * window.innerWidth],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container">
                <motion.div 
                    className="hero__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero__text">
                        <motion.div 
                            className="hero__badge"
                            variants={itemVariants}
                        >
                            <span>🚀 Leading Development Solutions</span>
                        </motion.div>

                        <motion.h1 
                            className="hero__title"
                            variants={itemVariants}
                        >
                            Transform Your Ideas Into
                            <span className="hero__title-gradient"> Digital Reality</span>
                        </motion.h1>

                        <motion.p 
                            className="hero__description"
                            variants={itemVariants}
                        >
                            We're a cutting-edge development company that builds innovative web applications, 
                            mobile solutions, and cloud infrastructure to accelerate your business growth.
                        </motion.p>

                        <motion.div 
                            className="hero__actions"
                            variants={itemVariants}
                        >
                            <motion.button 
                                className="btn btn--primary hero__cta"
                                onClick={() => scrollToSection('portfolio')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Our Work
                                <HiArrowRight className="btn-icon" />
                            </motion.button>

                            <motion.button 
                                className="btn btn--outline hero__demo"
                                onClick={() => scrollToSection('about')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HiPlay className="btn-icon" />
                                Learn More
                            </motion.button>
                        </motion.div>

                        <motion.div 
                            className="hero__stats"
                            variants={itemVariants}
                        >
                            <div className="stat">
                                <span className="stat__number">50+</span>
                                <span className="stat__label">Projects Delivered</span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">25+</span>
                                <span className="stat__label">Happy Clients</span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">3+</span>
                                <span className="stat__label">Years Experience</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="hero__visual"
                        variants={itemVariants}
                    >
                        <div className="hero__code-block">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-title">innovation.js</span>
                            </div>
                            <div className="code-content">
                                <motion.div 
                                    className="code-line"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    <span className="code-keyword">const</span> 
                                    <span className="code-variable"> success</span> 
                                    <span className="code-operator"> = </span>
                                    <span className="code-function">build</span>
                                    <span className="code-punctuation">(</span>
                                </motion.div>
                                <motion.div 
                                    className="code-line code-line--indent"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.5, duration: 1 }}
                                >
                                    <span className="code-property">innovation</span>
                                    <span className="code-punctuation">,</span>
                                </motion.div>
                                <motion.div 
                                    className="code-line code-line--indent"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 2, duration: 1 }}
                                >
                                    <span className="code-property">quality</span>
                                    <span className="code-punctuation">,</span>
                                </motion.div>
                                <motion.div 
                                    className="code-line code-line--indent"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 2.5, duration: 1 }}
                                >
                                    <span className="code-property">dedication</span>
                                </motion.div>
                                <motion.div 
                                    className="code-line"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 3, duration: 1 }}
                                >
                                    <span className="code-punctuation">);</span>
                                </motion.div>
                            </div>
                        </div>

                        <div className="hero__floating-elements">
                            <motion.div 
                                className="floating-element floating-element--web"
                                animate={{ 
                                    y: [0, -20, 0],
                                    x: mousePosition.x * 0.02,
                                }}
                                transition={{ 
                                    y: { duration: 3, repeat: Infinity },
                                    x: { type: "spring", stiffness: 100 }
                                }}
                            >
                                <FaCode />
                            </motion.div>
                            <motion.div 
                                className="floating-element floating-element--mobile"
                                animate={{ 
                                    y: [0, 20, 0],
                                    x: mousePosition.x * -0.02,
                                }}
                                transition={{ 
                                    y: { duration: 4, repeat: Infinity },
                                    x: { type: "spring", stiffness: 100 }
                                }}
                            >
                                <FaMobile />
                            </motion.div>
                            <motion.div 
                                className="floating-element floating-element--cloud"
                                animate={{ 
                                    y: [0, -15, 0],
                                    x: mousePosition.x * 0.015,
                                }}
                                transition={{ 
                                    y: { duration: 5, repeat: Infinity },
                                    x: { type: "spring", stiffness: 100 }
                                }}
                            >
                                <FaCloud />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div 
                className="hero__scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                onClick={() => scrollToSection('about')}
            >
                <span>Scroll to explore</span>
                <div className="scroll-arrow"></div>
            </motion.div>
        </section>
    );
};

export default Hero;