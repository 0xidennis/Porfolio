
import './Experi.css'
import carbon from '../assets/carbon_location.png'
import building from '../assets/mdi_office-building.png'
const Experi = () => {
  return (
    <div>
    <div className='container-ex'>
        <div className='experien'>
            <h1>Work Experience</h1>
        </div>
        <div className='exper-h'>
            <h3>full stack developer</h3>
            <p>Training</p>
        </div>
        <div className='location'>
          <img src={building} alt="" /><span>Sail innovation lab</span>
          <img src={carbon} alt="" /><span>ikorodu,lagos</span>
          <img src="" alt="" /><span className='last'>july 2024 - current</span>
          <hr />
        </div>
    </div>
    <div className='container-ex'>
        <div className='exper-h'>
            <h3>Junior Web Developer</h3>
            <p>internship</p>
        </div>
        <div className='location'>
          <img src={building} alt="" /><span>Digiplus connect</span>
          <img src={carbon} alt="" /><span>Bengaluru</span>
          <img src="" alt="" /><span className='last'>Nov 2023 - April 2024</span>
          <hr />
        </div>
    </div>
    <div className='container-ex'>
        <div className='exper-h'>
            <h3>UI/UX designer</h3>
            <p>Freelancing</p>
        </div>
        <div className='location'>
          <img src={building} alt="" /><span>self employed</span>
          <img src={carbon} alt="" /><span>lagos</span>
          <img src="" alt="" /><span className='last'>april 2022 - April 202</span>
          <hr />
        </div>
    </div>
    <div className='container-ex'>
        <div className='experien'>
            <h1>Education</h1>
        </div>
        <div className='exper-h'>
            <h3>Physics with electronics</h3>
            <p></p>
        </div>
        <div className='location'>
          <img src={building} alt="" /><span>Lagos state polytechnic</span>
          <img src={carbon} alt="" /><span>Bengaluru</span>
          <img src="" alt="" /><span className='last'>Nov 20214 - jan 2021</span>
          <hr />
        </div>
    </div>
    </div>
    
  )
}

export default Experi