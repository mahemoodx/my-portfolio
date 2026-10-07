import { motion } from 'framer-motion'

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full"
    >
      {/* Main image container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-300/20 to-cyan-300/20 border border-slate-300/50 backdrop-blur-sm">
        <img
          src="/profile.jpg"
          alt="Vakkapella Mahamood Basha - Frontend Developer"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-slate-900/10" />
      </div>
    </motion.div>
  )
}

export default ProfileImage
