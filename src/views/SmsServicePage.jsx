'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { smsServiceData, localize } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const TEXTS = {
  en: {
    bc1: 'Services', bc2: 'SMS Service',
    h1: 'SMS', h1a: 'Service',
    sub: 'Smart & affordable bulk SMS marketing — send messages, alerts, and notifications at scale with high delivery rates, easy API integration, and comprehensive real-time reporting.',
    sectionBadge: 'Platform Features', sectionH: 'Why Choose Red Data', sectionA: 'SMS',
    ctaH: 'Start sending in minutes',
    ctaS: 'Get API credentials and free test credits — no credit card required to start.',
    ctaBtn: 'Get Started', callSales: 'Call Sales',
  },
  bn: {
    bc1: 'সেবাসমূহ', bc2: 'এসএমএস সেবা',
    h1: 'এসএমএস', h1a: 'সেবা',
    sub: 'স্মার্ট ও সাশ্রয়ী বাল্ক এসএমএস মার্কেটিং — উচ্চ ডেলিভারি রেট, সহজ এপিআই ইন্টিগ্রেশন এবং রিয়েল-টাইম রিপোর্টিংসহ বড় পরিসরে বার্তা, সতর্কতা ও বিজ্ঞপ্তি পাঠান।',
    sectionBadge: 'প্ল্যাটফর্ম ফিচার', sectionH: 'কেন রেড ডাটা বেছে নেবেন', sectionA: 'এসএমএস',
    ctaH: 'মিনিটের মধ্যে পাঠানো শুরু করুন',
    ctaS: 'এপিআই ক্রেডেনশিয়াল ও বিনামূল্যে টেস্ট ক্রেডিট পান — শুরু করতে ক্রেডিট কার্ডের প্রয়োজন নেই।',
    ctaBtn: 'শুরু করুন', callSales: 'বিক্রয় দলে কল করুন',
  },
}

const { features } = smsServiceData

export default function SmsServicePage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="SMS Service" description="Bulk SMS, OTP gateway, and transactional messaging services with high delivery rates from Red Data Bangladesh." />

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={localize(lang, feature, 'title')} desc={localize(lang, feature, 'desc')} compact />
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
