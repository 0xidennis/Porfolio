import { Link } from "react-router-dom"
import styled from "styled-components"

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const test = () =>{
        setToggle(false)
    }
    return(
        <SidebarContainer isOpen={isOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"  onClick={toggleSidebar}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

      <ul>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="About">
        <li>About</li>
        </Link>
        <Link to="Mytech">
        <li>Techstack</li>
        </Link>
        <Link to="Myproject">
        <li>Project</li>
        </Link>
        <Link to="Contact">
        <li>Contact</li>
        </Link>
      </ul>
    </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: #333;
  color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index:1;
  text-decoration:none;
  svg{
    width: 20px;
  }
  ul{
    list-style:none;
    font-size:20px;
    color:white;
    text-decoration:none;
  }
`; 