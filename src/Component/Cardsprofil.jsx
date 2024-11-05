import React from 'react'
import { useState, useEffect } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import Cards from './Cards';

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// Sample data for the cards
const cardData = [
  { img: 'image1.jpg', title: 'Card 1', par: 'Description 1', sub: 'Subtext 1', im: 'icon1.png', footer: 'Link 1', image: 'icon2.png', foot: 'Link 2' },
  { img: 'image2.jpg', title: 'Card 2', par: 'Description 2', sub: 'Subtext 2', im: 'icon1.png', footer: 'Link 1', image: 'icon2.png', foot: 'Link 2' },
  { img: 'image3.jpg', title: 'Card 3', par: 'Description 3', sub: 'Subtext 3', im: 'icon1.png', footer: 'Link 1', image: 'icon2.png', foot: 'Link 2' },
  { img: 'image4.jpg', title: 'Card 4', par: 'Description 4', sub: 'Subtext 4', im: 'icon1.png', footer: 'Link 1', image: 'icon2.png', foot: 'Link 2' },
  { img: 'image5.jpg', title: 'Card 5', par: 'Description 5', sub: 'Subtext 5', im: 'icon1.png', footer: 'Link 1', image: 'icon2.png', foot: 'Link 2' },
  { img: 'image6.jpg', title: 'Card 6', par: 'Description 6', sub: 'Subtext 6', im: 'icon1.png', footer: 'Link 1', image: 'icon2.png', foot: 'Link 2' },
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