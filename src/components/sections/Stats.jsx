'use client'
import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import Container from '../ui/Container'
import StatCard from '../shared/StatCard'
import Reveal from '../ui/Reveal'
import { statsData, L } from '../../data/siteData'

export default function Stats() {
  const { lang } = useLanguage()
  return (
    <Section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      <Container className="relative">
        {/* Top accent line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <StatCard
                value={stat.value}
                label={L(lang, stat, 'label')}
                description={L(lang, stat, 'description')}
              />
            </Reveal>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mt-10" />
      </Container>
    </Section>
  )
}
