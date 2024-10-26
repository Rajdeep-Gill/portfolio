import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      const newPosition = { x: ev.clientX, y: ev.clientY };
      setMousePosition(newPosition);
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default CursorEffect;
