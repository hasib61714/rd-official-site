'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useState } from 'react'
import Link from 'next/link'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'
import { selfCornerData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import { useLanguage } from '../context/LanguageContext'

const TEXTS = {
  en: {
    bc: 'Self Corner', heroBadge: 'Customer Portal',
    h1: 'Self', h1a: 'Corner',
    sub: 'Manage your Red Data account, pay bills, track usage, and raise support tickets — all in one place.',
    tabLogin: 'Sign In', tabRegister: 'Register',
    loginH: 'Welcome back', loginS: 'Sign in to manage your account',
    labelUserId: 'User ID / Username', placeholderUserId: 'Enter your User ID',
    labelPw: 'Password', placeholderPw: 'Enter your password',
    rememberMe: 'Remember me', forgotPw: 'Forgot Password?',
    signInBtn: 'Sign In to Portal',
    registerH: 'Create Account', registerS: 'Register to access self-service portal',
    labelName: 'Full Name', placeholderName: 'Your full name',
    labelPhone: 'Phone Number', labelEmail: 'Email Address',
    createBtn: 'Create Account',
    needHelp: 'Need help?',
    portalBadge: 'Portal Features', portalH: 'Everything you need', portalA: 'in one place',
    portalS: 'Manage your internet subscription without ever needing to call — fully self-service.',
    quickPayH: 'Quick Bill Pay', quickPayS: 'Pay your bill instantly without signing in',
    quickPayBtn: 'Pay Bill',
  },
  bn: {
    bc: 'সেলফ কর্নার', heroBadge: 'গ্রাহক পোর্টাল',
    h1: 'সেলফ', h1a: 'কর্নার',
    sub: 'আপনার রেড ডাটা অ্যাকাউন্ট পরিচালনা করুন, বিল পরিশোধ করুন, ব্যবহার ট্র্যাক করুন এবং সাপোর্ট টিকিট তুলুন — সব এক জায়গায়।',
    tabLogin: 'সাইন ইন', tabRegister: 'নিবন্ধন',
    loginH: 'স্বাগতম', loginS: 'আপনার অ্যাকাউন্ট পরিচালনা করতে সাইন ইন করুন',
    labelUserId: 'ইউজার আইডি / ব্যবহারকারীর নাম', placeholderUserId: 'আপনার ইউজার আইডি লিখুন',
    labelPw: 'পাসওয়ার্ড', placeholderPw: 'আপনার পাসওয়ার্ড লিখুন',
    rememberMe: 'আমাকে মনে রাখুন', forgotPw: 'পাসওয়ার্ড ভুলে গেছেন?',
    signInBtn: 'পোর্টালে সাইন ইন করুন',
    registerH: 'অ্যাকাউন্ট তৈরি করুন', registerS: 'সেলফ-সার্ভিস পোর্টাল অ্যাক্সেস করতে নিবন্ধন করুন',
    labelName: 'পূর্ণ নাম', placeholderName: 'আপনার পূর্ণ নাম',
    labelPhone: 'ফোন নম্বর', labelEmail: 'ইমেইল ঠিকানা',
    createBtn: 'অ্যাকাউন্ট তৈরি করুন',
    needHelp: 'সাহায্য দরকার?',
    portalBadge: 'পোর্টাল ফিচার', portalH: 'আপনার প্রয়োজনীয় সবকিছু', portalA: 'এক জায়গায়',
    portalS: 'কল না করেই আপনার ইন্টারনেট সাবস্ক্রিপশন পরিচালনা করুন — সম্পূর্ণ স্ব-সেবা।',
    quickPayH: 'দ্রুত বিল পেমেন্ট', quickPayS: 'সাইন ইন ছাড়াই তাৎক্ষণিক বিল পরিশোধ করুন',
    quickPayBtn: 'বিল পরিশোধ',
  },
}

const { features } = selfCornerData

export default function SelfCornerPage() {
  useScrollToTop()
  const [tab, setTab] = useState('login')
  const [form, setForm] = useState({ userId: '', password: '', name: '', phone: '', email: '' })
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Online portal coming soon. Please call +880-9640-112233 for account assistance.')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Self Corner" description="Manage your Red Data account, pay bills, view usage, and raise support tickets from our customer self-service portal." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: t.bc }]} />
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              {t.heroBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              {t.h1}{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {t.h1a}
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{t.sub}</p>
          </div>
      </PageHero>

      {/* Main Content */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Left: Login / Register Card */}
            <div className="lg:w-[420px] w-full shrink-0">
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700/60 overflow-hidden">
                {/* Tab switcher */}
                <div className="flex border-b border-slate-100 dark:border-slate-700/60">
                  <button
                    onClick={() => setTab('login')}
                    className={`flex-1 py-4 text-sm font-bold transition-all ${tab === 'login' ? 'text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 -mb-px' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                  >
                    {t.tabLogin}
                  </button>
                  <button
                    onClick={() => setTab('register')}
                    className={`flex-1 py-4 text-sm font-bold transition-all ${tab === 'register' ? 'text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 -mb-px' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                  >
                    {t.tabRegister}
                  </button>
                </div>

                <div className="p-7">
                  {tab === 'login' ? (
                    <>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t.loginH}</h3>
                      <p className="text-slate-400 text-xs mb-6">{t.loginS}</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">{t.labelUserId}</label>
                          <input
                            type="text"
                            name="userId"
                            value={form.userId}
                            onChange={handleChange}
                            placeholder={t.placeholderUserId}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">{t.labelPw}</label>
                          <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder={t.placeholderPw}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <label className="flex items-center gap-2 text-slate-500 dark:text-slate-400 cursor-pointer">
                            <input type="checkbox" className="rounded border-slate-300 text-red-600" />
                            {t.rememberMe}
                          </label>
                          <button type="button" className="text-red-600 dark:text-red-400 hover:underline font-medium">
                            {t.forgotPw}
                          </button>
                        </div>
                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all"
                        >
                          {t.signInBtn}
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t.registerH}</h3>
                      <p className="text-slate-400 text-xs mb-6">{t.registerS}</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">{t.labelName}</label>
                          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t.placeholderName} required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">{t.labelPhone}</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="01XXXXXXXXX" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">{t.labelEmail}</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                        <button type="submit" className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all">
                          {t.createBtn}
                        </button>
                      </form>
                    </>
                  )}

                  <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-700/60">
                    <p className="text-center text-xs text-slate-400">
                      {t.needHelp}{' '}
                      <a href="tel:+8809640112233" className="text-red-600 dark:text-red-400 hover:underline font-medium">
                        Call 09640-112233
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="flex-1">
              <SectionHeader center={false} badge={t.portalBadge} heading={t.portalH} headingAccent={t.portalA} subheading={t.portalS} className="mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                      <IconMapper name={feature.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{feature.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pay Bill shortcut */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-0.5">{t.quickPayH}</h4>
                  <p className="text-emerald-700 dark:text-emerald-400 text-xs">{t.quickPayS}</p>
                </div>
                <Link
                  href="/pay-bill"
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
                >
                  {t.quickPayBtn}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}
