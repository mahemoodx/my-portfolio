import { motion } from 'framer-motion'

const Hero = () => {
  const handleViewResume = () => {
    const resumeSection = document.getElementById('resume')
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleExploreProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Compact Centered Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -3 }}
          className="w-full rounded-3xl border backdrop-blur-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
          style={{
            maxWidth: '950px',
            padding: '60px 48px',
            background: 'rgba(255, 255, 255, 0.55)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
            borderWidth: '1px'
          }}
        >
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            {/* Name - Single Line */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)'
              }}
            >
              Mahamood Basha
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-900 font-semibold"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 2rem)'
              }}
            >
              Frontend Developer
            </motion.h2>

            {/* Student Line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-600 font-medium"
              style={{
                fontSize: 'clamp(0.95rem, 3vw, 1.125rem)'
              }}
            >
              Computer Science & Business Systems Student
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewResume}
                className="px-8 py-3 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)'
                }}
              >
                View Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreProjects}
                className="px-8 py-3 rounded-full font-semibold hover:transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  color: '#1e293b',
                  border: '1px solid rgba(148, 163, 184, 0.3)'
                }}
              >
                Explore Projects
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
