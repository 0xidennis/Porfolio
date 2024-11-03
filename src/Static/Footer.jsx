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
            <Logo>
                <img src="./PRINCEWILL fav.png" alt="" width={35} />
            </Logo>
            <TextBox>
              <p>+2349034340791</p>
              <p>meneweifeanyi@gmail.com</p>
            </TextBox>
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
       
    </Container>

    <hr width={1700}/>
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

const Logo = styled.div`
display: flex;
  align-items: center;

  img {
    width: 35px;
  }


`
const Navigation = styled.div`
 display: flex;
  gap: 30px;
  margin-top: 20px;
  font-size: 1.2rem;

  nav {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 20px;
    font-size: 1rem;
    margin-top: 15px;
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
  gap: 15px;

  img {
    width: 36px;
  }

  @media (max-width: 768px) {
    gap: 10px;
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
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

`