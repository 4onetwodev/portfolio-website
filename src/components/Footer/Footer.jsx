import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiArrowRight,
  FiHeart
} from 'react-icons/fi';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#about' },
    { name: 'Mobile Apps', href: '#about' },
    { name: 'Software Development', href: '#about' },
    { name: 'IoT Applications', href: '#about' },
    { name: 'Consulting', href: '#contact' }
  ];

  const technologies = [
    { icon: FaReact, name: 'React' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaPython, name: 'Python' },
    { icon: FaAws, name: 'AWS' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/company/4onetwodev', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/4onetwodev', label: 'Twitter' },
    { icon: FaGithub, url: 'https://github.com/4onetwodev', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://instagram.com/4onetwodev', label: 'Instagram' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="newsletter-text">
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest tech insights and project updates.</p>
            </div>
            <div className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <motion.button 
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiArrowRight />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div 
              className="footer-section company-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="footer-logo">
                <motion.h3 
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.05 }}
                  className="logo-text"
                >
                  4OneTwoDev
                </motion.h3>
              </div>
              <p className="company-description">
                We're a passionate team of developers creating innovative digital solutions 
                that drive business growth and transform ideas into reality.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <FiMail className="contact-icon" />
                  <a href="mailto:hello@4onetwodev.uk">contact@4onetwodev.uk</a>
                </div>
                <div className="contact-item">
                  <FiPhone className="contact-icon" />
                  <a href="tel:+96171487293">+961 (71) 478 293</a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4>Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a 
                      href={service.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies & Social */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4>Technologies</h4>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="tech-item"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <tech.icon className="tech-icon" />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <motion.div 
            className="footer-bottom-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="copyright">
              <p>
                © {currentYear} 4OneTwoDev. Made with{' '}
                <motion.span 
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                  <FiHeart className="heart-icon" />
                </motion.span>
                {' '}with passion
              </p>
            </div>
            <div className="legal-links">
              <a href="#contact">Privacy Policy</a>
              <a href="#contact">Terms of Service</a>
              <a href="#contact">Cookie Policy</a>
            </div>
            <motion.button 
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ↑
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg">
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>
      </div>
    </footer>
  );
};

export default Footer;