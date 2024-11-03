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
width:1600px;
/* border: 1px solid black; */
margin-left: 8%;
margin-top: 5%;

@media (max-width: 1200px) {
    width: 90%;
    margin-left: 5%;
    margin-top:6%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 10%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin-top: 10%;
  }

`
const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content:space-between;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`
const TextBox = styled.div`
 font-size: 2rem;
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
border-radius:800px;
border:8px solid #00C0FD;
width: 500px;
  height: auto;
  animation: float 3s ease-in-out infinite;
img{
    border-radius:inherit;
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