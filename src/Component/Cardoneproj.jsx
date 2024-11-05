
import Proj from '../assets/proj.png'
import chain from '../assets/chain.png'
import git from '../assets/github.png'
import Cardone from './Cardone';

const Cardoneproj = () => {
  return (
    <div>
     <div className='car-b'>
            <Cardone down="border" imge={Proj} titl="Project Tile goes here" parg="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    subs="Tech stack : HTML , JavaScript, SASS, React" ime={chain} foote="Live Preview" footr="View Code" imag={git}/>
    <Cardone down="border" imge={Proj} titl="Project Tile goes here" parg="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    subs="Tech stack : HTML , JavaScript, SASS, React" ime={chain} foote="Live Preview" footr="View Code" imag={git}/>
    <Cardone down="border" imge={Proj} titl="Project Tile goes here" parg="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    subs="Tech stack : HTML , JavaScript, SASS, React" ime={chain} foote="Live Preview" footr="View Code" imag={git}/>
     </div> 
    </div>
  )
}

export default Cardoneproj