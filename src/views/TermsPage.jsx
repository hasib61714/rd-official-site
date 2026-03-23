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
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      {
        sub: '',
        text: `By subscribing to, accessing, or using any service offered by ${COMPANY} ("Red Data", "we", "us", or "our"), you ("Customer", "Subscriber", or "you") agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and any additional terms specific to individual services. If you do not agree to these Terms, you must not use our services.`,
      },
      {
        sub: '',
        text: 'These Terms constitute a legally binding agreement between you and Red Data. We reserve the right to modify these Terms at any time. Continued use of our services after changes take effect constitutes your acceptance of the revised Terms.',
      },
    ],
  },
  {
    id: 'services',
    title: '2. Services Provided',
    content: [
      {
        sub: '',
        text: 'Red Data is a BTRC-licensed Internet Service Provider (ISP) offering the following services in Bangladesh:',
      },
      {
        sub: 'Home Internet',
        text: 'High-speed fiber broadband services for residential customers across Bangladesh, delivered under packages (Raspberry, Maroon, Scarlet, and others) as published on our website and subject to availability in your area.',
      },
      {
        sub: 'Corporate Internet',
        text: 'Dedicated bandwidth services for business and enterprise customers with Service Level Agreements (SLAs) defining uptime guarantees, response times, and bandwidth commitments.',
      },
      {
        sub: 'Data Connectivity',
        text: 'Point-to-point and multipoint fiber links, MPLS VPN services, and leased-line solutions for enterprises requiring private, high-throughput inter-site connectivity.',
      },
      {
        sub: 'IP Telephony',
        text: 'Hosted and on-premise IP PBX solutions, cloud PBX, SIP trunking, call centre platforms, and IVR services.',
      },
      {
        sub: 'SMS Service',
        text: 'Bulk SMS, OTP delivery, transactional alerts, and promotional messaging services via our aggregator platform connected to all major Bangladeshi mobile operators.',
      },
      {
        sub: 'Domain & Hosting',
        text: 'Domain registration, NVMe shared hosting, VPS, dedicated servers, email hosting, and SSL certificate services.',
      },
      {
        sub: 'Managed Services',
        text: '24/7 Network Operations Centre (NOC) monitoring, managed network infrastructure, IT support, and security management services.',
      },
    ],
  },
  {
    id: 'eligibility',
    title: '3. Eligibility & Account Registration',
    content: [
      {
        sub: '',
        text: 'To subscribe to Red Data services, you must be at least 18 years of age or the age of majority in your jurisdiction, have the legal capacity to enter into binding contracts, provide accurate, complete, and current identification and contact information as required for BTRC-mandated KYC verification, and reside or operate within a geographic area served by Red Data\'s network.',
      },
      {
        sub: '',
        text: 'You are responsible for maintaining the confidentiality of your Self Corner login credentials and for all activities that occur under your account. You must notify us immediately at ' + EMAIL + ' if you suspect any unauthorised use of your account.',
      },
    ],
  },
  {
    id: 'billing',
    title: '4. Billing, Payments & Fees',
    content: [
      {
        sub: 'Monthly Billing Cycle',
        text: 'Residential subscriptions are billed monthly, with invoices generated on the 1st of each calendar month. Corporate and enterprise services are billed as per the applicable service agreement.',
      },
      {
        sub: 'Payment Due Date',
        text: 'Payment is due by the 7th of each month. Bills unpaid after the 7th may result in service suspension. Bills unpaid after 30 days may result in account termination and referral for debt recovery.',
      },
      {
        sub: 'One-Time Charges',
        text: 'A one-time connection or installation fee applies at the time of subscription as published in our current tariff schedule. Equipment deposits, where applicable, are refundable upon service termination and return of equipment in good condition.',
      },
      {
        sub: 'VAT',
        text: 'All published prices are inclusive of 5% Value Added Tax (VAT) as required under Bangladesh revenue law. Prices may change if the applicable VAT rate changes.',
      },
      {
        sub: 'Late Fees',
        text: 'A late payment surcharge may be applied to accounts overdue by more than 7 days. Red Data reserves the right to charge reasonable collection costs for accounts referred for external debt recovery.',
      },
      {
        sub: 'Refund Policy',
        text: 'Advance payments are non-refundable once a billing period has commenced. Pro-rata refunds may be considered for service terminations under exceptional circumstances at Red Data\'s sole discretion.',
      },
    ],
  },
  {
    id: 'acceptable-use',
    title: '5. Acceptable Use Policy',
    content: [
      {
        sub: '',
        text: 'You agree to use Red Data services only for lawful purposes and in compliance with all applicable laws of Bangladesh, including but not limited to the Bangladesh Telecommunication Act 2001, the Digital Security Act 2018, and the Information and Communication Technology Act 2006.',
      },
      {
        sub: 'Prohibited Activities',
        text: 'You must not use our services to access, transmit, store, or distribute material that is illegal, defamatory, harassing, threatening, or obscene; to conduct denial-of-service attacks, port scanning, or network intrusion activities; to send unsolicited bulk email (spam) or malicious software; to infringe upon the intellectual property rights of others; to resell or redistribute Red Data services without explicit written authorisation; or to engage in any activity that degrades network performance for other users.',
      },
      {
        sub: 'Network Integrity',
        text: 'You may not connect devices to our network in a manner that causes interference, network loops, routing instability, or security vulnerabilities. Routers, switches, and other customer-premises equipment must be properly secured and configured.',
      },
      {
        sub: 'Consequences of Violation',
        text: 'Breach of this Acceptable Use Policy may result in immediate service suspension or termination without refund, reporting to relevant law enforcement or regulatory authorities, and civil or criminal liability.',
      },
    ],
  },
  {
    id: 'service-levels',
    title: '6. Service Levels & Uptime',
    content: [
      {
        sub: 'Residential Services',
        text: 'Red Data targets a 99.5% monthly network availability for residential broadband services. Scheduled maintenance windows will be communicated with at least 24 hours\' advance notice wherever possible.',
      },
      {
        sub: 'Corporate & Enterprise Services',
        text: 'Enterprise uptime commitments (typically 99%) are defined per individual service agreements. Service credits for SLA breaches will be applied as specified in the applicable corporate agreement.',
      },
      {
        sub: 'Force Majeure',
        text: 'Red Data shall not be liable for service interruptions caused by circumstances beyond our reasonable control, including natural disasters, government actions, civil unrest, power grid failures, third-party infrastructure outages, or acts of terrorism.',
      },
    ],
  },
  {
    id: 'equipment',
    title: '7. Equipment & Infrastructure',
    content: [
      {
        sub: 'Company-Provided Equipment',
        text: 'Any modem, Optical Network Terminal (ONT), router, or other equipment provided by Red Data remains the property of Red Data. You are responsible for the safe custody of such equipment and will be liable for the cost of repair or replacement in the event of damage due to misuse, negligence, or theft.',
      },
      {
        sub: 'Customer-Owned Equipment',
        text: 'You may connect your own compatible equipment to our network. Red Data is not responsible for the configuration, security, or performance of customer-owned devices.',
      },
      {
        sub: 'Access Rights',
        text: 'You grant Red Data and its authorised technicians reasonable access to your premises for the purpose of installing, maintaining, inspecting, upgrading, or removing network equipment during normal business hours or at times agreed with you.',
      },
    ],
  },
  {
    id: 'termination',
    title: '8. Termination & Suspension',
    content: [
      {
        sub: 'Termination by Customer',
        text: 'You may terminate your subscription at any time by providing 30 days\' written notice to Red Data. Contact us at ' + EMAIL + ' or call ' + PHONE + '. Equipment provided by Red Data must be returned within 7 days of termination.',
      },
      {
        sub: 'Termination by Red Data',
        text: 'We may terminate or suspend your service with or without notice for: failure to pay outstanding amounts; breach of these Terms or the Acceptable Use Policy; providing false or fraudulent account information; court or regulatory orders; or closure of the service in your area.',
      },
      {
        sub: 'Effect of Termination',
        text: 'Upon termination, your right to use the service ceases immediately. All outstanding amounts remain payable. Red Data will retain your data as required by law and as described in our Privacy Policy.',
      },
    ],
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    content: [
      {
        sub: '',
        text: 'To the maximum extent permitted by applicable law, Red Data\'s total liability to you for any claim arising from or related to these Terms or our services shall not exceed the total amount paid by you to Red Data in the three (3) months immediately preceding the event giving rise to the claim.',
      },
      {
        sub: '',
        text: 'Red Data shall not be liable for any: loss of profits, revenue, or business opportunities; loss of data or corruption of data; indirect, incidental, special, consequential, or punitive damages; or damages arising from your use of third-party services, content, or websites accessed through our network.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: '10. Intellectual Property',
    content: [
      {
        sub: '',
        text: 'All content on the Red Data website and Self Corner portal — including logos, text, graphics, software, and trademarks — is the property of Red Data (Pvt.) Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: '11. Governing Law & Disputes',
    content: [
      {
        sub: '',
        text: 'These Terms shall be governed by and construed in accordance with the laws of the People\'s Republic of Bangladesh. Any dispute arising out of or in connection with these Terms that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.',
      },
      {
        sub: '',
        text: 'Before initiating legal proceedings, both parties agree to attempt good-faith resolution through direct negotiation for a period of 30 days. Escalated unresolved disputes may be referred to mediation or arbitration as agreed between the parties.',
      },
    ],
  },
  {
    id: 'contact',
    title: '12. Contact Information',
    content: [
      {
        sub: '',
        text: 'For any questions regarding these Terms of Service, please contact us:',
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
      {
        sub: 'Help Desk',
        text: '+880-9640-123123',
      },
    ],
  },
]

export default function TermsPage() {
  useScrollToTop()

  return (
    <>
      <PageMeta
        title="Terms of Service | Red Data"
        description="Red Data's Terms of Service — the rules and conditions governing your use of our internet and IT services."
      />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-600/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-red-800/6 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        <Container className="relative">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-slate-300">Terms of Service</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/15 text-red-400 border border-red-500/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Legal Document
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                Terms of <span className="bg-gradient-to-r from-red-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                The rules and conditions governing your relationship with Red Data and your use of our internet and IT services.
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
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 py-1 px-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-150 leading-snug"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick links */}
                <div className="mt-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-slate-800/40 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Related</p>
                  <div className="space-y-2">
                    <Link href="/privacy-policy" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Privacy Policy
                    </Link>
                    <a href="/tariff.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      BTRC Tariff PDF
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Document Body */}
            <article className="flex-1 min-w-0">
              {/* Intro box */}
              <div className="rounded-2xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 p-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Please read these Terms carefully</strong> before using any service provided by <strong>{COMPANY}</strong>. These Terms form a legally binding contract between you and Red Data. If you have any questions, contact us before proceeding.
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
                      {section.content.map((block, i) => (
                        <div key={i} className={block.sub ? 'rounded-xl border border-slate-100 dark:border-white/[0.06] bg-slate-50 dark:bg-slate-800/30 p-5' : ''}>
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
