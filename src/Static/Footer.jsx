import styled from "styled-components"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Twitter from '../assets/Twitter.png'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div>
      <Container>
        <LogNav>
            <TextBox>
              <p>+2349034340791</p>
              <p>meneweifeanyi@gmail.com</p>
            </TextBox>
            <ImageBox>
            <Link to='https://github.com/dashboard'><img src={github} alt="" width={36}/></Link>
            <Link to='https://www.linkedin.com/in/menewe-ifeanyi/'><img src={linkedin} alt="" width={36}/></Link>
           <Link to='https://twitter.com/0xdenn1s'> <img src={Twitter} alt="" width={36}/></Link>
        </ImageBox>
        </LogNav>
        <hr/>
       
    </Container>

    
    <Container>
        <LogNav>
       
            <Navigation>
              <Link to='/'>
                <nav>
                Home
                </nav>
                </Link>
                <Link to='/About'>
                <nav>
                About
                </nav>
                </Link>
                <Link to='/Mytech'>
                <nav>
                Tech stack
                </nav>
                </Link>
                <Link to='/Myproject'>
                <nav>
                Projects
                </nav>
                </Link>
                <Link to='/Contact'>
                <nav>
                Contact
                </nav>
                </Link>
            </Navigation>
        </LogNav>
       
    </Container>
      </div>
    </div>
  )
}

export default Footer


const Container = styled.div`
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:-30px;
  hr{
  width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0px;
    width:80%;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

`

const LogNav = styled.div`
display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1px;
    margin-left:-30px;
  }



`
const Navigation = styled.div`
 display: flex;
 margin-left:30%;
  gap: 30px;
  margin-top: 10px;
  font-size: 1.2rem;
  a{
    text-decoration:none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }

  nav {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 1px;
    font-size: 1rem;
    margin-top: 15px;
    margin-left:1px;
    /* border:1px solid black; */
  }

  @media (max-width: 480px) {
    gap: 10px;
    font-size: 0.9rem;
    flex-wrap: wrap;
    justify-content: center;
  }

`

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 30px;

  img {
    width: 35px;
   
  }

  @media (max-width: 768px) {
    gap: 1px;
    display:flex;
  }

  @media (max-width: 480px) {
    gap: 5px;
    margin-left:-10px;
    img {
      width: 30px;
    }
  }

`
const TextBox = styled.div`
 display: flex;
  align-items: center;
  font-size: 1rem;

  p {
    margin: 45px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    margin-left:-1px;
    p{
      margin:13px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

`