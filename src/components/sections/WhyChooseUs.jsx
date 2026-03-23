'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import { whyUsData, L } from '../../data/siteData'
import IconMapper from '../ui/IconMapper'

function FeatureItem({ icon, title, description }) {
  return (
    <div className="group flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-white/[0.06] hover:border-red-500/20 dark:hover:bg-slate-800/60 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-red-500 group-hover:bg-red-500/15 group-hover:scale-105 transition-all duration-300">
        <IconMapper name={icon} className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-1.5 group-hover:text-red-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const { lang } = useLanguage()
  const { items } = whyUsData

  return (
    <Section id="why-us" className="bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <SectionHeader
          badge={getText(lang, 'badge.whyUs')}
          heading={getText(lang, 'whyUs.heading')}
          headingAccent={getText(lang, 'whyUs.accent')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <FeatureItem
                icon={item.icon}
                title={L(lang, item, 'title')}
                description={L(lang, item, 'description')}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
