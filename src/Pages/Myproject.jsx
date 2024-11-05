
import Cardsprofil from '../Component/Cardsprofil';
import React, { useEffect, useState } from 'react';
import './About.css'



const Myproject = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    
    setAnimate(true);
  }, []);
  return (
    <div>  <h1 className={`header ${animate ? 'animate' : ''}`}>
    My Projects
  </h1>
  <p className={`paragraph ${animate ? 'animate' : ''}`}>
  Things I’ve built so far
  </p>
  <h1 className={`head ${animate ? 'animate' : ''}`}>
    <Cardsprofil/>
  </h1>
  
  </div>
  )
}

export default Myproject