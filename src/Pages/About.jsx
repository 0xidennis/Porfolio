import React, { useEffect, useState } from 'react';
import './About.css'
import Experi from '../Component/Experi';
const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    
    setAnimate(true);
  }, []);

  return (
    <div>  <h1 className={`header ${animate ? 'animate' : ''}`}>
    About Me
  </h1>
  <p className={`paragraph ${animate ? 'animate' : ''}`}>
  I am a seasoned Fullstack Software Developer with a strong foundation in both frontend and backend technologies. With extensive experience in HTML, CSS, JavaScript, React.js, Node.js, and TypeScript, I specialize in building scalable, user-friendly web applications. My development skills are complemented by a solid understanding of product design tools, enabling me to bridge the gap between design and development.

During my internship at Digiplus Connect, I honed my skills in real-world projects, collaborating closely with cross-functional teams to deliver impactful solutions. Currently, I focus on freelancing, where I take on diverse projects that challenge my technical abilities while providing value to clients.

I am passionate about continuous learning and always open to opportunities that allow me to grow as a developer and contribute to innovative projects.
  </p>
  <h1 className={`head ${animate ? 'animate' : ''}`}>
    <Experi/>
  </h1>
  
  </div>
  )
}

export default About