import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Skills from "./sections/Skills"
import Testimonials from "./sections/Testimonials"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import ParticlesBackground from "./components/ParticlesBackground"
import React from "react"
import IntroAnimation from "./components/IntroAnimation"
import EducationCertifications from "./sections/EducationCertifications"

function App() {

  const [introDone, setIntroDone] = React.useState(false);

  return (
    
<>
 {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

  {introDone && (
    <div className="relative gradient text-white">

      {/* <ParticlesBackground /> */}
      <Navbar />
      <Home />
      <About />
      <EducationCertifications/>
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )}

</>
  )
}

export default App
