'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'
import { payBillData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import { useLanguage } from '../context/LanguageContext'

const TEXTS = {
  en: {
    bc: 'Pay Bill', heroBadge: 'Bill Payment',
    h1: 'Pay Your', h1a: 'Bill Online',
    sub: 'Multiple easy payment options available. Pay anytime, anywhere using your preferred method.',
    quickPayMsg: '💡 Fastest way to pay — use the Self Corner portal with card or mobile banking.',
    quickPayBtn: 'Go to Self Corner →',
    sectionBadge: 'Payment Options', sectionH: 'Choose Your', sectionA: 'Payment Method',
    helpH: 'Payment not reflecting?', helpS: 'Contact our billing team 24/7 for payment confirmation issues.',
    faqH: 'Payment', faqA: 'FAQs',
  },
  bn: {
    bc: 'বিল পরিশোধ', heroBadge: 'বিল পেমেন্ট',
    h1: 'পরিশোধ করুন', h1a: 'অনলাইনে বিল',
    sub: 'একাধিক সহজ পেমেন্ট অপশন উপলব্ধ। আপনার পছন্দের পদ্ধতিতে যেকোনো সময়, যেকোনো জায়গা থেকে পরিশোধ করুন।',
    quickPayMsg: '💡 সবচেয়ে দ্রুত পেমেন্টের উপায় — কার্ড বা মোবাইল ব্যাংকিং দিয়ে সেলফ কর্নার পোর্টাল ব্যবহার করুন।',
    quickPayBtn: 'সেলফ কর্নারে যান →',
    sectionBadge: 'পেমেন্ট অপশন', sectionH: 'আপনার পছন্দের', sectionA: 'পেমেন্ট পদ্ধতি',
    helpH: 'পেমেন্ট দেখা যাচ্ছে না?', helpS: 'পেমেন্ট নিশ্চিতকরণের সমস্যায় আমাদের বিলিং দলের সাথে ২৪/৭ যোগাযোগ করুন।',
    faqH: 'পেমেন্ট', faqA: 'প্রশ্নোত্তর',
  },
}

const { paymentMethods, faqs } = payBillData

export default function PayBillPage() {
  useScrollToTop()
  const [openFaq, setOpenFaq] = useState(null)
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Pay Bill" description="Pay your Red Data internet bill via bKash, Nagad, Rocket, card, bank transfer, or cash at our Gulshan office." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: t.bc }]} />
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              {t.heroBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              {t.h1}{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {t.h1a}
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{t.sub}</p>
          </div>
      </PageHero>

      {/* Quick Pay Banner */}
      <div className="bg-red-600 py-4">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold text-sm">{t.quickPayMsg}</p>
            <Link href="/self-corner" className="shrink-0 px-5 py-2 rounded-full bg-white text-red-700 font-bold text-sm hover:bg-red-50 transition-all shadow">
              {t.quickPayBtn}
            </Link>
          </div>
        </Container>
      </div>

      {/* Payment Methods */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge={t.sectionBadge} heading={t.sectionH} headingAccent={t.sectionA} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <div key={method.name} className={`rounded-2xl border ${method.border} ${method.bg} p-6 hover:shadow-lg transition-all group`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconMapper name={method.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{method.name}</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{method.number}</span>
                  </div>
                </div>
                {/* Steps */}
                <ol className="space-y-2">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <span className={`shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${method.color} text-white text-[10px] font-black flex items-center justify-center mt-0.5`}>
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Contact for Payment Help */}
      <div className="py-14 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t.helpH}</h3>
                <p className="text-slate-300 text-sm">{t.helpS}</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="tel:+8809640123123" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg transition-all hover:scale-105">
                  📞 09640-123123
                  <span className="text-red-200 text-xs">Billing Help</span>
                </a>
                <a href="https://wa.me/+8801971521964" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b558] text-white font-semibold text-sm shadow-lg transition-all hover:scale-105">
                  WhatsApp
                </a>
                <a href="mailto:info@reddata.com.bd" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* FAQs */}
      <div className="py-14 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t.faqH} <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">{t.faqA}</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, faqIndex) => (
                <div key={faqIndex} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faqIndex ? null : faqIndex)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white text-sm pr-4">{faq.q}</span>
                    <svg className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === faqIndex ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === faqIndex && (
                    <div className="px-5 pb-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}
