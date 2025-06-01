import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiUser, 
  FiMessageSquare,
  FiClock,
  FiGlobe
} from 'react-icons/fi';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaInstagram 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      content: 'hello@4onetwodev.uk',
      link: 'mailto:hello@4onetwodev.uk'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      content: '+44 (0) 123 456 7890',
      link: 'tel:+44123456789'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      content: 'London, United Kingdom',
      link: '#'
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaGithub, url: '#', label: 'GitHub' },
    { icon: FaInstagram, url: '#', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Ready to start your next project? Let's create something amazing together.</p>
        </motion.div>

        <div className="contact-content">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              data-aos="fade-right"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Tell us about your project and we'll get back to you within 24 hours.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser className="form-icon" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail className="form-icon" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FiGlobe className="form-icon" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare className="form-icon" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="btn-icon" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✅ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              data-aos="fade-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="info-header">
                <h3>Let's Connect</h3>
                <p>Choose your preferred way to reach out to us.</p>
              </div>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card-icon">
                      <info.icon />
                    </div>
                    <div className="card-content">
                      <h4>{info.title}</h4>
                      {info.link !== '#' ? (
                        <a href={info.link} className="contact-link">
                          {info.content}
                        </a>
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <motion.div 
                className="cta-box"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Ready to Start?</h4>
                <p>Let's discuss your project and bring your ideas to life.</p>
                <motion.a 
                  href="#hero" 
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact-bg">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-gradient"></div>
      </div>
    </section>
  );
};

export default Contact;