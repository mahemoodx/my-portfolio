import { motion } from 'framer-motion'
import { UserRound, Heart, Code2 } from 'lucide-react'
import { useEffect } from 'react'

const About = () => {
  // Inject pulse animation keyframe
  useEffect(() => {
    if (!document.getElementById('aboutPhotoPulseAnimation')) {
      const style = document.createElement('style')
      style.id = 'aboutPhotoPulseAnimation'
      style.textContent = `
        @keyframes aboutPhotoPulse {
          0%, 100% {
            opacity: 0.65;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  const cards = [
    {
      icon: UserRound,
      title: 'Who Am I',
      description: "I'm a B.Tech Computer Science & Business Systems student and frontend developer from Kurnool, Andhra Pradesh. I enjoy building clean, responsive and user-friendly web interfaces using modern frontend technologies."
    },
    {
      icon: Heart,
      title: 'My Interests',
      description: 'I enjoy creating modern web interfaces, learning frontend technologies, working on real-world projects, and improving my problem-solving skills.'
    },
    {
      icon: Code2,
      title: 'What I Do',
      description: 'I design and develop responsive websites and user-friendly interfaces using HTML, CSS, JavaScript, React.js and modern web technologies.'
    }
  ]

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" style={{ maxWidth: '1050px', margin: '0 auto' }}>
            {/* Left Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start items-start"
            >
              <div className="relative w-full max-w-xs">
                {/* Floating ambient circle - behind photo */}
                <div
                  style={{
                    position: 'absolute',
                    width: '55px',
                    height: '55px',
                    top: '-25px',
                    right: '-25px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.85) 0%, rgba(139, 92, 246, 0.60) 45%, rgba(139, 92, 246, 0.25) 75%, transparent 100%)',
                    filter: 'blur(1px)',
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.45), 0 0 55px rgba(139, 92, 246, 0.22)',
                    zIndex: 0,
                    animation: 'aboutPhotoPulse 3.2s ease-in-out infinite',
                    pointerEvents: 'none'
                  }}
                />
                
                {/* Image with gradient border frame */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-1 rounded-3xl shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)',
                    boxShadow: '0 15px 40px rgba(80, 70, 160, 0.15)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {/* Inner white border */}
                  <div className="p-0.5 rounded-3xl bg-white">
                    {/* Image */}
                    <img
                      src="/profile.jpg"
                      alt="Mahamood Basha"
                      className="w-full rounded-3xl object-cover"
                      style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '350 / 450',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {cards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.65)',
                      backdropFilter: 'blur(18px)',
                      border: '1px solid rgba(190, 205, 235, 0.5)',
                      boxShadow: '0 8px 25px rgba(60, 70, 100, 0.08)',
                      minHeight: '135px'
                    }}
                  >
                    {/* Icon Box */}
                    <motion.div
                      whileHover={{ translateY: '-2px', scale: 1.03 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="flex-shrink-0 rounded-lg flex items-center justify-center shadow-lg"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 45%, #8b5cf6 75%, #ec4899 100%)',
                        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.20)'
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
