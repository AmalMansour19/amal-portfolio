

import Navbar from "./Components/Navbar";
// import Contact from "./Components/Contact";
import Hero from "./section/Hero";
// import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
// import Footer from "./Components/Footer";
import "./App.css";
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

