'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useEffect } from 'react'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { managedServicesData, L } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'

const TEXTS = {
  en: {
    bc1: 'Services', bc2: 'Managed Services',
    h1: 'Managed', h1a: 'IT Services',
    sub: "Focus on your core business activities while we handle your IT infrastructure with Red Data's Managed Service. Our team of experts provides comprehensive management of your IT systems, including network monitoring, security, data backup, and disaster recovery. We offer proactive support and maintenance, ensuring optimal performance and minimizing downtime.",
    sectionBadge: 'Our Offerings', sectionH: 'Three Core', sectionA: 'Managed Services',
    serviceLabel: 'Service',
    ctaH: 'Let us manage your IT so you can focus on your business',
    ctaS: 'Schedule a free consultation with our managed services team today.',
    ctaBtn: 'Book Consultation', callSales: 'Call Sales',
  },
  bn: {
    bc1: 'সেবাসমূহ', bc2: 'ম্যানেজড সেবা',
    h1: 'ম্যানেজড', h1a: 'আইটি সেবা',
    sub: 'রেড ডাটার ম্যানেজড সার্ভিসের মাধ্যমে আমরা আপনার আইটি অবকাঠামো পরিচালনা করি, আপনি মনোযোগ দিন আপনার মূল ব্যবসায়। আমাদের বিশেষজ্ঞ দল নেটওয়ার্ক মনিটরিং, নিরাপত্তা, ডেটা ব্যাকআপ এবং দুর্যোগ পুনরুদ্ধারসহ আপনার আইটি সিস্টেমের সামগ্রিক ব্যবস্থাপনা করে। আমরা সক্রিয় সহায়তা ও রক্ষণাবেক্ষণ প্রদান করি, সর্বোত্তম কার্যকারিতা নিশ্চিত করি ও ডাউনটাইম কমাই।',
    sectionBadge: 'আমাদের সেবা', sectionH: 'তিনটি মূল', sectionA: 'ম্যানেজড সেবা',
    serviceLabel: 'সেবা',
    ctaH: 'আইটি আমাদের উপর ছেড়ে দিন, আপনি ব্যবসায় মনোযোগ দিন',
    ctaS: 'আজই আমাদের ম্যানেজড সার্ভিস দলের সাথে বিনামূল্যে পরামর্শ সেশন নির্ধারণ করুন।',
    ctaBtn: 'পরামর্শ বুক করুন', callSales: 'বিক্রয় দলে কল করুন',
  },
}

const { services } = managedServicesData

export default function ManagedServicesPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Managed Services" description="24/7 IT infrastructure management, network monitoring, and proactive support from Red Data Bangladesh." />

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

      {/* Services */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge={t.sectionBadge} heading={t.sectionH} headingAccent={t.sectionA} />

          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={s.title} className={`rounded-3xl border ${s.borderColor} ${s.bgColor} p-7 lg:p-9`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                      <IconMapper name={s.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{t.serviceLabel} {String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3">{L(lang, s, 'title')}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{L(lang, s, 'desc')}</p>
                    </div>
                  </div>
                  <div className="lg:w-64 shrink-0">
                    <ul className="space-y-2">
                      {(lang === 'bn' && s.features_bn ? s.features_bn : s.features).map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <svg className={`w-4 h-4 bg-gradient-to-br ${s.color} bg-clip-text shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ color: 'currentColor' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
