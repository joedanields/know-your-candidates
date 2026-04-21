import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown, HiShieldCheck, HiShieldExclamation } from 'react-icons/hi2'

const MotionDetails = motion.div

function CandidateCard({ candidate, t }) {
  const [open, setOpen] = useState(false)
  const hasCases = candidate.criminalCases > 0

  return (
    <article className="overflow-hidden rounded-2xl border border-indigo-100 bg-white/85 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/60">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <h3 className="text-xl font-semibold text-indigo-950 dark:text-indigo-50">{candidate.name}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/70 dark:text-indigo-100">
              {candidate.party}
            </span>
            <span className="text-sm text-indigo-700 dark:text-indigo-200">
              {t.age}: {candidate.age}
            </span>
          </div>
        </div>
        <HiChevronDown
          className={`text-2xl text-indigo-700 transition-transform dark:text-indigo-100 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <MotionDetails
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-indigo-100 px-5 py-4 dark:border-white/10"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-medium">
              {hasCases ? (
                <HiShieldExclamation className="text-red-600" />
              ) : (
                <HiShieldCheck className="text-emerald-600" />
              )}
              <span className={hasCases ? 'text-red-700' : 'text-emerald-700'}>
                {hasCases ? t.criminalYes : t.criminalNo}
                {hasCases ? ` (${candidate.criminalCases})` : ''}
              </span>
            </div>
            <p className="text-sm text-indigo-800 dark:text-indigo-200">
              {t.education}: {candidate.education}
            </p>
            <div className="mt-2 grid gap-1 text-sm text-indigo-700/85 dark:text-indigo-200/90">
              <p>Assets: {candidate.assets}</p>
              <p>Liabilities: {candidate.liabilities}</p>
            </div>
          </MotionDetails>
        )}
      </AnimatePresence>
    </article>
  )
}

export default CandidateCard
