'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import { testimonialsData } from '../../data/siteData'
import TestimonialCard from '../shared/TestimonialCard'

const INITIAL_SHOW = 6

export default function Testimonials() {
  const { lang } = useLanguage()
  const { items } = testimonialsData
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? items : items.slice(0, INITIAL_SHOW)
  const remaining = items.length - INITIAL_SHOW

  return (
    <Section id="testimonials" className="bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-500/4 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-red-700/4 blur-3xl pointer-events-none" />

      <Container className="relative">
        <SectionHeader
          badge={getText(lang, 'badge.testimonials')}
          heading={getText(lang, 'testimonials.heading')}
          headingAccent={getText(lang, 'testimonials.accent')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % INITIAL_SHOW) * 80}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>

        {/* See More / See Less */}
        {items.length > INITIAL_SHOW && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {showAll ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  {lang === 'bn' ? 'কম দেখুন' : 'See Less'}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  {lang === 'bn' ? `আরও ${remaining}টি রিভিউ দেখুন` : `See ${remaining} More Reviews`}
                </>
              )}
            </button>
          </div>
        )}


      </Container>
    </Section>
  )
}
