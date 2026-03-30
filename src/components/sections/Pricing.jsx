'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import PricingCard from '../shared/PricingCard'
import Reveal from '../ui/Reveal'
import { pricingData, localize } from '../../data/siteData'

export default function Pricing() {
  const { lang } = useLanguage()
  const { plans } = pricingData
  const [showAll, setShowAll] = useState(false)
  const visiblePlans = showAll ? plans : plans.slice(0, 3)

  return (
    <Section id="pricing" className="bg-slate-50 dark:bg-slate-900">
      <Container>
        <SectionHeader
          badge={getText(lang, 'badge.pricing')}
          heading={getText(lang, 'pricing.heading')}
          headingAccent={getText(lang, 'pricing.accent')}
          subheading={getText(lang, 'pricing.sub')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start md:items-center mt-8">
          {visiblePlans.map((plan, planIndex) => (
            <Reveal key={plan.name} delay={planIndex * 100}>
              <PricingCard
                {...plan}
                tag={localize(lang, plan, 'tag')}
                vatBreakdown={localize(lang, plan, 'vatBreakdown')}
                period={localize(lang, plan, 'period')}
                oneTime={localize(lang, plan, 'oneTime')}
                features={localize(lang, plan, 'features')}
                cta={localize(lang, plan, 'cta')}
              />
            </Reveal>
          ))}
        </div>

        {/* See All Packages CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          {plans.length > 3 && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              {lang === 'bn' ? 'সব প্ল্যান দেখুন' : 'Show All Plans'}
            </button>
          )}
          <Link
            href="/home-internet"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10" />
            </svg>
            {getText(lang, 'pricing.seeAllPackages')}
          </Link>
        </div>

      </Container>
    </Section>
  )
}
