'use client'
import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/layout/FloatingButtons'
import { NAVBAR_HEIGHT_PX } from '../constants'

function HashScrollHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT_PX
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 100)
    return () => clearTimeout(id)
  }, [pathname, searchParams])

  return null
}

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden">
          <Suspense fallback={null}>
            <HashScrollHandler />
          </Suspense>
          <Navbar />
          {children}
          <Footer />
          <FloatingButtons />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
