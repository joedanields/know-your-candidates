import { motion } from 'framer-motion'
import { HiOutlineCalendar } from 'react-icons/hi2'

const MotionHeading = motion.h1

function Hero({ t }) {
  return (
    <section className="relative overflow-hidden pb-12 text-white">
      <div className="pointer-events-none absolute -left-20 top-24 h-52 w-52 rounded-full bg-violet-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 -top-8 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 pb-6 pt-4 sm:px-10 sm:pt-6">
        <MotionHeading
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl"
        >
          {t.heroTitle}
        </MotionHeading>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-white/10 px-4 py-2 text-lg text-indigo-50 backdrop-blur-md">
          <HiOutlineCalendar className="text-emerald-300" />
          {t.heroSubtitle}
        </p>
      </div>
      <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 py-4 text-center italic text-amber-900/90">
        “{t.heroQuote}”
      </div>
    </section>
  )
}

export default Hero
