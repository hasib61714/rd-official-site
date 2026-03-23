'use client'
import { useState, useEffect } from 'react'
import { useLang } from '../../context/LanguageContext'

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const { lang } = useLang()

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* Live Chat Panel */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 origin-bottom-right ${
          chatOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        {/* WhatsApp Option */}
        <a
          href="https://wa.me/+8801971521964"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm font-medium px-4 py-2.5 rounded-2xl shadow-lg hover:bg-[#25D366] hover:text-white hover:border-transparent hover:scale-105 transition-all duration-200"
        >
          <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.66 1.438 5.168L2 22l4.944-1.417A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.073-1.116l-.292-.174-3.035.87.846-3.134-.191-.303A7.954 7.954 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
            </svg>
          </span>
          <div className="text-left">
            <p className="font-semibold text-xs leading-tight">WhatsApp</p>
            <p className="text-xs opacity-60 group-hover:opacity-80 leading-tight">{lang === 'bn' ? 'চ্যাট করুন' : 'Chat with us'}</p>
          </div>
        </a>

        {/* Email Option */}
        <a
          href="mailto:info@reddata.com.bd"
          aria-label="Send Email"
          className="group flex items-center gap-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm font-medium px-4 py-2.5 rounded-2xl shadow-lg hover:bg-red-600 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-200"
        >
          <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <div className="text-left">
            <p className="font-semibold text-xs leading-tight">{lang === 'bn' ? 'ইমেইল করুন' : 'Email Us'}</p>
            <p className="text-xs opacity-60 group-hover:opacity-80 leading-tight">info@reddata.com.bd</p>
          </div>
        </a>
      </div>

      {/* Main Chat Toggle Button */}
      <div className="flex items-center gap-3">
        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`w-10 h-10 rounded-full bg-slate-700 dark:bg-slate-600 flex items-center justify-center shadow-lg hover:bg-slate-600 hover:scale-110 transition-all duration-300 ${
            showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Chat Toggle */}
        <button
          onClick={() => setChatOpen(prev => !prev)}
          aria-label="Toggle live chat"
          className="relative w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 active:scale-95 flex items-center justify-center shadow-xl shadow-red-600/40 hover:shadow-red-500/50 transition-all duration-300"
        >
          {/* Pulse ring */}
          {!chatOpen && (
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30" />
          )}
          {/* Chat icon / Close icon */}
          <svg
            className={`w-6 h-6 text-white transition-all duration-300 ${chatOpen ? 'opacity-0 scale-75 rotate-90 absolute' : 'opacity-100 scale-100 rotate-0'}`}
            fill="currentColor" viewBox="0 0 24 24"
          >
            <path d="M12 3C6.477 3 2 6.925 2 11.8c0 2.4.99 4.57 2.6 6.16L3 22l4.3-1.43A10.47 10.47 0 0012 21.6c5.523 0 10-3.925 10-8.8C22 6.925 17.523 3 12 3zm-1 12H7v-2h4v2zm2-4H7V9h6v2zm2-4H7V5h8v2z" />
          </svg>
          <svg
            className={`w-6 h-6 text-white transition-all duration-300 ${chatOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90 absolute'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>
  )
}
