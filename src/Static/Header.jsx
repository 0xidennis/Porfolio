import styled from "styled-components"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Twitter from '../assets/Twitter.png'
import { IoReorderTwoOutline } from "react-icons/io5";
import { useState } from 'react';
import Sidebar from "./Sidebar";


const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
  return (
    <div>
    <Container>
        <LogNav>
            <Logo>
                <img src="./PRINCEWILL fav.png" alt="" width={35} />
            </Logo>
            <Navigation>
                <nav>
                Home
                </nav>
                <nav>
                About
                </nav>
                <nav>
                Tech stack
                </nav>
                <nav>
                Projects
                </nav>
                <nav>
                Contact
                </nav>
            </Navigation>
            <ImageBox>
            <img src={github} alt="" width={36}/>
        </ImageBox>
        <ImageBox>
            <img src={Twitter} alt="" width={36}/>
        </ImageBox>
        <ImageBox>
            <img src={linkedin} alt="" width={36}/>
        </ImageBox>
        </LogNav>
        <Buttons>
                
                <SideNav onClick={handleToggle}>
                    <IoReorderTwoOutline />
                </SideNav>
            </Buttons>
    </Container>
    {toggle === false ? null : <Sidebar toggle={toggle} setToggle={setToggle} />}
    </div>
  )
}

export default Header


const Container = styled.div`
/* border:1px solid black; */
width:1600px;
align-items:center;
justify-content:space-between;
margin-left:150px;
margin-top:20px;
@media (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
    align-items:center;
    justify-content:center;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    align-items:center;
  }

`

const LogNav = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
cursor: pointer;
/* border: 1px solid black; */

@media (max-width: 768px) {
    /* flex-direction: column; */
    align-items: flex-start;
    align-items: center;
  }




`
const Logo = styled.div`
align-items:center;
@media (max-width: 768px) {
    margin-bottom: -90px;
    margin-left:20px;
  }


`
const Navigation = styled.div`
display: flex;
align-items:center;
gap: 30px;
margin-right:100px;
cursor: pointer;
font-size:20px;

@media (max-width: 768px) {
    font-size: 16px;
    gap: 20px;
    margin-right: 0;
    display:none;
  }
`

const ImageBox = styled.div`
gap:-40px;
justify-content:space-around;
margin-left:-800px;
cursor: pointer;
img{
    margin-left:0px;
}
@media (max-width: 768px) {
    margin-left: 0;
    gap: 10px;
    display: none;
  }




`
const SideNav = styled.div`
display: none;
font-size: 30px;
margin-left: -30px;
@media (max-width: 768px) {
    display: block;
    font-size: 24px;
    margin-left: 300px;
    margin-top:28px;
  }


`
const Buttons = styled.div`
display: flex;
align-items: center;

@media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }


`