'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'

const LAST_UPDATED = 'March 1, 2026'
const COMPANY = 'Red Data (Pvt.) Limited'
const EMAIL = 'info@reddata.com.bd'
const PHONE = '+880-9640-112233'
const ADDRESS = 'Level 19, SimpleTree Attalika, 134 Gulshan Avenue, Dhaka-1212, Bangladesh'

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    content: [
      {
        sub: '1.1 Personal Identification Information',
        text: 'When you subscribe to our services or contact us, we may collect: full name, national ID or passport number, date of birth, postal and billing address, email address, mobile and telephone numbers, and photographs or scanned documents required for BTRC-mandated KYC (Know Your Customer) verification.',
      },
      {
        sub: '1.2 Service & Technical Data',
        text: 'We automatically collect data related to your use of our network including: IP addresses assigned to your connection, MAC addresses of registered devices, bandwidth consumption and usage statistics, connection timestamps (login/logout), and network diagnostic logs necessary for fault resolution and service optimisation.',
      },
      {
        sub: '1.3 Billing & Financial Information',
        text: 'To process payments, we collect billing account details, mobile banking transaction IDs (bKash, Nagad, Rocket), bank account or card information where applicable, and payment history. We do not store complete card numbers on our servers; all card transactions are processed via PCI-DSS compliant third-party gateways.',
      },
      {
        sub: '1.4 Website & Portal Usage Data',
        text: 'When you visit our website or Self Corner portal, we may collect browser type, operating system, pages visited, referring URLs, session duration, and device identifiers through cookies and similar technologies.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: [
      {
        sub: '',
        text: 'We use the information we collect for the following purposes:',
      },
      {
        sub: 'Service Delivery',
        text: 'To provision, activate, manage, and support your internet and IT services; to process applications, verify identity per BTRC regulations, and configure your connection.',
      },
      {
        sub: 'Billing & Payments',
        text: 'To generate invoices, process monthly payments, send payment reminders, and manage account credit or refunds.',
      },
      {
        sub: 'Customer Support',
        text: 'To respond to queries, resolve technical issues, track support tickets, and improve the quality and speed of our helpdesk services.',
      },
      {
        sub: 'Service Improvement',
        text: 'To analyse network performance, identify congestion, optimise routing, plan infrastructure upgrades, and develop new service offerings.',
      },
      {
        sub: 'Legal & Regulatory Compliance',
        text: 'To comply with orders from the Bangladesh Telecommunication Regulatory Commission (BTRC), law enforcement agencies, and judicial authorities as required under the Bangladesh Telecommunication Act, 2001 and related regulations.',
      },
      {
        sub: 'Marketing Communications',
        text: 'To send promotional offers, new package announcements, and service updates via SMS, email, or phone. You may opt out of marketing communications at any time by contacting us.',
      },
    ],
  },
  {
    id: 'data-sharing',
    title: '3. Data Sharing & Disclosure',
    content: [
      {
        sub: '',
        text: 'We do not sell, rent, or trade your personal information to third parties. We may share your data in the following limited circumstances:',
      },
      {
        sub: 'Service Partners',
        text: 'With carefully selected vendors and contractors who assist us in delivering services — such as payment processors, network equipment suppliers, and cloud hosting providers — under strict confidentiality obligations.',
      },
      {
        sub: 'Regulatory Authorities',
        text: 'With BTRC, the Bangladesh Computer Council (BCC), or other government bodies as required by law, including lawful interception obligations under national security or criminal investigations.',
      },
      {
        sub: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or asset sale, customer data may be transferred as part of the transaction. You will be notified prior to any such transfer.',
      },
      {
        sub: 'Legal Requirements',
        text: 'When disclosure is required by law, court order, subpoena, or government demand, or where necessary to protect the rights, property, or safety of Red Data, its customers, or the public.',
      },
    ],
  },
  {
    id: 'data-security',
    title: '4. Data Security',
    content: [
      {
        sub: '',
        text: 'We implement industry-standard technical and organisational security measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These include:',
      },
      {
        sub: 'Technical Safeguards',
        text: 'TLS/SSL encryption for all web and portal communications, encrypted storage for sensitive records, firewall-protected network infrastructure, and role-based access controls limiting data access to authorised personnel only.',
      },
      {
        sub: 'Operational Safeguards',
        text: 'Regular security audits, staff training on data handling procedures, and incident response protocols to detect and address data breaches promptly.',
      },
      {
        sub: '',
        text: 'Despite our efforts, no method of data transmission or storage is 100% secure. If you believe your account has been compromised, please contact us immediately at ' + EMAIL,
      },
    ],
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    content: [
      {
        sub: '',
        text: 'We retain your personal information for as long as your account is active or as necessary to provide services. After account termination, we retain data for a period required by applicable law — typically a minimum of three (3) years for subscriber records under BTRC regulations — after which records are securely deleted or anonymised.',
      },
      {
        sub: '',
        text: 'Network traffic logs are retained for a minimum of one (1) year as required under Bangladesh telecommunications law. Billing records are retained for a minimum of five (5) years for accounting and audit purposes.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    content: [
      {
        sub: '',
        text: 'As a Red Data customer, you have the following rights regarding your personal data:',
      },
      {
        sub: 'Access',
        text: 'You may request a copy of the personal data we hold about you at any time.',
      },
      {
        sub: 'Correction',
        text: 'You may request correction of inaccurate or incomplete personal information.',
      },
      {
        sub: 'Deletion',
        text: 'You may request deletion of your data where it is no longer necessary for the purposes it was collected, subject to our legal retention obligations.',
      },
      {
        sub: 'Opt-Out',
        text: 'You may opt out of marketing communications at any time by contacting our support team or by using the unsubscribe mechanism in our emails.',
      },
      {
        sub: '',
        text: 'To exercise any of these rights, please contact us at ' + EMAIL + ' or call ' + PHONE + '. We will respond within 30 days.',
      },
    ],
  },
  {
    id: 'cookies',
    title: '7. Cookies & Tracking Technologies',
    content: [
      {
        sub: '',
        text: 'Our website and Self Corner portal use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyse traffic patterns. Types of cookies we use include:',
      },
      {
        sub: 'Essential Cookies',
        text: 'Required for the website and portal to function correctly. These cannot be disabled.',
      },
      {
        sub: 'Analytics Cookies',
        text: 'Help us understand how visitors interact with our site using tools such as Google Analytics. Data collected is aggregated and anonymised.',
      },
      {
        sub: 'Preference Cookies',
        text: 'Remember your settings such as language preference and dark/light mode selection.',
      },
      {
        sub: '',
        text: 'You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.',
      },
    ],
  },
  {
    id: 'third-party-links',
    title: '8. Third-Party Links',
    content: [
      {
        sub: '',
        text: 'Our website may contain links to third-party websites (e.g. social media platforms, payment portals). We are not responsible for the privacy practices of these external sites and encourage you to review their respective privacy policies before providing any personal information.',
      },
    ],
  },
  {
    id: 'children',
    title: '9. Children\'s Privacy',
    content: [
      {
        sub: '',
        text: 'Our services are not directed at children under the age of 18. We do not knowingly collect personal information from minors. If a parent or guardian believes their child has provided us with personal data without consent, please contact us immediately and we will delete that information.',
      },
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    content: [
      {
        sub: '',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. We will notify existing customers of material changes via email or a prominent notice on our website at least 14 days before the change takes effect. The "Last Updated" date at the top of this page reflects the most recent revision.',
      },
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: [
      {
        sub: '',
        text: 'If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact our Data Protection Officer:',
      },
      {
        sub: COMPANY,
        text: ADDRESS,
      },
      {
        sub: 'Email',
        text: EMAIL,
      },
      {
        sub: 'Hotline',
        text: PHONE,
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  useScrollToTop()

  return (
    <>
      <PageMeta
        title="Privacy Policy | Red Data"
        description="Red Data's Privacy Policy — how we collect, use, and protect your personal information."
      />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red-600/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-800/6 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        <Container className="relative">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-slate-300">Privacy Policy</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/15 text-red-400 border border-red-500/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Legal Document
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                Privacy <span className="bg-gradient-to-r from-red-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                How Red Data collects, uses, protects, and shares your personal information when you use our services.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-2 lg:text-right text-sm text-slate-500">
              <div className="flex items-center lg:justify-end gap-2">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span>Last updated: <strong className="text-slate-300">{LAST_UPDATED}</strong></span>
              </div>
              <div className="flex items-center lg:justify-end gap-2">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>Effective: <strong className="text-slate-300">March 1, 2026</strong></span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-slate-900 min-h-screen">
        <Container className="py-16">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sticky Table of Contents */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-slate-800/40 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Contents</p>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 py-1 px-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-150 leading-snug"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Contact CTA */}
                <div className="mt-5 rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/5 p-5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Have questions?</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Our team is happy to explain how we handle your data.</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-semibold hover:underline"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {EMAIL}
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Body */}
            <article className="flex-1 min-w-0">
              {/* Intro box */}
              <div className="rounded-2xl border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/5 p-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    This Privacy Policy applies to all services provided by <strong>{COMPANY}</strong>, a BTRC-licensed Internet Service Provider registered in Bangladesh. By using our services or visiting our website, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 rounded-full bg-gradient-to-b from-red-500 to-red-700 flex-shrink-0" />
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                    </div>
                    <div className="space-y-5 pl-4">
                      {section.content.map((block, blockIndex) => (
                        <div key={blockIndex} className={block.sub ? 'rounded-xl border border-slate-100 dark:border-white/[0.06] bg-slate-50 dark:bg-slate-800/30 p-5' : ''}>
                          {block.sub && (
                            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                              {block.sub}
                            </p>
                          )}
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{block.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-px bg-slate-100 dark:bg-white/[0.05] mt-10" />
                  </section>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-800 dark:to-slate-900 border border-white/[0.08] p-8 text-center">
                <p className="text-white font-bold text-lg mb-2">{COMPANY}</p>
                <p className="text-slate-400 text-sm mb-4">{ADDRESS}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <a href={`mailto:${EMAIL}`} className="text-red-400 hover:text-red-300 transition-colors font-medium">{EMAIL}</a>
                  <span className="hidden sm:block text-slate-700">·</span>
                  <a href={`tel:${PHONE.replace(/-/g,'')}`} className="text-red-400 hover:text-red-300 transition-colors font-medium">{PHONE}</a>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </div>
    </>
  )
}
