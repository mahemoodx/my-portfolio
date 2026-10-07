import { motion } from 'framer-motion'

const Resume = () => {
  const handlePreview = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section id="resume" className="py-24 border-t border-blue-100/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume
          </h2>
        </motion.div>

        {/* Main Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="p-10 rounded-2xl border border-blue-200/40 bg-white/40 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-blue-200/60 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center gap-8">
            {/* Icon */}
            <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Download My Resume</h3>
              <p className="text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
                My resume contains detailed information about my education, work experience, technical skills, projects, and professional experience.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <motion.a
                href="/resume.pdf"
                download="Vakkapella_Mahamood_Basha_Resume.pdf"
                whileHover={{ y: -2 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </motion.a>

              <motion.button
                onClick={handlePreview}
                whileHover={{ y: -2 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-lg border border-blue-300 bg-white/60 text-slate-900 font-semibold hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Preview</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Quick Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl border border-blue-200/40 bg-white/40 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-3">Education</h4>
              <p className="text-slate-700 font-semibold mb-1">B.Tech – Computer Science & Business Systems</p>
              <p className="text-slate-600 text-sm">Graduating 2027</p>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl border border-blue-200/40 bg-white/40 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-3">Location</h4>
              <p className="text-slate-700 font-semibold">Kurnool, Andhra Pradesh</p>
            </motion.div>

            {/* Focus */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl border border-blue-200/40 bg-white/40 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-3">Focus</h4>
              <p className="text-slate-700 font-semibold">Frontend Development</p>
              <p className="text-slate-600 text-sm">Web Development</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
