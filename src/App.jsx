
import Navbar from "./Components/Navbar";

import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Services from "./section/Services";
import Projects from "./section/Projects";
import Education from "./section/Education";
import Certifications from "./section/Certifications";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
