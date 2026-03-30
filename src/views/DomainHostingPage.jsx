'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { domainHostingData, localize } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const TEXTS = {
  en: {
    bc1: 'Services', bc2: 'Domain & Hosting',
    h1: 'Domain &', h1a: 'Hosting',
    sub: "Establish your online presence with Red Data's Domain & Hosting Service. We offer a range of domain registration options and reliable hosting solutions tailored to your needs. Our hosting packages include robust security features, high uptime guarantees, and excellent customer support, ensuring your website runs smoothly and securely. Whether you're a small business or a large enterprise, our services provide the foundation for a successful online presence.",
    sectionBadge: "What's Included", sectionH: 'Complete Web', sectionA: 'Infrastructure',
    ctaBtn: 'Get Started',
  },
  bn: {
    bc1: 'সেবাসমূহ', bc2: 'ডোমেইন ও হোস্টিং',
    h1: 'ডোমেইন ও', h1a: 'হোস্টিং',
    sub: 'রেড ডাটার ডোমেইন ও হোস্টিং সেবার মাধ্যমে আপনার অনলাইন উপস্থিতি নিশ্চিত করুন। আমরা আপনার চাহিদা অনুযায়ী ডোমেইন রেজিস্ট্রেশন ও নির্ভরযোগ্য হোস্টিং সমাধান প্রদান করি। আমাদের হোস্টিং প্যাকেজে রয়েছে শক্তিশালী নিরাপত্তা, উচ্চ আপটাইম গ্যারান্টি ও চমৎকার গ্রাহক সহায়তা, যা আপনার ওয়েবসাইটকে মসৃণ ও নিরাপদ রাখে। ছোট ব্যবসা হোক বা বড় প্রতিষ্ঠান — আমাদের সেবা আপনার সফল অনলাইন উপস্থিতির ভিত্তি তৈরি করে।',
    sectionBadge: 'কী অন্তর্ভুক্ত', sectionH: 'সম্পূর্ণ', sectionA: 'ওয়েব সমাধান',
    ctaBtn: 'শুরু করুন',
  },
}

const { features } = domainHostingData

export default function DomainHostingPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Domain & Hosting" description="Domain registration, NVMe web hosting, and SSL certificates — reliable web solutions from Red Data Bangladesh." />

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={localize(lang, feature, 'title')} compact />
            ))}
          </div>
        </Container>
      </div>

      {/* Get Started CTA */}
      <div className="py-14 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </Container>
      </div>

      <ExploreServices />
    </div>
  )
}
