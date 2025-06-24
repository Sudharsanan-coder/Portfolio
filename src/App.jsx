import Content from './Components/content.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Technologies from './Components/technologies.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Email from './Components/Email.jsx'
import Certificate from './Components/Certificates/Certificate.jsx'
import StarryNightSky from './Components/StarryNightSky.jsx'

function App() {
  
  return (
    <div>
      <StarryNightSky></StarryNightSky>
  <div className='overflow-x-hidden text-neutral-300  selection:bg-cyan-300 selection:text-cyan-900'>
    
  <div className=' container mx-auto'>
    
    <Navbar />
    <Content />
    <About />
    <Technologies />
    
    
    <Email/>
    <Contact/>
    
  </div>
  
  </div>
  </div>
  )
}

export default App
