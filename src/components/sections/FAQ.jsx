'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import { useState } from 'react'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import { faqData, localize } from '../../data/siteData'

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-red-500/30 bg-slate-50 dark:bg-slate-800/80 shadow-lg shadow-red-500/5'
          : 'border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-white/20'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-red-500 dark:text-red-400' : 'text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white'}`}>
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-red-500/20 text-red-400 rotate-180' : 'bg-slate-200 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-7 pb-6">
          <div className="h-px bg-slate-200 dark:bg-white/[0.06] mb-5" />
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { lang } = useLanguage()
  const { items } = faqData
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (toggleIndex) => setOpenIndex(openIndex === toggleIndex ? null : toggleIndex)

  return (
    <Section id="faq" className="bg-white dark:bg-slate-900">
      <Container>
        <SectionHeader
          badge={getText(lang, 'badge.faq')}
          heading={getText(lang, 'faq.heading')}
          headingAccent={getText(lang, 'faq.accent')}
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, itemIndex) => (
            <Reveal key={item.question} delay={itemIndex * 70}>
              <AccordionItem
                question={localize(lang, item, 'question')}
                answer={localize(lang, item, 'answer')}
                isOpen={openIndex === itemIndex}
                onToggle={() => toggle(itemIndex)}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
