import styled from 'styled-components';
import { animated } from 'react-spring';

const Cards = ({ img, title, par, sub, im, footer, image, foot, style }) => {
  return (
    <CardContainer style={style}>
      <Image src={img} alt="Card Image" />
      <Header>{title}</Header>
      <Paragraph>{par}</Paragraph>
      <SubText>{sub}</SubText>
      <Footer>
        <p><img src={im} alt="Footer Icon" width={25} /> {footer}</p>
        <p><img src={image} alt="Footer Icon" width={25} /> {foot}</p>
      </Footer>
    </CardContainer>
  )
}

export default Cards

const CardContainer = styled(animated.div)`
  width: 100%;
  max-width: 300px;
  margin: 15px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  cursor: pointer;
  transform: translateY(50px);
  animation: fadeInUp 1s ease forwards;
  opacity: 0; /* Start with opacity 0 for pop-up animation */

  &:hover {
    transform: scale(1.05); /* Hover animation */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  color: #555;
`;

const SubText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: #777;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #333;
  img{
    width: 15px;
  }
  p{
    text-decoration:none;
    text-decoration-line:none;
  }
`;
