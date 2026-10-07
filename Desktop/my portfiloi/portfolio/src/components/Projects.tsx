import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hotel Management System',
      description: 'Full-stack platform for hotel operations with room booking, restaurant ordering, and admin dashboard',
      image: '🏨',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
      github: 'https://github.com/mahemoodx/hotel_management',
      demo: '#',
    },
    {
      id: 2,
      title: 'AI Student Placement Prediction',
      description: 'Machine learning system predicting placement outcomes with interactive analytics dashboard',
      image: '📊',
      technologies: ['React', 'FastAPI', 'Python', 'Scikit-learn', 'Pandas'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'TurfBook - Sports Venue Booking',
      description: 'Real-time sports facility booking platform with slot management and admin panel',
      image: '⚽',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 border-t border-blue-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col rounded-2xl border border-blue-200/50 bg-white/40 backdrop-blur-md hover:bg-white/50 hover:border-blue-300/70 hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100/50 to-purple-100/50 flex items-center justify-center overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Always show Code button */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github !== '#' ? project.github : '#'}
                    target={project.github !== '#' ? '_blank' : undefined}
                    rel={project.github !== '#' ? 'noopener noreferrer' : undefined}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="hidden sm:inline">Code</span>
                  </motion.a>
                  {project.demo !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
