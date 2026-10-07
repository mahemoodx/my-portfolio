import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech – Computer Science & Business Systems',
      institution: 'Pulla Reddy Engineering College',
      location: 'Kurnool, Andhra Pradesh',
      period: '2023 – 2027',
      gpa: 'CGPA: 7.8',
      description: 'Pursuing B.Tech degree with focus on software development and business systems integration.',
      highlights: ['Software Engineering', 'Web Development', 'Database Management', 'Business Systems'],
    },
    {
      degree: 'Diploma – Computer Engineering',
      institution: 'Government Polytechnic for Minorities',
      location: 'Kurnool, Andhra Pradesh',
      period: '2021 – 2024',
      gpa: 'Percentage: 69%',
      description: 'Completed diploma with hands-on experience in computer engineering fundamentals.',
      highlights: ['Computer Fundamentals', 'Programming Basics', 'Hardware Systems', 'Networking'],
    },
  ]

  return (
    <section id="education" className="py-20 border-t border-slate-300/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-slate-300/50 bg-white/40 hover:bg-white/50 hover:border-slate-300/70 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-sm text-slate-600">{edu.location}</p>
                </div>
                <div className="text-right text-sm">
                  <div className="px-3 py-1.5 rounded-lg border border-blue-400/40 bg-blue-50 text-blue-700 font-medium">
                    {edu.gpa}
                  </div>
                </div>
              </div>

              {/* Period */}
              <div className="flex items-center space-x-2 text-slate-600 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed">{edu.description}</p>

              {/* Highlights */}
              <div>
                <p className="text-sm text-slate-600 mb-3">Key Subjects</p>
                <div className="grid grid-cols-2 gap-3">
                  {edu.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="px-3 py-2 rounded-lg border border-slate-300/50 bg-white/40 text-sm text-slate-700"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
