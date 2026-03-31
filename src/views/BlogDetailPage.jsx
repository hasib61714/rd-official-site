'use client'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'
import { blogPostsData } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'

export default function BlogDetailPage() {
  useScrollToTop()
  const { lang } = useLanguage()
  const params = useParams()
  const router = useRouter()
  const id = params?.id
  const post = blogPostsData.find((blogPost) => String(blogPost.id) === id)

  useEffect(() => {
    if (id && !post) router.replace('/blog')
  }, [id, post, router])

  if (!post) return null

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title={post.title} description={post.excerpt} />

      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <Container>
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-3">
              <Link href="/" className="hover:text-white transition-colors">{lang === 'bn' ? 'হোম' : 'Home'}</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">{lang === 'bn' ? 'ব্লগ' : 'Blog'}</Link>
              <span>/</span>
              <span className="text-white font-medium truncate max-w-xs">{post.category}</span>
            </nav>
            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${post.tagColor}`}>{post.tag}</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl">{post.title}</h1>
          </Container>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <Container>
          <div className="flex flex-wrap items-center gap-4 py-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-xs font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-slate-700 dark:text-slate-300">{post.author}</span>
            </div>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span className="text-red-600 dark:text-red-400 font-medium">{post.category}</span>
          </div>
        </Container>
      </div>

      {/* Body */}
      <div className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.body.map((block, blockIndex) => {
                if (block.type === 'h2') {
                  return (
                    <h2 key={blockIndex} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                      {block.text}
                    </h2>
                  )
                }
                if (block.type === 'p') {
                  return (
                    <p key={blockIndex} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-base sm:text-lg">
                      {block.text}
                    </p>
                  )
                }
                if (block.type === 'ul') {
                  return (
                    <ul key={blockIndex} className="mb-5 space-y-2">
                      {block.items.map((item, listItemIndex) => (
                        <li key={listItemIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-base">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return null
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div>
                <p className="text-white font-bold text-lg mb-1">{lang === 'bn' ? 'সংযুক্ত হতে প্রস্তুত?' : 'Ready to get connected?'}</p>
                <p className="text-slate-400 text-sm">{lang === 'bn' ? 'বিনামূল্যে পরামর্শের জন্য আজই রেড ডাটার সাথে যোগাযোগ করুন।' : 'Contact Red Data today for a free consultation.'}</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all hover:scale-105">
                  {lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
                </Link>
                <Link href="/#pricing" className="px-5 py-2.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                  {lang === 'bn' ? 'প্ল্যান দেখুন' : 'View Plans'}
                </Link>
              </div>
            </div>

            {/* Back */}
            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 text-sm font-medium transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                {lang === 'bn' ? 'ব্লগে ফিরুন' : 'Back to Blog'}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
