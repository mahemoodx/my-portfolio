import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'IBM Cloud Computing',
      issuer: 'IBM',
      date: '2024',
      description: 'Fundamentals of cloud computing, including cloud architecture and deployment models.',
      skills: ['Cloud Architecture', 'IBM Cloud Services', 'Deployment Models', 'Cloud Security'],
    },
    {
      title: 'Web Development Certification',
      issuer: 'IBM',
      date: '2024',
      description: 'Comprehensive web development certification covering HTML, CSS, JavaScript, and modern web technologies.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Technologies', 'Responsive Design'],
    },
    {
      title: 'TCS iON Career Edge',
      issuer: 'TCS iON',
      date: '2023',
      description: 'Career readiness program focusing on professional skills and workplace readiness.',
      skills: ['Professional Skills', 'Workplace Readiness', 'Industry Knowledge', 'Career Planning'],
    },
    {
      title: 'TCS iON Soft Skills',
      issuer: 'TCS iON',
      date: '2023',
      description: 'Soft skills development program covering communication and interpersonal skills.',
      skills: ['Communication', 'Teamwork', 'Interpersonal Skills', 'Problem Solving'],
    },
  ]

  return (
    <section id="certifications" className="py-20 border-t border-slate-300/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Certifications</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-slate-300/50 bg-white/40 hover:bg-white/50 hover:border-slate-300/70 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.title}</h3>
                  <p className="text-blue-600 text-sm">{cert.issuer}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              </div>

              {/* Date and Description */}
              <p className="text-slate-600 text-sm mb-4">{cert.date}</p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{cert.description}</p>

              {/* Skills */}
              <div>
                <p className="text-xs text-slate-600 mb-3">Skills Validated</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs border border-green-300/50"
                    >
                      {skill}
                    </span>
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

export default Certifications
