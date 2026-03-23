import { useLang } from '../../context/LanguageContext'
import { getText } from '../../data/translations'

export default function TopBar({ show, onDismiss }) {
  const { lang } = useLang()
  const T = (path) => getText(lang, path)
  if (!show) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 flex items-center bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-[11px] font-medium px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <p className="text-center leading-none">
          🎉 <strong>{lang === 'en' ? 'Special Offer:' : 'বিশেষ অফার:'}</strong> {T('topbar')}{' '}
          <a href="#pricing" className="underline underline-offset-2 hover:text-white/80 font-semibold transition-colors">
            {T('topbarCta')}
          </a>
        </p>
        <button
          onClick={onDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-0.5"
          aria-label="Dismiss"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
