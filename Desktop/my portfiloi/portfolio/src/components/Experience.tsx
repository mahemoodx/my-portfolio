import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Digital Marketing & E-Commerce Intern',
      company: 'Craftscy Innovations Pvt Ltd',
      location: 'Kurnool, Andhra Pradesh',
      period: '11/2025 – 06/2026',
      duration: '8 months',
      description: 'Managed Amazon and website product listings, developed automation workflows using AI tools.',
      responsibilities: [
        'Updated product descriptions, prices, and details on Amazon and company website',
        'Added and updated products using WordPress CMS',
        'Performed product photo/video editing',
        'Supported Amazon PPC campaigns',
        'Created n8n automation workflows',
        'Coordinated with marketing team',
      ],
    },
    {
      title: 'Production Assistant',
      company: 'Schneider Electric',
      location: 'Bengaluru',
      period: '11/2023 – 01/2024',
      duration: '3 months',
      description: 'Coordinated production operations in manufacturing environment with focus on scheduling and quality.',
      responsibilities: [
        'Worked in structured manufacturing environment following safety protocols',
        'Coordinated production scheduling',
        'Managed rotational shift operations',
        'Handled daily production targets',
        'Participated in quality control',
        'Maintained production documentation',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 border-t border-blue-100/50">
      <div style={{ maxWidth: '1100px', width: 'calc(100% - 80px)', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center px-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        <div className="px-4" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '28px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(18px)',
                border: '1px solid rgba(180, 200, 240, 0.55)',
                borderRadius: '22px',
                boxShadow: '0 15px 35px rgba(60, 70, 110, 0.10)',
                padding: '32px',
                minHeight: '300px',
                transition: 'all 300ms ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const element = e.currentTarget as HTMLDivElement
                element.style.boxShadow = '0 20px 40px rgba(70, 80, 130, 0.14)'
                element.style.borderColor = 'rgba(99, 102, 241, 0.35)'
              }}
              onMouseLeave={(e) => {
                const element = e.currentTarget as HTMLDivElement
                element.style.boxShadow = '0 15px 35px rgba(60, 70, 110, 0.10)'
                element.style.borderColor = 'rgba(180, 200, 240, 0.55)'
              }}
            >
              {/* Left accent border */}
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  bottom: '0',
                  width: '4px',
                  borderRadius: '22px 0 0 22px',
                  background: 'linear-gradient(180deg, #3B82F6, #8B5CF6, #EC4899)',
                  opacity: 0.6
                }}
              />

              {/* Main content with left padding for accent */}
              <div style={{ paddingLeft: '8px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', gap: '24px' }}>
                  <div style={{ flex: 1 }}>
                    {/* Title with icon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#111827', margin: 0 }}>
                        {exp.title}
                      </h3>
                    </div>

                    {/* Company and location */}
                    <p style={{ fontSize: '16px', fontWeight: 600, color: '#3B82F6', margin: '8px 0' }}>
                      {exp.company}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '14px', marginTop: '6px' }}>
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Right: Duration and dates */}
                  <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#111827', margin: '0 0 8px 0' }}>
                      {exp.duration}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '13px', justifyContent: 'flex-end' }}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: '#52627A', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px', margin: '20px 0' }}>
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                    Key Responsibilities
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px 28px' }}>
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" style={{ marginTop: '2px' }} />
                        <span style={{ fontSize: '15px', lineHeight: 1.5, color: '#52627A' }}>
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
