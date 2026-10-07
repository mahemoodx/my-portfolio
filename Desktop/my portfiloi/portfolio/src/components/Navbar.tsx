import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
  ]

  // IntersectionObserver to detect active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact', 'resume']
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-full backdrop-blur-xl border transition-all duration-300"
        style={{
          width: '620px',
          height: '68px',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          borderColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 10px 35px rgba(100, 100, 150, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '8px',
          paddingRight: '8px'
        }}
      >
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center h-full gap-0.5">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick()}
              className="relative px-4 py-2 text-sm font-semibold transition-all duration-300 text-slate-700"
            >
              {activeSection === link.name.toLowerCase() ? (
                <motion.div
                  layoutId={`navPill-${activeSection}`}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)'
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                />
              ) : null}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? 'text-white'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-center h-full px-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-56 rounded-3xl backdrop-blur-xl border border-white/80 shadow-lg p-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick()}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? 'text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                style={
                  activeSection === link.name.toLowerCase()
                    ? {
                        background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)'
                      }
                    : {}
                }
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
