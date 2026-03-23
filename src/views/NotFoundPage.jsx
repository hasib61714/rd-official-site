'use client'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { useScrollToTop } from '../hooks/useScrollToTop'
import PageMeta from '../components/ui/PageMeta'

export default function NotFoundPage() {
  useScrollToTop()
  const { lang } = useLanguage()

  return (
    <>
      <PageMeta
        title="Page Not Found | Red Data"
        description="The page you are looking for could not be found."
      />
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto">
          {/* Big 404 */}
          <div className="relative mb-8 select-none">
            <p className="text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter bg-gradient-to-b from-red-500/20 to-transparent bg-clip-text text-transparent">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter text-slate-100 dark:text-white/5 -z-10">
                404
              </span>
            </div>
          </div>

          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
            {lang === 'bn' ? 'পেজটি পাওয়া যায়নি' : 'Page Not Found'}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-10">
            {lang === 'bn'
              ? 'আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে অথবা মুছে ফেলা হয়েছে।'
              : "The page you're looking for doesn't exist or has been moved."}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {lang === 'bn' ? 'হোমপেজে ফিরুন' : 'Back to Home'}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/[0.05] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              {lang === 'bn' ? 'সাপোর্টে যোগাযোগ করুন' : 'Contact Support'}
            </Link>
          </div>

          {/* Branding footer */}
          <p className="mt-12 text-xs text-slate-400 dark:text-slate-600">
            © 2026{' '}
            <span className="font-semibold bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
              Red Data
            </span>{' '}
            (Pvt.) Limited
          </p>
        </div>
      </div>
    </>
  )
}
