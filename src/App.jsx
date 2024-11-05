
import Header from './Static/Header'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Myproject from './Pages/Myproject'
import Mytech from './Pages/Mytech'
import Contact from './Pages/Contact'
import Footer from './Static/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
         <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Mytech" element={<Mytech/>} />
            <Route path="/Myproject" element={<Myproject/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
