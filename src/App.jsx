import Content from './Components/content.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Technologies from './Components/technologies.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Email from './Components/Email.jsx'
import Certificate from './Components/Certificates/Certificate.jsx'

function App() {
  
  return (
  <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
  
  <div className='fixed top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-fixed'></div>
  
  
  
  <div className=' container mx-auto'>
    <Navbar />
    <Content />
    <About />
    <Technologies />
    <Experience/>
    <Certificate/>
    <Email/>
    <Contact/>
    
  </div>
</div>
  )
}

export default App
