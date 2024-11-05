 import html from '../assets/html.png'
import materialui from '../assets/materialui.png'
import nodejs from '../assets/nodejs.png'
import githubfill from '../assets/github.png'
import vscode from '../assets/vscode.png'
import greensock from '../assets/greensock.png'
import giticon from '../assets/giticon.png'
import logossass from '../assets/logos_sass.png'
import tailwind from '../assets/tailwind.png'
import logosbootstrap from '../assets/logos_bootstrap.png'
import Vector from '../assets/Vector.png'
import react from '../assets/react.png'
import js from '../assets/js.png'
import css from '../assets/css.png'
import './Techimages.css'
const Techimages = () => {
  return (
    <div>
    <div className="carousel-container">
      <div className="carousel-row left-to-right">
        <img src={html} alt="Image 1" className="carousel-image" />
        <img src={materialui} alt="Image 2" className="carousel-image" />
        <img src={nodejs} alt="Image 3" className="carousel-image" />
        {/* <img src={githubfill} alt="Image 3" className="carousel-image" /> */}
        <img src={githubfill} alt="Image 3" className="carousel-image" />
        <img src={vscode} alt="Image 3" className="carousel-image" />
        <img src={greensock} alt="Image 3" className="carousel-image" />
        <img src={js} alt="Image 6" className="carousel-image" />
        <img src={css} alt="Image 6" className="carousel-image" />
      </div>
      <div className="carousel-row right-to-left">
        <img src={giticon} alt="Image 4" className="carousel-image" />
        <img src={logossass} alt="Image 5" className="carousel-image" />
        <img src={tailwind} alt="Image 6" className="carousel-image" />
        <img src={logosbootstrap} alt="Image 6" className="carousel-image" />
        <img src={Vector} alt="Image 6" className="carousel-image" />
        <img src={react} alt="Image 6" className="carousel-image" />
       
      </div>
    </div>
    </div>
  )
}

export default Techimages