import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsCarousel from './components/StatsCarousel'
import SearchBar from './components/SearchBar'
import CandidateCard from './components/CandidateCard'
import AllianceSection from './components/AllianceSection'
import translations from './data/translations.json'
import constituencies from './data/constituencies.json'
import candidates from './data/candidates.json'

const MotionGrid = motion.div

function App() {
  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(false)
  const [selectedConstituency, setSelectedConstituency] = useState('')
  const [loading, setLoading] = useState(false)

  const t = translations[language]

  const selectedCandidates = useMemo(
    () =>
      candidates.filter(
        (candidate) =>
          candidate.constituency.toLowerCase() === selectedConstituency.toLowerCase()
      ),
    [selectedConstituency]
  )

  const handleSelectConstituency = (value) => {
    setSelectedConstituency(value)
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }

  return (
    <div
      className={`min-h-screen scroll-smooth transition ${
        darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-stone-100 text-slate-900'
      }`}
    >
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-800 to-violet-700 text-white shadow-2xl">
        <Navbar
          t={t}
          language={language}
          setLanguage={setLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Hero t={t} />
      </header>

      <main className="relative z-10">
        <StatsCarousel t={t} />
        <SearchBar
          t={t}
          constituencies={constituencies}
          onSelect={handleSelectConstituency}
        />

        <section className="mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6">
          <h2 className="mb-4 text-2xl font-bold text-indigo-950 dark:text-indigo-50">
            {selectedConstituency
              ? `${t.candidateSectionTitle} ${selectedConstituency}`
              : t.candidateSectionHint}
          </h2>
          {!selectedConstituency && (
            <div className="rounded-2xl border border-dashed border-indigo-300 bg-white/50 p-6 text-indigo-700 dark:border-indigo-500/60 dark:bg-slate-900/40 dark:text-indigo-100">
              {t.candidateSectionHint}
            </div>
          )}
          {selectedConstituency && loading && (
            <div className="grid gap-3 sm:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="h-32 animate-pulse rounded-2xl bg-indigo-100 dark:bg-slate-800"
                />
              ))}
              <p className="text-sm text-indigo-700 dark:text-indigo-200">{t.loading}</p>
            </div>
          )}
          {selectedConstituency && !loading && (
            <MotionGrid layout className="grid gap-4 sm:grid-cols-2">
              {selectedCandidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} t={t} />
              ))}
              {selectedCandidates.length === 0 && (
                <p className="rounded-2xl bg-white/70 p-4 text-indigo-700 dark:bg-slate-900/50 dark:text-indigo-100">
                  No candidate mock data available for this constituency.
                </p>
              )}
            </MotionGrid>
          )}
        </section>

        <AllianceSection t={t} />
      </main>
    </div>
  )
}

export default App
