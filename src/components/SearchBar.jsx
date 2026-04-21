import { useMemo, useState } from 'react'
import { HiMagnifyingGlass, HiMapPin } from 'react-icons/hi2'

function SearchBar({ t, constituencies, onSelect }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      constituencies.filter((name) =>
        name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [constituencies, query]
  )

  return (
    <section className="mx-auto mt-7 w-full max-w-5xl px-4 sm:px-6">
      <div className="relative">
        <HiMagnifyingGlass className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-indigo-500/70" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full rounded-3xl border border-indigo-100 bg-white px-14 py-4 text-lg text-indigo-900 shadow-lg outline-none ring-indigo-300 transition focus:ring-4 dark:border-white/10 dark:bg-slate-800 dark:text-indigo-100"
        />
        {query && filtered.length > 0 && (
          <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-xl dark:border-white/10 dark:bg-slate-800">
            {filtered.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => {
                    setQuery(item)
                    onSelect(item)
                  }}
                  className="flex w-full items-center gap-2 px-4 py-3 text-left text-indigo-900 transition hover:bg-indigo-50 dark:text-indigo-100 dark:hover:bg-slate-700"
                >
                  <HiMapPin className="text-indigo-500" />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default SearchBar
