import styled from "styled-components"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Twitter from '../assets/Twitter.png'

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
            <img src={github} alt="" width={36}/>
            <img src={linkedin} alt="" width={36}/>
            <img src={Twitter} alt="" width={36}/>
        </ImageBox>
        </LogNav>
        <hr/>
       
    </Container>

    
    <Container>
        <LogNav>
       
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
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

`

const LogNav = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }



`
const Navigation = styled.div`
 display: flex;
 margin-left:30%;
  gap: 30px;
  margin-top: 10px;
  font-size: 1.2rem;

  nav {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 20px;
    font-size: 1rem;
    margin-top: 15px;
    margin-left:5%;
    border:1px solid black;
  }

  @media (max-width: 480px) {
    gap: 15px;
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
    gap: 10px;
    display:flex;
  }

  @media (max-width: 480px) {
    gap: 5px;
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
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

`