import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 py-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
        style={{ maxWidth: '1230px' }}
      >
        {/* Single Glassmorphism Container */}
        <div
          className="rounded-2xl border transition-all duration-300 p-12"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 10px 40px rgba(100, 100, 150, 0.12)',
          }}
        >
          {/* Main Content - Centered */}
          <div className="text-center">
            {/* Name with Gradient */}
            <h2
              className="font-bold mb-2"
              style={{
                fontSize: 'clamp(28px, 6vw, 32px)',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vakkapella Mahamood Basha
            </h2>

            {/* Role & Location */}
            <p className="text-lg font-semibold text-slate-700 mb-1">
              Frontend Developer
            </p>
            <p className="text-slate-600 mb-6">
              Kurnool, Andhra Pradesh
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/mahemood-basha-675049327"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/mahemoodx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                }}
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/itz.mahe/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.459.686-2.015 1.039-.556.353-1.059.852-1.47 1.48-.411.628-.716 1.355-.921 2.143-.266.789-.467 1.659-.527 2.937C.005 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.936.206.789.521 1.517.921 2.144.353.544.859 1.048 1.471 1.481.556.353 1.236.776 2.015 1.039.789.263 1.659.464 2.937.527 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.28-.063 2.147-.264 2.936-.527.790-.263 1.469-.686 2.025-1.039.552-.353 1.058-.852 1.47-1.48.413-.627.721-1.355.926-2.143.267-.789.468-1.659.528-2.937.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.060-1.277-.261-2.148-.528-2.937-.206-.789-.513-1.521-.926-2.148-.353-.544-.859-1.048-1.47-1.481-.556-.353-1.236-.776-2.025-1.039-.789-.263-1.656-.464-2.936-.527C15.667.005 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.355 1.056.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.056.355-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.355-1.056-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.056-.355 2.227-.408 1.264-.061 1.646-.07 4.849-.07l-.003-.002zm4.771 1.206a1.305 1.305 0 100 2.607 1.305 1.305 0 000-2.607zm-9.474 1.862a5.037 5.037 0 100 10.074 5.037 5.037 0 000-10.074zm0 2.167a2.87 2.87 0 110 5.74 2.87 2.87 0 010-5.74z" />
                </svg>
              </motion.a>
            </div>

            {/* Divider */}
            <div
              className="my-6"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
              }}
            />

            {/* Made with ❤️ */}
            <p className="text-slate-600 mb-2">
              Made with{' '}
              <span style={{ color: '#EC4899' }}>❤️</span> by Vakkapella Mahamood Basha
            </p>

            {/* Copyright */}
            <p className="text-sm text-slate-500">
              © {currentYear} Vakkapella Mahamood Basha. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
