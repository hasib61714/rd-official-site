'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '../ui/Container'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import { navServiceItems, contactBarData, L } from '../../data/siteData'
import IconMapper from '../ui/IconMapper'

// Service dropdown items
const serviceItems = navServiceItems

// Static class helpers — defined outside component to avoid recreation on every render
const linkCls = (active = false) =>
  `relative px-2.5 py-1.5 rounded-lg text-[11.5px] font-semibold transition-all duration-200 whitespace-nowrap ${
    active
      ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.07]'
  }`

const mobileLinkCls = (active = false) =>
  `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
    active
      ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.07]'
  }`

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar() {
  const { dark, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLang()
  const T = (path) => getText(lang, path)

  const [menuOpen,           setMenuOpen]           = useState(false)
  const [servicesOpen,       setServicesOpen]       = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled,           setScrolled]           = useState(false)
  const [barsHidden,         setBarsHidden]         = useState(false)
  const dropdownRef = useRef(null)
  const lastScrollY = useRef(0)

  const pathname = usePathname()
  const directNavPaths = ['/corporate-internet', '/home-internet']
  const isServiceActive = () => serviceItems.some(item => pathname === item.to && !directNavPaths.includes(item.to))

  // Auto-close menus on navigation
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Scroll tracking: shadow + bars hide/show
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const goingDown = currentY > lastScrollY.current
      lastScrollY.current = currentY
      setScrolled(currentY > 8)
      if (goingDown && currentY > 120) {
        setBarsHidden(true)
      } else if (!goingDown) {
        setBarsHidden(false)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close services dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Heights: dark strip h-9 = 36px
  const barsHeight = 36

  return (
    <>
      {/* Scrollable Bars (TopBar + Contact Strip) */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 ease-in-out ${
          barsHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Dark Contact Strip */}
        <div className="bg-slate-900 dark:bg-black border-b border-white/[0.06]">
          <Container>
            <div className="flex items-center justify-between h-9">
              {/* Left — contact info */}
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${contactBarData.phone.raw}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white text-[11px] transition-colors duration-200"
                >
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="hidden sm:inline">{contactBarData.phone.display}</span>
                  <span className="sm:hidden">{lang === 'bn' ? 'হটলাইন' : 'Hotline'}</span>
                </a>
                <span className="hidden md:block w-px h-3 bg-white/20" />
                <a
                  href={`mailto:${contactBarData.email}`}
                  className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white text-[11px] transition-colors duration-200"
                >
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {contactBarData.email}
                </a>
                <span className="hidden lg:block w-px h-3 bg-white/20" />
                <span className="hidden lg:flex items-center gap-1.5 text-slate-500 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {lang === 'bn' ? 'BTRC লাইসেন্সপ্রাপ্ত ISP' : 'BTRC Licensed ISP'}
                </span>
              </div>

              {/* Right — social links */}
              <div className="flex items-center gap-1">
                {contactBarData.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    aria-label={s.label}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Main Nav Header — always fixed, adjusts top */}
      <header
        style={{ top: barsHidden ? 0 : barsHeight }}
        className={`fixed left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl dark:bg-slate-900 shadow-lg shadow-black/5 dark:shadow-black/60 border-slate-200/80 dark:border-white/10'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/[0.08]'
        }`}
      >
      <Container>
        <div className="flex items-center justify-between h-14 gap-2">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src={dark ? '/RD Logo W.png' : '/logo.png'}
              alt="Red Data"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">

            {/* Home */}
            <Link href="/" className={linkCls(pathname === '/')}>
              {T('nav.home')}
            </Link>

            {/* Corporate Internet */}
            <Link href="/corporate-internet" className={linkCls(pathname === '/corporate-internet')}>
              {T('nav.corporateInternet')}
            </Link>

            {/* Home Internet */}
            <Link href="/home-internet" className={linkCls(pathname === '/home-internet')}>
              {T('nav.homeInternet')}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`${linkCls(isServiceActive() || servicesOpen)} flex items-center gap-1`}
              >
                {T('nav.services')}
                <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[500px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.09] shadow-2xl shadow-black/10 dark:shadow-black/60 overflow-hidden z-50">
                  <div className="h-0.5 w-full bg-gradient-to-r from-red-500 via-orange-400 to-amber-300" />
                  <div className="p-3">
                    <p className="px-3 pt-1.5 pb-2 text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em]">{lang === 'bn' ? 'আমাদের সেবা' : 'Our Services'}</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.to || item.href || '/'}
                          onClick={() => setServicesOpen(false)}
                          className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 ${
                            pathname === item.to
                              ? 'bg-red-50 dark:bg-red-500/10'
                              : 'hover:bg-slate-50 dark:hover:bg-white/[0.05]'
                          }`}
                        >
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/[0.07] flex items-center justify-center text-red-500 group-hover:bg-red-50 dark:group-hover:bg-red-500/15 group-hover:border-red-200 dark:group-hover:border-red-500/20 transition-all duration-150">
                            <IconMapper name={item.icon} className="w-4 h-4" />
                          </span>
                          <div className="min-w-0">
                            <p className={`text-xs font-semibold leading-snug ${
                              pathname === item.to
                                ? 'text-red-600 dark:text-red-400'
                                : 'text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'
                            }`}>{L(lang, item, 'label')}</p>
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-snug mt-0.5">{L(lang, item, 'desc')}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 mx-1 pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                        {lang === 'bn' ? 'BTRC লাইসেন্সপ্রাপ্ত ISP' : 'BTRC Licensed ISP'}
                      </span>
                      <a href="/#services" onClick={() => setServicesOpen(false)} className="text-[11px] font-semibold text-red-600 dark:text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors">
                        {lang === 'bn' ? 'সব সেবা দেখুন →' : 'View all services →'}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link href="/about-us" className={linkCls(pathname === '/about-us')}>
              {T('nav.aboutUs')}
            </Link>

            {/* Contact Us */}
            <Link href="/contact" className={linkCls(pathname === '/contact')}>
              {T('nav.contactUs')}
            </Link>

          </nav>

          {/* Desktop Right Controls */}
          <div className="hidden xl:flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all duration-200
                         border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300
                         hover:border-red-300 dark:hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-400"
              title="Switch language"
            >
              <span>{lang === 'en' ? '🇧🇩' : '🇬🇧'}</span>
              <span>{lang === 'en' ? 'বাং' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg border
                         border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300
                         hover:border-red-300 dark:hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-400
                         transition-all duration-200"
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="/#pricing"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[11.5px] font-bold
                         bg-gradient-to-r from-red-600 to-red-700 text-white
                         hover:from-red-500 hover:to-red-600
                         shadow-md shadow-red-600/20 hover:shadow-red-600/35
                         transition-all duration-200 active:scale-95"
            >
              {T('nav.getStarted')}
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="xl:hidden flex items-center gap-1.5">
            <button
              onClick={toggleLang}
              className="px-2 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
            >
              {lang === 'en' ? 'বাং' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-white rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[860px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="h-px bg-slate-100 dark:bg-white/[0.07] mb-2" />
          <nav className="flex flex-col gap-0.5">

            <Link href="/" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h3a1 1 0 001-1v-3h2v3a1 1 0 001 1h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
              </span>
              {T('nav.home')}
            </Link>

            <Link href="/corporate-internet" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/corporate-internet')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0">
                <IconMapper name="Building2" className="w-4 h-4" />
              </span>
              {T('nav.corporateInternet')}
            </Link>

            <Link href="/home-internet" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/home-internet')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0">
                <IconMapper name="Home" className="w-4 h-4" />
              </span>
              {T('nav.homeInternet')}
            </Link>

            {/* Services accordion */}
            <div>
              <button onClick={() => setMobileServicesOpen(v => !v)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isServiceActive()
                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.07]'
                }`}>
                <span className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0">
                    <IconMapper name="Zap" className="w-4 h-4" />
                  </span>
                  {T('nav.services')}
                </span>
                <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 mt-1 pl-3 border-l border-slate-200 dark:border-white/[0.08] flex flex-col gap-0.5 pb-1">
                  {serviceItems.map(item => (
                    <Link key={item.label} href={item.to || item.href || '/'}
                      onClick={() => { setMobileServicesOpen(false); setMenuOpen(false) }}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        pathname === item.to
                          ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 font-semibold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                      }`}>
                      <span className="flex-shrink-0 text-red-500">
                        <IconMapper name={item.icon} className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="font-semibold text-xs leading-snug">{L(lang, item, 'label')}</p>
                        <p className="text-[10px] text-slate-400 leading-snug">{L(lang, item, 'desc')}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about-us" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/about-us')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0">
                <IconMapper name="Info" className="w-4 h-4" />
              </span>
              {T('nav.aboutUs')}
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/contact')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0">
                <IconMapper name="Mail" className="w-4 h-4" />
              </span>
              {T('nav.contactUs')}
            </Link>
          </nav>

          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/[0.07]">
            <a
              href="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/20 transition-all duration-200"
            >
              {T('nav.getStarted')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </Container>
    </header>
    </>
  )
}

