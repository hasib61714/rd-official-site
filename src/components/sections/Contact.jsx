'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { homeContactMethods } from '../../data/siteData'
import { useState } from 'react'
import ContactIcon from '../shared/ContactIcon'

const contactMethods = homeContactMethods

// Replace YOUR_FORM_ID with your Formspree form ID
// 1. Go to https://formspree.io → Sign up free
// 2. Create a new form → copy the form ID (e.g. xpwzabcd)
// 3. Paste it below replacing YOUR_FORM_ID
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/info@reddata.com.bd'

export default function Contact() {
  const { lang } = useLanguage()
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm((previousForm) => ({ ...previousForm, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `[Red Data Website] New Contact Request`,
          _template: 'table',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSent(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-radial from-red-600/8 to-transparent pointer-events-none" />

      <Container className="relative">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            {getText(lang, 'badge.contact')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            {getText(lang, 'contact.heading')}{' '}
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {getText(lang, 'contact.accent')}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {getText(lang, 'contact.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact Methods */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactMethods.map((method, methodIndex) => (
              <Reveal key={method.label} delay={methodIndex * 80}>
                <a
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noreferrer' : undefined}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] hover:border-red-500/25 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                    <ContactIcon iconKey={method.iconKey} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{method.label}</p>
                    <p className="text-slate-800 dark:text-white font-semibold text-sm group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">{method.value}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{method.note}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Support Hours */}
            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/15">
              <p className="text-red-400 font-semibold text-sm mb-2">{getText(lang, 'contact.supportHours')}</p>
              <div className="space-y-1.5 text-sm text-slate-400">
                <div className="flex justify-between"><span>{getText(lang, 'contact.technical')}</span><span className="text-slate-900 dark:text-white font-medium">24 / 7</span></div>
                <div className="flex justify-between"><span>{getText(lang, 'contact.sales')}</span><span className="text-slate-900 dark:text-white font-medium">Sat–Thu, 9am–7pm</span></div>
                <div className="flex justify-between"><span>{getText(lang, 'contact.billing')}</span><span className="text-slate-900 dark:text-white font-medium">Sat–Thu, 10am–6pm</span></div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form + Map */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/[0.08] p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{getText(lang, 'contact.successTitle')}</h3>
                  <p className="text-slate-400 text-sm max-w-xs">{getText(lang, 'contact.successSub')}</p>
                  <button
                    onClick={() => { setSent(false); setError(''); setForm({ name: '', company: '', phone: '', email: '', message: '' }) }}
                    className="mt-6 text-red-400 text-sm hover:text-red-300 transition-colors font-medium"
                  >
                    {lang === 'bn' ? 'আরেকটি বার্তা পাঠান →' : 'Send another message →'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formName')} <span className="text-red-500 dark:text-red-400">*</span></span>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="e.g. Rahul Ahmed"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formCompany')}</span>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="e.g. Gulshan, Dhaka"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formPhone')} <span className="text-red-500 dark:text-red-400">*</span></span>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="+880 1700-000000"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formEmail')}</span>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formMessage')} <span className="text-red-500 dark:text-red-400">*</span></span>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your location, connection type (home/business), preferred speed plan…"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200 resize-none"
                    />
                  </label>
                  {error && (
                    <p className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white font-semibold text-sm hover:from-red-500 hover:via-red-400 hover:to-orange-400 shadow-lg shadow-orange-500/20 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {getText(lang, 'contact.sending')}
                      </>
                    ) : (
                      <>
                        {getText(lang, 'contact.formSubmit')}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-slate-600 text-xs text-center">{lang === 'bn' ? 'আমরা আপনার তথ্য শেয়ার করি না। জমা দিয়ে আপনি আমাদের গোপনীয়তা নীতিতে সম্মত হচ্ছেন।' : 'We never share your details. By submitting you agree to our Privacy Policy.'}</p>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/[0.08] shadow-sm flex-1 min-h-[280px]">
              <iframe
                title="Red Data Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7!2d90.4130632!3d23.7925679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7004c26acc1%3A0xfcf2d4ccdd97965!2sRed%20Data%20(Pvt.)%20Limited!5e0!3m2!1sen!2sbd!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
