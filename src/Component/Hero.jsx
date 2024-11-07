import styled from "styled-components"
import preview from '../assets/preview.png'

const Hero = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>Hi 👋, <br />
                        My name is <br />
                           <span> Menewe <span>ifeanyi</span></span> <br />
                          I build things for web</h1>
                </TextBox>
                <ImageBox>
                    <img src={preview} alt="" />
                </ImageBox>
            </Wrapper>

        </Container>
    </div>
  )
}

export default Hero

const Container = styled.div`
width:100%;
margin-right: 100%;
margin-top: 1%;
min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffff;

@media (max-width: 1200px) {
    width: 90%;
    margin-left: 7%;
    margin-top:4%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20%;
    margin-top: 10%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 20%;
    margin-top: 10%;
  }

`
const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
flex-direction: row;
  max-width: 1200px;
  width: 100%;
  margin-right:20%;
  gap: 100px;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

`
const TextBox = styled.div`
 font-size: 1.7rem;
  color: black;
  opacity: 0;
  transform: scale(0.8);
  animation: popup 1.5s ease-out forwards;
 
  @keyframes popup {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
span{
    color: #13B0F5;
}
 h1 :first-child{
    color:#E70FAA;
 }
 @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`
const ImageBox =styled.div`
border-radius:1800px;
border:8px solid ;
width: 500px;
  height: auto;
  animation: float 3s ease-in-out infinite;
  border-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff) 1;
img{
    border-radius:800px;
    width:inherit;
}


@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); 
  }
}
@media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }

`