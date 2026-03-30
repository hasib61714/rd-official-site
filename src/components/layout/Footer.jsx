'use client'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import Container from '../ui/Container'
import { footerData, localize } from '../../data/siteData'

export default function Footer() {
  const { lang } = useLanguage()
  const { brand, description, contact, columns, copyright } = footerData

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 dark:border-white/[0.06]">
      {/* Main Grid */}
      <Container className="pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-5">
              <img src="/RD Logo W.png" alt="Red Data" className="h-10 w-auto object-contain" loading="lazy" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">{localize(lang, footerData, 'description')}</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">📍</span>
                <div className="text-slate-400 text-sm leading-relaxed">
                  <p>{contact.address}</p>
                  <p className="text-slate-500 text-xs mt-1">{lang === 'bn' ? 'নিবন্ধিত অফিস:' : 'Reg. Office:'} {contact.addressReg}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500">📞</span>
                <div>
                  <a href={`tel:${contact.phone}`} className="text-slate-400 text-sm hover:text-red-400 transition-colors block">{contact.phone}</a>
                  <a href={`tel:${contact.helpdesk}`} className="text-slate-500 text-xs hover:text-red-400 transition-colors">{lang === 'bn' ? 'হেল্পডেস্ক:' : 'HelpDesk:'} {contact.helpdesk}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500">✉️</span>
                <a href={`mailto:${contact.email}`} className="text-slate-400 text-sm hover:text-red-400 transition-colors">{contact.email}</a>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61556093758540" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/red-data" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              
              <a href="https://wa.me/+8801971521964" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">{localize(lang, col, 'heading')}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.endsWith('.pdf') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-red-400 transition-colors duration-200">{link.label}</a>
                    ) : link.href.startsWith('/') ? (
                      <Link href={link.href} className="text-slate-400 text-sm hover:text-red-400 transition-colors duration-200">{link.label}</Link>
                    ) : (
                      <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-slate-400 text-sm hover:text-red-400 transition-colors duration-200">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              {lang === 'bn' ? '© ২০২৬ ' : '© 2026 '}
              <span className="font-semibold bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
                Red Data
              </span>{' '}
              {lang === 'bn' ? '(প্রা.) লিমিটেড। সকল স্বত্ব সংরক্ষিত।' : '(Pvt.) Limited. All rights reserved.'}
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">{lang === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}</Link>
              <Link href="/terms" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">{lang === 'bn' ? 'সেবার শর্তাবলী' : 'Terms of Service'}</Link>
              <a href="/tariff.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">{lang === 'bn' ? 'BTRC ট্যারিফ' : 'BTRC Tariff'}</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
