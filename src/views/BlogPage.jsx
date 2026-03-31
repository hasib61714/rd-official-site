'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Link from 'next/link'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { blogPostsData } from '../data/siteData'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import { useLanguage } from '../context/LanguageContext'

const TEXTS = {
  en: {
    bc: 'Blog', heroBadge: 'News & Insights',
    h1: 'Red Data', h1a: 'Blog',
    sub: 'Company news, technology insights, and helpful guides from the Red Data team.',
    featuredLabel: 'Featured Post', readMore: 'Read more →',
    moreArticles: 'More Articles', read: 'Read →',
    newsletterH: 'Stay Updated',
    newsletterS: 'Get the latest news and articles from Red Data directly in your inbox.',
    subscribeBtn: '✉️ Subscribe via Email',
  },
  bn: {
    bc: 'ব্লগ', heroBadge: 'সংবাদ ও অন্তর্দৃষ্টি',
    h1: 'রেড ডাটা', h1a: 'ব্লগ',
    sub: 'রেড ডাটা দলের কোম্পানি সংবাদ, প্রযুক্তি অন্তর্দৃষ্টি এবং সহায়ক গাইড।',
    featuredLabel: 'বৈশিষ্ট্য পোস্ট', readMore: 'আরও পড়ুন →',
    moreArticles: 'আরও নিবন্ধ', read: 'পড়ুন →',
    newsletterH: 'আপডেট থাকুন',
    newsletterS: 'রেড ডাটার সর্বশেষ সংবাদ ও নিবন্ধ সরাসরি আপনার ইনবক্সে পান।',
    subscribeBtn: '✉️ ইমেইলে সাবস্ক্রাইব করুন',
  },
}

const posts = blogPostsData

export default function BlogPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const t = TEXTS[lang]

  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Blog" description="Company news, technology insights, and helpful guides from the Red Data team in Bangladesh." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: t.bc }]} />
          <div className="max-w-2xl">
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

      {/* Featured Post */}
      <div className="py-14 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">{t.featuredLabel}</span>
          </div>
          <Link href={`/blog/${featured.id}`} className="group block">
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-56 sm:h-72 lg:h-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.classList.add('bg-gradient-to-br', 'from-red-600', 'to-rose-700') }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${featured.tagColor}`}>{featured.tag}</span>
                    <span className="text-xs text-slate-400">{featured.date}</span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-400">{featured.readTime}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-xs font-bold">
                      {featured.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{featured.author}</p>
                      <p className="text-xs text-slate-400">{featured.category}</p>
                    </div>
                    <span className="ml-auto text-red-600 dark:text-red-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.readMore}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </div>

      {/* Other Posts */}
      <div className="py-8 pb-16 bg-white dark:bg-slate-900">
        <Container>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.moreArticles}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.classList.add('bg-gradient-to-br', 'from-slate-600', 'to-slate-700') }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${post.tagColor}`}>{post.tag}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-[10px] font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{post.author}</span>
                    </div>
                    <span className="text-red-600 dark:text-red-400 text-xs font-semibold">{t.read}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </Container>
      </div>

      {/* Newsletter‑style CTA */}
      <div className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.newsletterH}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{t.newsletterS}</p>
            <a href="mailto:info@reddata.com.bd?subject=Newsletter Subscription" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
              {t.subscribeBtn}
            </a>
          </div>
        </Container>
      </div>

      <ExploreServices />

    </div>
  )
}
