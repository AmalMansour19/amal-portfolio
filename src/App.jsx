

import Navbar from "./Components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Services from "./section/Services";
import TechMarquee from "./section/TechMarquee";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Journey from "./section/Journey";
import CTA from "./section/CTA";
import Footer from "./section/Footer";
import Contact from "./section/Contact";


function App() {
return(
  <>
   <Navbar/>
   <Hero/>
   <TechMarquee/>
   <About/>
    <Services/>
    <Skills/>
    
    <Projects/>
    <Journey/>
    <CTA/>
    <Contact />
   <Footer/>
  </>
)
  
}




export default App;

