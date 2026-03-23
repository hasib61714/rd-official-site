'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import { useState, useEffect, useCallback } from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { heroData, heroSlides, L } from '../../data/siteData'
import { NAVBAR_HEIGHT_PX, HERO_SLIDE_INTERVAL_MS, HERO_SLIDE_TRANSITION_MS } from '../../constants'

export default function Hero() {
  const { cta1, cta2 } = heroData
  const { lang } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return
      setAnimating(true)
      setCurrent(index)
      setTimeout(() => setAnimating(false), HERO_SLIDE_TRANSITION_MS)
    },
    [animating, current]
  )

  const next = useCallback(() => {
    goTo((current + 1) % heroSlides.length)
  }, [current, goTo])

  const goBack = useCallback(() => {
    goTo((current - 1 + heroSlides.length) % heroSlides.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, HERO_SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [next, paused])

  const slide = heroSlides[current]

  return (
    <section
      className="relative overflow-hidden bg-slate-950"
      style={{ marginTop: NAVBAR_HEIGHT_PX, height: `calc(100dvh - ${NAVBAR_HEIGHT_PX}px)` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-linear ${
              i === current ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/40 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 z-20 pointer-events-none" />

      {/* Slide Content */}
      <div className="absolute inset-0 z-30 flex ">
      <Container className="w-full">
        <div className="max-w-[850px] py-10">

          {/* Badge */}
          <div
            key={`badge-${current}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/15 text-red-400 border border-red-500/25 mb-7 animate-fade-up"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            {L(lang, slide, 'badge')}
          </div>

          {/* Headline */}
          <h1
            key={`h1-${current}`}
            className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white leading-[1.07] tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {L(lang, slide, 'headline')}{' '}
            <span className="bg-gradient-to-r from-red-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">
              {L(lang, slide, 'headlineAccent')}
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            key={`sub-${current}`}
            className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            {L(lang, slide, 'subheadline')}
          </p>

          {/* CTA Buttons */}
          <div
            key={`cta-${current}`}
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <Button variant="primary" size="xl" href={cta1.href} fullWidthOnMobile>
              {getText(lang, 'hero.explore')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
            <Button variant="secondary" size="xl" href={cta2.href} fullWidthOnMobile>
              {getText(lang, 'hero.connect')}
            </Button>
          </div>
        </div>
      </Container>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={goBack}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white hover:bg-red-500/20 hover:border-red-500/40 backdrop-blur-sm transition-all duration-200 flex items-center justify-center"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white hover:bg-red-500/20 hover:border-red-500/40 backdrop-blur-sm transition-all duration-200 flex items-center justify-center"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 h-2 bg-gradient-to-r from-red-500 to-amber-400 shadow-lg shadow-orange-500/40'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-slate-500 text-[10px] tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  )
}
