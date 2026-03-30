'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { ctaData, footerData, localize } from '../../data/siteData'

export default function CTA() {
  const { lang } = useLanguage()

  return (
    <section id="contact" className="py-14 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-radial from-red-500/8 to-transparent pointer-events-none" />

      <Container className="relative">
        <Reveal>
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/[0.08]">
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-900/80 backdrop-blur-sm" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-red-500/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-red-700/5 blur-2xl pointer-events-none" />

          <div className="relative px-8 py-12 sm:px-16 sm:py-14 text-center">
            <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              {getText(lang, 'cta.badge')}
            </p>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-5">
              {localize(lang, ctaData, 'heading')}{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {localize(lang, ctaData, 'headingAccent')}
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              {localize(lang, ctaData, 'subheading')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="xl" href={ctaData.cta1.href} fullWidthOnMobile>
                {localize(lang, ctaData.cta1, 'label')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button variant="secondary" size="xl" href={ctaData.cta2.href} fullWidthOnMobile>
                {localize(lang, ctaData.cta2, 'label')}
              </Button>
            </div>

            {/* Quick contact links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-10 border-t border-slate-200 dark:border-white/[0.08]">
              <a href={`mailto:${footerData.contact.email}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 text-sm transition-colors">
                <span>✉️</span> {footerData.contact.email}
              </a>
              <div className="hidden sm:block w-px h-5 bg-slate-300 dark:bg-white/10" />
              <a href={`tel:${footerData.contact.phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 text-sm transition-colors">
                <span>📞</span> {footerData.contact.phone}
              </a>
              <div className="hidden sm:block w-px h-5 bg-slate-300 dark:bg-white/10" />
              <a href="https://wa.me/+8801971521964" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 text-sm transition-colors">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  )
}
