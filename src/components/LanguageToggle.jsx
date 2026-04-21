function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="inline-flex rounded-full border border-white/30 bg-white/10 p-1 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
          language === 'en' ? 'bg-white text-indigo-900' : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ta')}
        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
          language === 'ta' ? 'bg-white text-indigo-900' : 'text-white hover:bg-white/20'
        }`}
      >
        தமிழ்
      </button>
    </div>
  )
}

export default LanguageToggle
