
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
            <h3>Junior Web Developer</h3>
            <p>internship</p>
        </div>
        <div className='location'>
          <img src={building} alt="" /><span>Dr. Rajkumar’s Learning App</span>
          <img src={carbon} alt="" /><span>Bengaluru</span>
          <img src="" alt="" /><span className='last'>Sep 2021 - Dec 2021</span>
          <hr />
        </div>
    </div>
    <div className='container-ex'>
        <div className='exper-h'>
            <h3>Junior Web Developer</h3>
            <p>internship</p>
        </div>
        <div className='location'>
          <img src={building} alt="" /><span>Dr. Rajkumar’s Learning App</span>
          <img src={carbon} alt="" /><span>Bengaluru</span>
          <img src="" alt="" /><span className='last'>Sep 2021 - Dec 2021</span>
          <hr />
        </div>
    </div>
    <div className='container-ex'>
        <div className='experien'>
            <h1>Education</h1>
        </div>
        <div className='exper-h'>
            <h3>Junior Web Developer</h3>
            <p>internship</p>
        </div>
        <div className='location'>
          <img src={building} alt="" /><span>Dr. Rajkumar’s Learning App</span>
          <img src={carbon} alt="" /><span>Bengaluru</span>
          <img src="" alt="" /><span className='last'>Sep 2021 - Dec 2021</span>
          <hr />
        </div>
    </div>
    </div>
    
  )
}

export default Experi