import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  HiArrowLongLeft,
  HiArrowLongRight,
  HiChartBarSquare,
  HiScale,
  HiShieldExclamation,
  HiUsers,
  HiBuildingLibrary,
  HiBolt,
  HiPause,
  HiPlay,
} from 'react-icons/hi2'

const MotionSlide = motion.div

const iconMap = {
  assets: HiChartBarSquare,
  crime: HiShieldExclamation,
  women: HiUsers,
  turnout: HiBolt,
  education: HiBuildingLibrary,
  age: HiUsers,
  affidavit: HiScale,
  turnoutDelta: HiBolt,
}

const slides = [
  {
    key: 'assets',
    value: '₹5,863 Cr',
    description: 'Richest candidate total declared assets',
    source: 'ADR · Tamil Nadu Election Watch · Apr 2026',
  },
  {
    key: 'crime',
    value: '722 (18%)',
    description: 'Candidates with criminal cases',
    source: 'ADR Candidate Affidavit Analysis',
  },
  {
    key: 'women',
    value: '412',
    description: 'Women candidates in fray',
    source: 'Election Commission Public Data',
  },
  {
    key: 'turnout',
    value: '74.1%',
    description: 'Projected voter turnout',
    source: 'State Electoral Roll Snapshot',
  },
  {
    key: 'education',
    value: '61%',
    description: 'Graduates and above among candidates',
    source: 'Affidavit Self-Disclosures',
  },
  {
    key: 'age',
    value: '46 yrs',
    description: 'Average candidate age',
    source: 'Election Watch Compendium',
  },
  {
    key: 'affidavit',
    value: '100%',
    description: 'Candidates with affidavit records',
    source: 'ECI Filed Nominations',
  },
  {
    key: 'turnoutDelta',
    value: '+3.2%',
    description: 'Expected turnout increase vs 2021',
    source: 'Polling Trend Projection',
  },
]

function StatsCarousel({ t }) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const current = useMemo(() => slides[index], [index])

  useEffect(() => {
    if (isPaused) return undefined
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section className="mx-auto -mt-4 w-full max-w-5xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-100/90 via-indigo-100/70 to-purple-200/80 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between bg-violet-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-50">
          <span>{t.statsTitle}</span>
          <span>
            {index + 1} / {slides.length}
          </span>
        </div>
        <div className="min-h-[250px] p-8">
          <AnimatePresence mode="wait">
            <MotionSlide
              key={current.key}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-5 inline-flex rounded-2xl bg-white/45 p-4 text-violet-700">
                {(() => {
                  const icon = iconMap[current.key]
                  return icon({ size: 30 })
                })()}
              </div>
              <h2 className="text-4xl font-bold text-violet-800 sm:text-6xl">{current.value}</h2>
              <p className="mt-3 text-xl font-medium text-indigo-950">{current.description}</p>
              <p className="mt-3 text-sm text-indigo-800/75">
                {t.source}: {current.source}
              </p>
            </MotionSlide>
          </AnimatePresence>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIndex((value) => (value - 1 + slides.length) % slides.length)}
                className="rounded-full bg-white/80 p-2 text-indigo-900 transition hover:scale-105"
                aria-label="Previous stat"
              >
                <HiArrowLongLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => setIsPaused((value) => !value)}
                className="rounded-full bg-white/80 p-2 text-indigo-900 transition hover:scale-105"
                aria-label={isPaused ? 'Play auto slide' : 'Pause auto slide'}
              >
                {isPaused ? <HiPlay size={18} /> : <HiPause size={18} />}
              </button>
              <button
                type="button"
                onClick={() => setIndex((value) => (value + 1) % slides.length)}
                className="rounded-full bg-white/80 p-2 text-indigo-900 transition hover:scale-105"
                aria-label="Next stat"
              >
                <HiArrowLongRight size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {slides.map((slide, dotIndex) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`h-2 rounded-full transition ${
                    index === dotIndex ? 'w-7 bg-violet-700' : 'w-2 bg-violet-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsCarousel
