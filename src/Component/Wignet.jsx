import React, { useEffect, useRef, useState } from 'react';
import './Wignet.css'


const Wignet = () => {
    const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.2;
      
      if (sectionTop < triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
        <div className="scroll-popup-section" ref={sectionRef}>
      <h1 className={`popup-heading ${isVisible ? 'show' : ''}`}>
      My Tech Stack
      </h1>
      <p className={`popup-paragraph ${isVisible ? 'show' : ''}`}>
      Technologies I’ve been working with recently
      </p>
    </div>
    </div>
  )
}

export default Wignet