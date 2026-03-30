'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'
import { aboutPageData, footerData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import { useLanguage } from '../context/LanguageContext'

const TEXTS = {
  en: {
    bc: 'About Us',
    h1: 'Red Data', h1a: '(Pvt.) Limited',
    sub: 'Beginning our journey in the year 2012, Red Data (Pvt.) Limited is a leading IT solution provider which specializes in providing Internet and Data Connectivity, IP Telephony Service, SMS Service, Cloud and Email Service Solution, Website and Software Development, Network Hardware and Managed Services.',
    expBadge: '13+ Year Experience',
    storyBadge: 'Our Story', storyH: "Empowering Bangladesh's", storyA: 'Digital Future',
    servBtn: 'Our Services', contactBtn: 'Contact Us',
    servBadge: 'What We Offer', servH: 'Our', servA: 'Services',
    contactTitle: 'Contact',
    clientsBadge: 'Our Clients', clientsH: 'Some of Our', clientsA: 'Valuable Clients',
  },
  bn: {
    bc: 'আমাদের সম্পর্কে',
    h1: 'রেড ডাটা', h1a: '(প্রা.) লিমিটেড',
    sub: '২০১২ সালে যাত্রা শুরু করে, রেড ডাটা (প্রা.) লিমিটেড একটি শীর্ষস্থানীয় আইটি সমাধান প্রদানকারী প্রতিষ্ঠান যা ইন্টারনেট ও ডেটা কানেক্টিভিটি, আইপি টেলিফোনি সেবা, এসএমএস সেবা, ক্লাউড ও ইমেইল সমাধান, ওয়েবসাইট ও সফটওয়্যার ডেভেলপমেন্ট, নেটওয়ার্ক হার্ডওয়্যার এবং ম্যানেজড সার্ভিস প্রদানে বিশেষজ্ঞ।',
    expBadge: '১৩+ বছরের অভিজ্ঞতা',
    storyBadge: 'আমাদের গল্প', storyH: 'বাংলাদেশের', storyA: 'ডিজিটাল ভবিষ্যৎ গড়ে তোলা',
    servBtn: 'আমাদের সেবা', contactBtn: 'যোগাযোগ করুন',
    servBadge: 'আমাদের সেবাসমূহ', servH: 'আমাদের', servA: 'সেবাসমূহ',
    contactTitle: 'যোগাযোগ',
    clientsBadge: 'আমাদের ক্লায়েন্ট', clientsH: 'আমাদের কিছু', clientsA: 'মূল্যবান ক্লায়েন্ট',
  },
}

const { clients, services, stats, story, companyCards, cta: aboutCta } = aboutPageData
const { contact } = footerData

export default function AboutPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="About Us" description="Red Data Limited — BTRC licensed ISP founded in 2012. Serving 10,000+ clients with fiber internet, data connectivity, and IT solutions across Bangladesh." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: t.bc }]} />
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {t.h1}{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {t.h1a}
                </span>
              </h1>
              <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {t.sub}
              </ExpandableText>
            </div>
            {/* Right: stats */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/[0.10] transition-colors">
                  <div className="text-3xl font-black text-white mb-1">{stat.num}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
      </PageHero>

      {/* Our Story */}
      <div className="py-20 bg-white dark:bg-slate-900">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-96">
                <img
                  src="https://reddata.com.bd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.4a9b9721.jpeg&w=3840&q=75"
                  alt="Red Data office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.parentElement.className = 'relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 h-80 lg:h-96 flex items-center justify-center'
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<span class="text-6xl">🏢</span>'
                  }}
                />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-red-600 text-white rounded-xl px-4 py-2 shadow-xl text-sm font-bold">
                  {t.expBadge}
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {t.storyBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-5">
                {t.storyH}{' '}
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {t.storyA}
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {story.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/corporate-internet" className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105">
                  {t.servBtn}
                </Link>
                <a href="/#contact" className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:border-red-300 dark:hover:border-red-500/50 transition-all">
                  {t.contactBtn}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Services */}
      <div className="py-16 bg-slate-50 dark:bg-slate-800/40">
        <Container>
          <SectionHeader badge={t.servBadge} heading={t.servH} headingAccent={t.servA} className="mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div key={service.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 text-center hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <IconMapper name={service.icon} className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">{service.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Company Info */}
      <div className="py-16 bg-white dark:bg-slate-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyCards.map((card) => (
              <div key={card.title} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 mb-4"><IconMapper name={card.icon} className="w-5 h-5" /></div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {card.lines.map((line, lineIndex) => (
                    <span key={lineIndex}>{line}{lineIndex < card.lines.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            ))}
            {/* Contact */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-4">📞</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t.contactTitle}</h4>
              <div className="space-y-1.5 text-sm">
                <a href={`tel:${contact.phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  📞 {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  ✉️ {contact.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Clients */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge={t.clientsBadge} heading={t.clientsH} headingAccent={t.clientsA} className="mb-10" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group">
                <img
                  src={client.img}
                  alt={client.name}
                  className="h-9 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
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
        </Container>
      </div>

      {/* CTA */}
      <div className="py-14 bg-gradient-to-r from-red-600 to-rose-700">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{aboutCta.heading}</h3>
              <p className="text-red-100 text-sm mt-1">{aboutCta.subheading}</p>
            </div>
            <div className="flex gap-3">
              <a href={aboutCta.cta1.href} className="px-6 py-3 rounded-full bg-white text-red-600 font-bold text-sm hover:bg-red-50 transition-all shadow">
                {aboutCta.cta1.label}
              </a>
              <Link href="/" className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                {aboutCta.cta2.label}
              </Link>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}
