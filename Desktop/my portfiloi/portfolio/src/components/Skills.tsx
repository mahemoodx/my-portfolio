import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'HTML5', 'CSS3', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'FastAPI'],
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: ['SQL', 'PostgreSQL', 'Data Modeling'],
    },
    {
      category: 'Programming',
      icon: '💻',
      skills: ['JavaScript', 'Python', 'Java'],
    },
    {
      category: 'Tools & Dev',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Linux'],
    },
    {
      category: 'Problem Solving',
      icon: '🧠',
      skills: ['Algorithms', 'Data Structures', 'System Design'],
    },
  ]

  return (
    <section id="skills" className="py-24 border-t border-blue-100/50">
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
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl border border-blue-200/50 bg-white/40 backdrop-blur-md hover:bg-white/50 hover:border-blue-300/70 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {category.category}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 text-xs font-semibold border border-blue-200/50 hover:border-blue-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Subtle accent bar */}
              <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
