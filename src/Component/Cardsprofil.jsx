import React from 'react'
import { useState, useEffect } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
// import {chain} from '../assets/chain.png'
// import git from '../assets/github.png'
import styled from 'styled-components';
import Cards from './Cards';
import {Link} from 'react-router-dom'

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// Sample data for the cards
const cardData = [
  { img: "./will.png", title: 'princewill fashion', par: 'e-commerce', sub: 'Tech stack : HTML ,css, JavaScript', im:"./chain.png",footer: <Link>view</Link>, image: './github-fill.png', foot: <Link to='https://github.com/0xidennis/Princewill'>github</Link> },
  { img: "./digi.png", title: 'Digiplus connect', par: 'e-commerce', sub: 'Tech stack: HTML ,css, JavaScript,react,bootstrap,anime,tailwind', im: './chain.png', footer: <Link>view</Link>, image: './github-fill.png', foot: <Link to='https://github.com/Digiplus-connect-cafe/DIGIPLUS-CONNECT-CAFE-WEBSITE'>github</Link> },
  { img: './TEEspace.png', title: 'TEESPACE', par: 'e-commerce', sub: 'Tech stack : HTML ,css, JavaScript,boostrap', im: './chain.png', footer: <Link>view</Link>, image: './github-fill.png', foot: <Link to='https://github.com/abifol/E-COMMERCE-APP'>github</Link> },
  { img: './Dwolla.png', title: 'Dwolla', par: 'Portfolio', sub: 'Tech stack : HTML ,css, JavaScript,boostrap,', im: './chain.png', footer: <Link to='https://0xidennis.github.io/dwollar/'>view</Link>, image: './github-fill.png', foot: <Link to='https://github.com/0xidennis/dwollar'>github</Link> },
  { img: './dev.png', title: 'Portfolio', par: 'cv', sub: 'Tech stack : HTML ,css, JavaScript,react,boostrap', im: './chain.png', footer: <Link to='https://0xidennis.github.io/ify_resume/'>view</Link>, image: './github-fill.png', foot: <Link to='https://github.com/0xidennis/ify_resume'>github</Link> },
  { img: './Nexcent.png', title: 'Nexcent', par: 'Education', sub: 'Tech stack : HTML ,css, JavaScript,boostrap', im: './chain.png', footer: <Link to='https://0xidennis.github.io/nexcent/'>view</Link>, image: './github-fill.png', foot: <Link to='https://github.com/0xidennis/nexcent'>github</Link> },
];

const Cardsprofil = () => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation settings for the cards
  const trail = useTrail(cardData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 200, friction: 20, duration: 500 },
  });
  return (
    <CardListContainer>
    {trail.map((style, index) => (
      <Cards
        key={index}
        {...cardData[index]}
        style={style} // Pass animation style to each card
      />
    ))}
  </CardListContainer>
  )
}

export default Cardsprofil