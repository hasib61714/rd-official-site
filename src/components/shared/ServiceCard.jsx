'use client'
import Link from 'next/link'
import IconMapper from '../ui/IconMapper'
import { useLang } from '../../context/LanguageContext'

export default function ServiceCard({ icon, title, description, tag, to }) {
  const { lang } = useLang()
  return (
    <Link
      href={to || '/'}
      className="group relative h-full flex flex-col bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-5 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Subtle top glow on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-5 flex-1">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-red-500 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
          <IconMapper name={icon} className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-slate-900 dark:text-white font-semibold text-base group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">
              {title}
            </h3>
            <span className="hidden sm:block flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
              {tag}
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
          <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {lang === 'bn' ? 'আরও দেখুন' : 'Learn More'}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
