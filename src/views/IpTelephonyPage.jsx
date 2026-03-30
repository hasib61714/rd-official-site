'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useEffect } from 'react'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { ipTelephonyData, localize } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const TEXTS = {
  en: {
    bc1: 'Services', bc2: 'IP Telephony',
    h1: 'IP', h1a: 'Telephony',
    sub: "Elevate your business communications with Red Data's IP Telephony Service. Enjoy superior voice quality, seamless integration, cost-effective calling plans, and a wide range of advanced features such as voicemail, call forwarding, and conferencing.",
    sectionBadge: '12 Powerful Features', sectionH: 'Everything Your Business', sectionA: 'Needs',
    ctaH: 'Ready to modernise your business communications?',
    ctaS: 'Contact our VoIP specialists for a custom proposal tailored to your team size and requirements.',
    ctaBtn: 'Get a Quote', callSales: 'Call Sales',
  },
  bn: {
    bc1: 'সেবাসমূহ', bc2: 'আইপি টেলিফোনি',
    h1: 'আইপি', h1a: 'টেলিফোনি',
    sub: 'রেড ডাটার আইপি টেলিফোনি সেবা দিয়ে আপনার ব্যবসায়িক যোগাযোগকে আরও উন্নত করুন। উচ্চমানের ভয়েস কোয়ালিটি, নিরবচ্ছিন্ন ইন্টিগ্রেশন, সাশ্রয়ী কলিং প্ল্যান এবং ভয়েসমেইল, কল ফরওয়ার্ডিং ও কনফারেন্সিংসহ বিস্তৃত উন্নত ফিচার উপভোগ করুন।',
    sectionBadge: '১২টি শক্তিশালী ফিচার', sectionH: 'আপনার ব্যবসার জন্য প্রয়োজনীয়', sectionA: 'সবকিছু',
    ctaH: 'আপনার ব্যবসায়িক যোগাযোগ আধুনিক করতে প্রস্তুত?',
    ctaS: 'আপনার দলের আকার ও চাহিদা অনুযায়ী কাস্টম প্রস্তাবের জন্য আমাদের ভিওআইপি বিশেষজ্ঞদের সাথে যোগাযোগ করুন।',
    ctaBtn: 'কোটেশন পান', callSales: 'বিক্রয় দলে কল করুন',
  },
}

const { features } = ipTelephonyData

export default function IpTelephonyPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="IP Telephony" description="VoIP & cloud PBX solutions with crystal-clear call quality and flexible plans from Red Data in Bangladesh." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: t.bc1 }, { label: t.bc2 }]} />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              {t.h1}{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {t.h1a}
              </span>
            </h1>
            <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {t.sub}
            </ExpandableText>
          </div>
      </PageHero>

      {/* Features */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge={t.sectionBadge} heading={t.sectionH} headingAccent={t.sectionA} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={localize(lang, feature, 'title')} desc={localize(lang, feature, 'desc')} />
            ))}
          </div>
        </Container>
      </div>

      {/* CTA */}
      <ServiceCTA
        heading={t.ctaH}
        subtext={t.ctaS}
        primaryLabel={t.ctaBtn}
        callSalesLabel={t.callSales}
      />

      <ExploreServices />
    </div>
  )
}
