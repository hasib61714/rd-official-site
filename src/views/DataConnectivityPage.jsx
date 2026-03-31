'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { dataConnectivityData, localize } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const TEXTS = {
  en: {
    bc1: 'Services', bc2: 'Data Connectivity',
    h1: 'Data', h1a: 'Connectivity',
    sub: 'Red Data offers comprehensive Data Connectivity solutions that ensure seamless data transfer and communication within your organization. Our services include point-to-point and multipoint data links, VPN services, and dedicated leased lines, all designed to provide high-speed, secure, and reliable connections. All of our data services are delivered via Layer2/Layer3 and resilient national MPLS next generation network, monitored and maintained 24/7 by our NOC.',
    sectionBadge: 'What We Offer', sectionH: 'Connectivity', sectionA: 'Solutions',
    ctaH: 'Always-on network operations',
    ctaS: 'Our Network Operations Center monitors every link continuously, ensuring proactive fault detection and rapid resolution.',
    ctaBtn: 'Get a Quote', ctaBadgeLabel: '24/7 NOC Monitoring', callSales: 'Call Sales',
  },
  bn: {
    bc1: 'সেবাসমূহ', bc2: 'ডেটা কানেক্টিভিটি',
    h1: 'ডেটা', h1a: 'কানেক্টিভিটি',
    sub: 'রেড ডাটা ব্যাপক ডেটা কানেক্টিভিটি সমাধান প্রদান করে যা আপনার প্রতিষ্ঠানের মধ্যে নিরবচ্ছিন্ন ডেটা স্থানান্তর ও যোগাযোগ নিশ্চিত করে। আমাদের সেবার মধ্যে রয়েছে পয়েন্ট-টু-পয়েন্ট ও মাল্টিপয়েন্ট ডেটা লিংক, ভিপিএন সেবা এবং ডেডিকেটেড লিজড লাইন, যা উচ্চ-গতির, নিরাপদ ও নির্ভরযোগ্য সংযোগ প্রদান করে। আমাদের সমস্ত ডেটা সেবা লেয়ার২/লেয়ার৩ এবং জাতীয় এমপিএলএস নেক্সট জেনারেশন নেটওয়ার্কের মাধ্যমে সরবরাহ করা হয়, যা আমাদের এনওসি দ্বারা ২৪/৭ পর্যবেক্ষণ ও রক্ষণাবেক্ষণ করা হয়।',
    sectionBadge: 'আমাদের সেবাসমূহ', sectionH: 'কানেক্টিভিটি', sectionA: 'সমাধান',
    ctaH: 'সর্বদা সচল নেটওয়ার্ক অপারেশন',
    ctaS: 'আমাদের নেটওয়ার্ক অপারেশন সেন্টার প্রতিটি লিংক ক্রমাগত পর্যবেক্ষণ করে, সক্রিয় ত্রুটি সনাক্তকরণ এবং দ্রুত সমাধান নিশ্চিত করে।',
    ctaBtn: 'কোটেশন পান', ctaBadgeLabel: '২৪/৭ এনওসি মনিটরিং', callSales: 'বিক্রয় দলে কল করুন',
  },
}

const { features } = dataConnectivityData

export default function DataConnectivityPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Data Connectivity" description="Fiber-backed inter-office links, VPN, MPLS, and backhaul services from Red Data — Bangladesh's leading ISP." />

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={localize(lang, feature, 'title')} desc={localize(lang, feature, 'desc')} />
            ))}
          </div>
        </Container>
      </div>

      {/* NOC Banner */}
      <ServiceCTA
        heading={t.ctaH}
        subtext={t.ctaS}
        primaryLabel={t.ctaBtn}
        badge="bg-emerald-400"
        badgeLabel={t.ctaBadgeLabel}
        callSalesLabel={t.callSales}
      />

      <ExploreServices />

    </div>
  )
}
