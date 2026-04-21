function AllianceSection({ t }) {
  const blocks = [
    {
      title: t.dmkAlliance,
      color: 'bg-emerald-100/80 dark:bg-emerald-900/30',
      parties: ['DMK', 'INC', 'CPI', 'CPI(M)', 'VCK', 'MMK'],
    },
    {
      title: t.aiadmkAlliance,
      color: 'bg-sky-100/80 dark:bg-sky-900/30',
      parties: ['AIADMK', 'DMDK', 'Puthiya Tamizhagam', 'SDPI'],
    },
    {
      title: t.solo,
      color: 'bg-amber-100/80 dark:bg-amber-900/30',
      parties: ['BJP', 'NTK', 'PMK', 'BSP'],
    },
  ]

  return (
    <section className="mx-auto mt-12 w-full max-w-6xl px-4 pb-12 sm:px-6">
      <h2 className="mb-5 text-2xl font-bold text-indigo-950 dark:text-indigo-50">{t.alliancesTitle}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {blocks.map((block) => (
          <article key={block.title} className={`rounded-2xl p-5 shadow-md ${block.color}`}>
            <h3 className="mb-3 text-lg font-semibold text-indigo-900 dark:text-indigo-100">{block.title}</h3>
            <div className="flex flex-wrap gap-2">
              {block.parties.map((party) => (
                <span
                  key={party}
                  className="rounded-full border border-indigo-300/40 bg-white/70 px-3 py-1 text-sm text-indigo-800 dark:border-indigo-500/50 dark:bg-slate-800/70 dark:text-indigo-100"
                >
                  {party}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AllianceSection
