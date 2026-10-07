import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      
      <div className="min-h-screen overflow-x-hidden">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
          style={{ scaleX }}
        />

        {/* SINGLE NAVBAR - Fixed at Top */}
        <Navbar />

        <div className="relative z-10">
          {/* Home Section */}
          <section id="home" className="relative">
            <main style={{ maxWidth: '1100px', width: 'calc(100% - 48px)', margin: '0 auto' }}>
              <Hero />
            </main>
          </section>

          {/* About Section */}
          <section id="about" className="relative">
            <main style={{ maxWidth: '1100px', width: 'calc(100% - 48px)', margin: '0 auto' }}>
              <About />
            </main>
          </section>

          {/* Skills Section */}
          <section id="skills" className="relative">
            <main style={{ maxWidth: '1100px', width: 'calc(100% - 48px)', margin: '0 auto' }}>
              <Skills />
            </main>
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative">
            <main style={{ maxWidth: '1100px', width: 'calc(100% - 48px)', margin: '0 auto' }}>
              <Projects />
            </main>
          </section>

          {/* Experience Section */}
          <section id="experience" className="relative">
            <main style={{ maxWidth: '1100px', width: 'calc(100% - 48px)', margin: '0 auto' }}>
              <Experience />
            </main>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative">
            <main style={{ maxWidth: '1100px', width: 'calc(100% - 48px)', margin: '0 auto' }}>
              <Contact />
            </main>
          </section>

          {/* Resume Section */}
          <section id="resume" className="relative">
            <main style={{ maxWidth: '1100px', width: 'calc(100% - 48px)', margin: '0 auto' }}>
              <Resume />
            </main>
          </section>

          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  )
}

export default App
