import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.header 
            className={`header ${isScrolled ? 'header--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <div className="header__content">
                    <motion.div 
                        className="header__logo"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span className="logo-text">4OneTwoDev</span>
                    </motion.div>

                    <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                        <ul className="nav-list">
                            <li>
                                <button 
                                    onClick={() => scrollToSection('hero')}
                                    className="nav-link"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('about')}
                                    className="nav-link"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('portfolio')}
                                    className="nav-link"
                                >
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('contact')}
                                    className="nav-link"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <motion.button 
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('contact')}
                    >
                        Get Started
                    </motion.button>

                    <button 
                        className="mobile-menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;