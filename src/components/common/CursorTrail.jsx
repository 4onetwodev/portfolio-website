import React, { useEffect, useState } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails(prev => [...prev.slice(-10), newTrail]);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up old trails
    const interval = setInterval(() => {
      setTrails(prev => prev.filter(trail => Date.now() - trail.id < 1000));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail-dot"
          style={{
            left: trail.x,
            top: trail.y,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
