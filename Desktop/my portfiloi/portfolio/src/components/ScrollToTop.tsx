import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ translateY: '-3px' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 rounded-full transition-all duration-250"
          style={{
            width: '52px',
            height: '52px',
            background: 'rgba(255, 255, 255, 0.70)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            const element = e.currentTarget as HTMLButtonElement
            element.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.15)'
            element.style.borderColor = 'rgba(99, 102, 241, 0.4)'
          }}
          onMouseLeave={(e) => {
            const element = e.currentTarget as HTMLButtonElement
            element.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
            element.style.borderColor = 'rgba(255, 255, 255, 0.8)'
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-slate-600" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop