'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Link from 'next/link'
import IconMapper from '../components/ui/IconMapper'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { corporateInternetPageData, aboutPageData, localize } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'

const TEXTS = {
  en: {
    bc: 'Corporate Internet',
    heroBadge: 'Enterprise Solutions',
    h1: 'Corporate Internet', h1a: 'Connectivity',
    sub: 'At Red Data, we understand that a reliable and high-speed internet connection is critical for the success of your business. Our Corporate Internet Connectivity service offers robust, secure, and scalable internet solutions tailored to meet the unique demands of your enterprise. With dedicated bandwidth, 24/7 customer support, and guaranteed uptime, we ensure your business operations run smoothly and efficiently. Partner with us to experience seamless connectivity and drive your business forward.',
    heroBtn: 'Get Started',
    fiberBadge: 'Fiber Optic Advantage', fiberH: 'Why Choose Red Data', fiberA: 'Fiber Optic Connectivity?',
    whyBadge: 'Why Choose Us', whyH: 'We provide top-tier services with', whyA: 'benefits you can rely on',
    whyP: 'Thousands of enterprises across Bangladesh trust Red Data for their mission-critical internet needs.',
    whyBtn: 'Contact Sales',
    clientsBadge: 'Our Clients', clientsH: 'Some of Our', clientsA: 'Valuable Clients',
    clientsSub: 'Trusted by leading banks, fintech companies, and enterprises across Bangladesh.',
    clientsMore: '+ many more enterprises across Bangladesh',
    ctaH: 'Ready to power your', ctaAccent: 'enterprise?',
    ctaP: 'Contact our sales team today and get a custom quote tailored to your business needs.',
    ctaBtn: 'Get a Custom Quote', ctaBack: '← Back Home',
  },
  bn: {
    bc: 'কর্পোরেট ইন্টারনেট',
    heroBadge: 'এন্টারপ্রাইজ সমাধান',
    h1: 'কর্পোরেট ইন্টারনেট', h1a: 'কানেক্টিভিটি',
    sub: 'রেড ডাটায় আমরা বুঝি যে নির্ভরযোগ্য ও উচ্চ-গতির ইন্টারনেট সংযোগ আপনার ব্যবসার সাফল্যের জন্য অপরিহার্য। আমাদের কর্পোরেট ইন্টারনেট কানেক্টিভিটি সেবা আপনার এন্টারপ্রাইজের অনন্য চাহিদা পূরণে শক্তিশালী, নিরাপদ ও স্কেলযোগ্য ইন্টারনেট সমাধান প্রদান করে। ডেডিকেটেড ব্যান্ডউইথ, ২৪/৭ গ্রাহক সহায়তা এবং নিশ্চিত আপটাইমসহ আমরা আপনার ব্যবসা পরিচালনা মসৃণ ও দক্ষ রাখি।',
    heroBtn: 'শুরু করুন',
    fiberBadge: 'ফাইবার অপটিক সুবিধা', fiberH: 'কেন রেড ডাটা বেছে নেবেন', fiberA: 'ফাইবার অপটিক কানেক্টিভিটি?',
    whyBadge: 'কেন আমাদের বেছে নেবেন', whyH: 'আমরা প্রদান করি সর্বোচ্চ মানের সেবা', whyA: 'যার উপর আপনি নির্ভর করতে পারেন',
    whyP: 'বাংলাদেশ জুড়ে হাজার হাজার এন্টারপ্রাইজ তাদের মিশন-ক্রিটিক্যাল ইন্টারনেট চাহিদার জন্য রেড ডাটাকে বিশ্বাস করে।',
    whyBtn: 'বিক্রয় দলে যোগাযোগ করুন',
    clientsBadge: 'আমাদের ক্লায়েন্ট', clientsH: 'আমাদের কিছু', clientsA: 'মূল্যবান ক্লায়েন্ট',
    clientsSub: 'বাংলাদেশের শীর্ষস্থানীয় ব্যাংক, ফিনটেক কোম্পানি ও প্রতিষ্ঠানগুলোর আস্থার অংশীদার।',
    clientsMore: '+ বাংলাদেশ জুড়ে আরও অনেক প্রতিষ্ঠান',
    ctaH: 'আপনার এন্টারপ্রাইজকে শক্তিশালী করতে', ctaAccent: 'প্রস্তুত?',
    ctaP: 'আজই আমাদের বিক্রয় দলের সাথে যোগাযোগ করুন এবং আপনার ব্যবসার চাহিদা অনুযায়ী কাস্টম কোটেশন পান।',
    ctaBtn: 'কাস্টম কোটেশন পান', ctaBack: '← হোমে ফিরুন',
  },
}

const { fiberFeatures, whyUs, stats: corpStats } = corporateInternetPageData
const clients = aboutPageData.clients

export default function CorporateInternetPage() {
  const { lang } = useLanguage()
  const t = TEXTS[lang]
  useScrollToTop()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Corporate Internet" description="Dedicated enterprise-grade internet with reliable uptime, static IPs, and 24/7 support from Red Data Bangladesh." />

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
                    {['Building2','Network','Globe','Server','Shield','Lock','Database','Layers','Zap'].map((icon, iconIdx) => (
                      <div key={iconIdx} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/70 backdrop-blur-sm border border-white/10">
                        <IconMapper name={icon} className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-emerald-600 text-white rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-2xl font-black">99%</div>
                  <div className="text-xs text-emerald-200">Uptime</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-2xl font-black">24/7</div>
                  <div className="text-xs text-red-200">Support</div>
                </div>
              </div>
            </div>
          </div>
      </PageHero>

      {/* Fiber Optic Features */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge={t.fiberBadge} heading={t.fiberH} headingAccent={t.fiberA} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {fiberFeatures.map((feature, featureIndex) => (
              <div
                key={feature.title}
                className="group relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-red-200 dark:hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-7xl font-black text-slate-100 dark:text-slate-700/60 leading-none select-none group-hover:text-red-100 dark:group-hover:text-red-900/40 transition-colors">
                  {String(featureIndex + 1).padStart(2, '0')}
                </span>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                    <IconMapper name={feature.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{localize(lang, feature, 'title')}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{localize(lang, feature, 'desc')}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {t.whyBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t.whyH}{' '}
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {t.whyA}
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t.whyP}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                {t.whyBtn}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                    <IconMapper name={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{localize(lang, item, 'title')}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{localize(lang, item, 'desc')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Clients */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge={t.clientsBadge} heading={t.clientsH} headingAccent={t.clientsA} subheading={t.clientsSub} />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="h-10 w-auto object-contain group-hover:scale-105 group-hover:brightness-110 opacity-80 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span class="text-xs text-slate-400 font-medium text-center leading-tight">${client.name}</span>`
                  }}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-8">{t.clientsMore}</p>
        </Container>
      </div>

      {/* Stats Strip */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 py-12">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            {corpStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-black mb-1">{stat.num}</div>
                <div className="text-red-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="py-16 bg-white dark:bg-slate-900">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-14 relative overflow-hidden text-center">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                {t.ctaH}{' '}
                <span className="text-red-400">{t.ctaAccent}</span>
              </h3>
              <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">{t.ctaP}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/40 transition-all hover:scale-105"
                >
                  {t.ctaBtn}
                </Link>
                <a
                  href="tel:+8809640112233"
                  className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  09640-112233
                </a>
                <Link href="/" className="px-8 py-3.5 rounded-full border border-white/20 text-slate-300 font-semibold text-sm hover:bg-white/5 transition-all">
                  {t.ctaBack}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ExploreServices />

    </div>
  )
}
