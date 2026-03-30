'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Link from 'next/link'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { blogPostsData } from '../../data/siteData'
import BlogPostCard from '../shared/BlogPostCard'

export default function Blog() {
  const { lang } = useLanguage()
  return (
    <Section id="blog" className="bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-14">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400" />
              {getText(lang, 'badge.blog')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              {getText(lang, 'blog.heading')}{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {getText(lang, 'blog.accent')}
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
          >
            {getText(lang, 'blog.viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsData.map((post, postIndex) => (
            <Reveal key={post.id} delay={postIndex * 100}>
              <BlogPostCard {...post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
