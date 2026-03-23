'use client'
import { useMemo } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import ServiceCard from '../shared/ServiceCard'
import Reveal from '../ui/Reveal'
import IconMapper from '../ui/IconMapper'
import { servicesData, L } from '../../data/siteData'

export default function Services() {
  const { lang } = useLanguage()
  const localizedItems = useMemo(
    () => servicesData.items.map(item => ({
      ...item,
      title: L(lang, item, 'title'),
      description: L(lang, item, 'description'),
      tag: L(lang, item, 'tag'),
    })),
    [lang]
  )

  const [corporate, homeInternet, ...rest] = localizedItems

  return (
    <Section id="services" className="bg-white dark:bg-slate-900">
      <Container>
        <SectionHeader
          badge={getText(lang, 'badge.services')}
          heading={getText(lang, 'services.heading')}
          headingAccent={getText(lang, 'services.accent')}
          subheading={getText(lang, 'services.sub')}
        />

        {/* Featured: Corporate + Home Internet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {[corporate, homeInternet].map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <Link
                href={service.to || '/'}
                className="group relative flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-white/[0.08] rounded-2xl p-7 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[200px]"
              >
                {/* Glow accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/10 transition-colors duration-500" />

                <div className="flex items-center gap-4 mb-4 relative">
                  <div className="w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/25 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-500/25 transition-all duration-300">
                    <IconMapper name={service.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/15 text-red-400 border border-red-500/20">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed relative flex-1">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative">
                  {lang === 'bn' ? 'প্ল্যান দেখুন' : 'Explore Plans'}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {rest.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                tag={service.tag}
                to={service.to}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
