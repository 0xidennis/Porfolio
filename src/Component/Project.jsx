import React, { useEffect, useRef, useState } from 'react';
import './Project.css'
import Cards from './Cards';
import Proj from '../assets/proj.png'
import chain from '../assets/chain.png'
import git from '../assets/github.png'
const Project = () => {
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
      Projects
      </h1>
      <p className={`popup-paragraph ${isVisible ? 'show' : ''}`}>
      Things I’ve built so far
      </p>
    </div>
    <div className='card-d'>
    <Cards car="border" img={Proj} title="Project Tile goes here" par="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    sub="Tech stack : HTML , JavaScript, SASS, React" im={chain} footer="Live Preview" foot="View Code" image={git} cardimg="simple"/>
    <Cards car="border" img={Proj} title="Project Tile goes here" par="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    sub="Tech stack : HTML , JavaScript, SASS, React" im={chain} footer="Live Preview" foot="View Code" image={git} cardimg="simple"/>
    <Cards car="border" img={Proj} title="Project Tile goes here" par="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    sub="Tech stack : HTML , JavaScript, SASS, React" im={chain} footer="Live Preview" foot="View Code" image={git} cardimg="simple"/> <br />
     {/* <div className='car-b'>
            <Cards down="border" imge={Proj} titl="Project Tile goes here" parg="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    subs="Tech stack : HTML , JavaScript, SASS, React" ime={chain} foote="Live Preview" footr="View Code" imag={git}/>
    <Cards down="border" imge={Proj} titl="Project Tile goes here" parg="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    subs="Tech stack : HTML , JavaScript, SASS, React" ime={chain} foote="Live Preview" footr="View Code" imag={git}/>
    <Cards down="border" imge={Proj} titl="Project Tile goes here" parg="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    subs="Tech stack : HTML , JavaScript, SASS, React" ime={chain} foote="Live Preview" footr="View Code" imag={git}/>
     </div> */}
    </div>
    </div>
  )
}

export default Project