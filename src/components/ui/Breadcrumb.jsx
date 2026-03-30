'use client'
import Link from 'next/link'
import { useLang } from '../../context/LanguageContext'

// items: [{ label: 'Services' }, { label: 'Data Connectivity' }]
// 'Home' is always prepended automatically
export default function Breadcrumb({ items }) {
  const { lang } = useLang()
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
      <Link href="/" className="hover:text-white transition-colors">{lang === 'bn' ? 'হোম' : 'Home'}</Link>
      {items.map((item, crumbIndex) => (
        <span key={crumbIndex} className="flex items-center gap-2">
          <span>/</span>
          {item.to ? (
            <Link href={item.to} className="hover:text-white transition-colors">{item.label}</Link>
          ) : (
            <span className={item.current !== false && crumbIndex === items.length - 1 ? 'text-white font-medium' : 'text-slate-400'}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
