'use client'
import Link from 'next/link'
import Container from './Container'

export default function ServiceCTA({ heading, subtext, primaryLabel = 'Get Started', primaryTo = '/contact', badge, badgeLabel, callSalesLabel = 'Call Sales' }) {
  return (
    <div className="py-12 bg-white dark:bg-slate-800/40">
      <Container>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div>
              {badge && badgeLabel && (
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${badge} animate-pulse`} />
                  <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">{badgeLabel}</span>
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{heading}</h3>
              {subtext && <p className="text-slate-300 text-sm max-w-lg">{subtext}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href={primaryTo} className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
                {primaryLabel}
              </Link>
              <a href="tel:+8809640112233" className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                {callSalesLabel}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
