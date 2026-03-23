'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import { howItWorksData, L } from '../../data/siteData'
import IconMapper from '../ui/IconMapper'

export default function HowItWorks() {
  const { lang } = useLanguage()
  const { steps } = howItWorksData

  return (
    <Section id="how-it-works" className="bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-red-500/5 to-transparent pointer-events-none" />

      <Container className="relative">
        <SectionHeader
          badge={getText(lang, 'badge.howItWorks')}
          heading={getText(lang, 'howItWorks.heading')}
          headingAccent={getText(lang, 'howItWorks.accent')}
          subheading={getText(lang, 'howItWorks.sub')}
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-0" />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div
                className="relative flex flex-col items-center text-center group"
            >
              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:border-red-500/40 group-hover:bg-slate-50 dark:group-hover:bg-slate-700/80 transition-all duration-300 shadow-md dark:shadow-xl">
                <IconMapper name={step.icon} className="w-8 h-8 text-red-500" />
                {/* Step number badge */}
                <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-amber-400 text-white text-[10px] font-black flex items-center justify-center shadow-lg shadow-orange-500/30">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-slate-900 dark:text-white font-bold text-base mb-3 group-hover:text-red-400 transition-colors duration-200">
                {L(lang, step, 'title')}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[200px]">
                {L(lang, step, 'description')}
              </p>

              {/* Arrow between steps — mobile/tablet */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6 mb-2 text-red-500/40">
                  <svg className="w-5 h-5 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/[0.07] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-slate-900 dark:text-white font-semibold text-lg mb-1">{getText(lang, 'howItWorks.ready')}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{getText(lang, 'howItWorks.readySub')}</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/25 transition-all duration-300 hover:shadow-red-600/40 active:scale-95"
          >
            {getText(lang, 'howItWorks.getConnected')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  )
}
