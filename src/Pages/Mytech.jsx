import React, { useEffect, useState } from 'react';
import './About.css'
import Techimages from '../Component/Techimages';

const Mytech = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    
    setAnimate(true);
  }, []);
  return (
    <div>  <h1 className={`header ${animate ? 'animate' : ''}`}>
    My Tech Stack
  </h1>
  <p className={`paragraph ${animate ? 'animate' : ''}`}>
  Technologies I’ve been working with recently
  </p>
  <p className={`paragraph ${animate ? 'animate' : ''}`}>
  <Techimages/>
  </p>
 
  
  </div>
  )
}

export default Mytech