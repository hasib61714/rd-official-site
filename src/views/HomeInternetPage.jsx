'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { homeInternetPageData, localize } from '../data/siteData'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import IconMapper from '../components/ui/IconMapper'
import PricingCard from '../components/shared/PricingCard'
import Reveal from '../components/ui/Reveal'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'

const TEXTS = {
  en: {
    bc: 'Home Internet',
    heroBadge: 'Residential Plans',
    h1: 'Home Internet', h1a: 'Plans & Pricing',
    sub: 'Red Data Home Internet delivers ultra-fast fiber broadband engineered for modern households. From buffer-free 4K streaming and lag-free gaming to seamless video calls — all on one blisteringly fast connection with no hidden charges.',
    heroBtn: 'Get Connected',
    feat1: 'Mbps Bandwidth', feat2: 'Buffer-less social media & YouTube', feat3: 'Unlimited Device Support',
    feat4: 'Min TalkTime', feat5: 'OTT Subscription',
    feat6: '24/7 Customer Care', freeSetup: 'Free Installation', paidSetup: 'one-time setup',
    period: '/month', freeInst: 'Free installation',
    planCta: 'Get Started',
    whyBadge: 'Why Choose Us', whyH: 'We provide top-tier services with', whyA: 'benefits you can rely on',
    covBadge: 'Coverage', covH: 'Area', covA: 'Coverage',
    covP: 'Red Data provides high-speed fiber optic internet services across Bangladesh. From major cities to suburban areas, our growing network ensures you stay connected.',
    covBtn: 'Check Coverage',
    ctaH: 'Ready to get connected?', ctaS: 'Subscribe to any plan and get free installation today.',
    ctaBtn: 'Get Started', ctaBack: '← Back Home',
  },
  bn: {
    bc: 'হোম ইন্টারনেট',
    heroBadge: 'আবাসিক পরিকল্পনা',
    h1: 'হোম ইন্টারনেট', h1a: 'প্ল্যান ও মূল্য',
    sub: 'রেড ডাটা হোম ইন্টারনেট আধুনিক পরিবারের জন্য আল্ট্রা-ফাস্ট ফাইবার ব্রডব্যান্ড সরবরাহ করে। বাফার-মুক্ত ৪কে স্ট্রিমিং, লেটেন্সি-মুক্ত গেমিং থেকে নিরবচ্ছিন্ন ভিডিও কল — সব কিছু এক দ্রুতগতির সংযোগে, কোনো লুকানো চার্জ ছাড়াই।',
    heroBtn: 'সংযোগ নিন',
    feat1: 'এমবিপিএস ব্যান্ডউইথ', feat2: 'বাফার-মুক্ত সোশ্যাল মিডিয়া ও ইউটিউব', feat3: 'সীমাহীন ডিভাইস সংযোগ',
    feat4: 'মিনিট টকটাইম', feat5: 'ওটিটি সাবস্ক্রিপশন',
    feat6: '২৪/৭ গ্রাহক সেবা', freeSetup: 'বিনামূল্যে ইনস্টলেশন', paidSetup: 'একবার সেটআপ',
    period: '/মাস', freeInst: 'বিনামূল্যে ইনস্টলেশন',
    planCta: 'শুরু করুন',
    whyBadge: 'কেন আমাদের বেছে নেবেন', whyH: 'আমরা প্রদান করি সর্বোচ্চ মানের সেবা', whyA: 'যার উপর আপনি নির্ভর করতে পারেন',
    covBadge: 'কভারেজ', covH: 'এলাকা', covA: 'কভারেজ',
    covP: 'রেড ডাটা সারা বাংলাদেশে হাই-স্পিড ফাইবার অপটিক ইন্টারনেট সেবা প্রদান করে। বড় শহর থেকে শহরতলী পর্যন্ত, আমাদের ক্রমবর্ধমান নেটওয়ার্ক আপনাকে সংযুক্ত রাখে।',
    covBtn: 'কভারেজ দেখুন',
    ctaH: 'সংযুক্ত হতে প্রস্তুত?', ctaS: 'যেকোনো প্ল্যানে সাবস্ক্রাইব করুন এবং আজই বিনামূল্যে ইনস্টলেশন পান।',
    ctaBtn: 'শুরু করুন', ctaBack: '← হোমে ফিরুন',
  },
}

const { plans, benefits } = homeInternetPageData

export default function HomeInternetPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  const planFeatures = (plan) => [
    `${plan.speed} ${t.feat1}`,
    t.feat2,
    t.feat3,
    `${plan.talkTime} ${t.feat4}`,
    ...(plan.ott > 0 ? [`${plan.ott} ${t.feat5}`] : []),
    t.feat6,
    plan.oneTime === 0 ? t.freeSetup : `৳${plan.oneTime.toLocaleString()} ${t.paidSetup}`,
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Home Internet Plans" description="Affordable high-speed fiber home internet plans in Dhaka and across Bangladesh from Red Data. No throttling, 99% uptime." />

      {/* Page Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: t.bc }]} />
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {t.heroBadge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                {t.h1}<br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {t.h1a}
                </span>
              </h1>
              <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed" wrapperClassName="mb-8">
                {t.sub}
              </ExpandableText>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/40 transition-all hover:scale-105"
                >
                  {t.heroBtn}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+8809640112233"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09640-112233
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-72 h-64 lg:w-96 lg:h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 to-slate-800/60 backdrop-blur-sm border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-6 p-8">
                    {['Home','Wifi','Tv','Play','Smartphone','Radio','Shield','Zap','Clock'].map((icon, iconIndex) => (
                      <div key={iconIndex} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/70 backdrop-blur-sm border border-white/10">
                        <IconMapper name={icon} className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-2xl font-black">24/7</div>
                  <div className="text-xs text-red-200">Support</div>
                </div>
                <div className="absolute -top-4 -left-4 bg-emerald-600 text-white rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-2xl font-black">99%</div>
                  <div className="text-xs text-emerald-200">Uptime</div>
                </div>
              </div>
            </div>
          </div>
      </PageHero>

      {/* Plans Grid */}
      <div className="bg-slate-50 dark:bg-slate-900 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-4">
            {plans.map((plan, planIndex) => (
              <Reveal key={plan.name} delay={planIndex * 100}>
                <PricingCard
                  name={plan.name}
                  tag={plan.tag}
                  price={`৳${plan.price.toLocaleString()}`}
                  vatBreakdown={`৳${plan.base} + ৳${plan.vat} (5% VAT)`}
                  period={t.period}
                  oneTime={plan.oneTime === 0 ? t.freeInst : `৳${plan.oneTime.toLocaleString()} ${t.paidSetup}`}
                  bandwidth={`${plan.speed} Mbps`}
                  features={planFeatures(plan)}
                  cta={t.planCta}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white dark:bg-slate-800/40">
        <Container>
          <SectionHeader badge={t.whyBadge} heading={t.whyH} headingAccent={t.whyA} className="mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                  <IconMapper name={benefit.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{localize(lang, benefit, 'title')}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{localize(lang, benefit, 'desc')}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Area Coverage */}
      <div className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" />
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {t.covBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t.covH} <span className="text-red-400">{t.covA}</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">{t.covP}</p>
              <Link
                href="/#coverage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {t.covBtn}
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 lg:w-80 h-72 rounded-3xl bg-gradient-to-br from-red-600/20 to-red-900/10 flex items-center justify-center">
                  <svg className="w-24 h-24 text-red-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </div>
                <div className="absolute inset-0 rounded-full bg-red-500/10 blur-3xl" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="py-14 bg-red-600">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{t.ctaH}</h3>
              <p className="text-red-100 text-sm mt-1">{t.ctaS}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white text-red-600 font-bold text-sm hover:bg-red-50 transition-all shadow"
              >
                {t.ctaBtn}
              </Link>
              <Link href="/" className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                {t.ctaBack}
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <ExploreServices />

    </div>
  )
}
