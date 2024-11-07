import styled from "styled-components"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Twitter from '../assets/Twitter.png'
import { IoReorderTwoOutline } from "react-icons/io5";
import { useState } from 'react';
import Sidebar from "./Sidebar";
import {Link} from 'react-router-dom'


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div>
    <Container>
        <LogNav>
            
                <img src="./PRINCEWILL fav.png" alt="" width={35} />
            
            <Navigation>
              <Link to="/">
                <nav>
                Home
                </nav>
                </Link>
                <Link to="About">
                <nav>
                About
                </nav>
                </Link>
                <Link to="Mytech">
                <nav>
                Tech stack
                </nav>
                </Link>
                <Link to="Myproject">
                <nav>
                Projects
                </nav>
                </Link>
                <Link to="Contact">
                <nav>
                Contact
                </nav>
                </Link>
            </Navigation>
            <ImageBox>
            <Link to='https://github.com/dashboard'><img src={github} alt="" width={36}/></Link>
            <Link to='https://www.linkedin.com/in/menewe-ifeanyi/'><img src={linkedin} alt="" width={36}/></Link>
           <Link to='https://twitter.com/0xdenn1s'> <img src={Twitter} alt="" width={36}/></Link>
        </ImageBox>
        <Buttons>
                
                <SideNav onClick={toggleSidebar}>
                    <IoReorderTwoOutline />
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </SideNav>
            </Buttons>
        </LogNav>
       
    </Container>
    {/* {toggle === false ? null : <Sidebar toggle={toggle} setToggle={setToggle} />} */}
    </div>
  )
}

export default Header


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffff;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Flex container for the items in the navbar
const LogNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-width: 100%;
  margin-left:5%;

`;

// Logo styling
const Logo = styled.img`
  width: 10%;
  cursor: pointer;
`;


const Navigation = styled.nav`
  display: flex;
  gap: 50px;
  
  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;


const ImageBox = styled.div`
  display: flex;
  gap: 40px;
  margin-right:2rem;

  img {
    width: 36px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;

// Hamburger button styling
const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

// Hamburger icon styling
const SideNav = styled.div`
  display: none;
  color: black;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; 
  }
`;

