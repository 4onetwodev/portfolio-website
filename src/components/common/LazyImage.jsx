import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LazyImage.css';

const LazyImage = ({ src, alt, className, placeholder, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div ref={imgRef} className={`lazy-image-container ${className || ''}`} {...props}>
            {/* Placeholder/Loading state */}
            <motion.div 
                className="image-placeholder"
                initial={{ opacity: 1 }}
                animate={{ opacity: isLoaded ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: placeholder || 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)'
                }}
            >
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            </motion.div>

            {/* Actual Image */}
            {isInView && (
                <motion.img
                    src={src}
                    alt={alt}
                    onLoad={handleLoad}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="lazy-image"
                />
            )}
        </div>
    );
};

export default LazyImage;
