import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import LanguageToggle from './LanguageToggle'

const socialLinks = [
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
]

function Navbar({ t, language, setLanguage, darkMode, setDarkMode }) {
  return (
    <nav className="relative z-10 flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <p className="text-xs uppercase tracking-[0.35em] text-indigo-100/90">{t.siteName}</p>
      <div className="flex flex-wrap items-center gap-3">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            {item.icon({ size: 16 })}
          </a>
        ))}
        <button
          type="button"
          onClick={() => setDarkMode((value) => !value)}
          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          {darkMode ? t.lightMode : t.darkMode}
        </button>
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>
    </nav>
  )
}

export default Navbar
