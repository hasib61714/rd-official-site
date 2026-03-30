'use client'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

// SVG map viewBox: 0 0 1024 1024 — potrace transform="translate(0,1024) scale(0.1,-0.1)"
// Actual SVG shape bounds parsed from path: x 143–881, y 0–1024
// West(88.01)→x=143, East(92.68)→x=881, North(26.63)→y=0, South(20.74)→y=1024
const toSvgX = (lng) => 143 + (lng - 88.01) * 158.1
const toSvgY = (lat) => (26.63 - lat) * 173.9

// Service cities: size 'lg'=capital, 'md'=divisional HQ (labeled), 'sm'=other (dot only)
const SERVICE_CITIES = [
  { city: 'Dhaka',        lng: 90.41, lat: 23.81, size: 'lg' },
  { city: 'Chattogram',   lng: 91.83, lat: 22.33, size: 'md' },
  { city: 'Sylhet',       lng: 91.87, lat: 24.90, size: 'md' },
  { city: 'Rajshahi',     lng: 88.60, lat: 24.37, size: 'md' },
  { city: 'Khulna',       lng: 89.55, lat: 22.80, size: 'md' },
  { city: 'Barishal',     lng: 90.35, lat: 22.70, size: 'md' },
  { city: 'Mymensingh',   lng: 90.40, lat: 24.75, size: 'md' },
  { city: 'Rangpur',      lng: 89.27, lat: 25.74, size: 'md' },
  { city: 'Comilla',      lng: 91.18, lat: 23.46, size: 'sm' },
  { city: 'Narayanganj',  lng: 90.50, lat: 23.62, size: 'sm' },
  { city: 'Gazipur',      lng: 90.43, lat: 23.99, size: 'sm' },
  { city: 'Narsingdi',    lng: 90.72, lat: 23.92, size: 'sm' },
  { city: "Cox's Bazar",  lng: 92.00, lat: 21.45, size: 'sm' },
  { city: 'Noakhali',     lng: 91.10, lat: 22.86, size: 'sm' },
  { city: 'Brahmanbaria', lng: 91.11, lat: 23.96, size: 'sm' },
  { city: 'Feni',         lng: 91.39, lat: 23.00, size: 'sm' },
  { city: 'Chandpur',     lng: 90.64, lat: 23.23, size: 'sm' },
  { city: 'Habiganj',     lng: 91.41, lat: 24.37, size: 'sm' },
  { city: 'Bogura',       lng: 89.37, lat: 24.85, size: 'sm' },
  { city: 'Dinajpur',     lng: 88.63, lat: 25.62, size: 'sm' },
  { city: 'Jashore',      lng: 89.21, lat: 23.17, size: 'sm' },
  { city: 'Kushtia',      lng: 89.12, lat: 23.90, size: 'sm' },
  { city: 'Faridpur',     lng: 89.83, lat: 23.60, size: 'sm' },
  { city: 'Tangail',      lng: 89.92, lat: 24.25, size: 'sm' },
]

const districts = [
  'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna',
  'Barishal', 'Mymensingh', 'Rangpur', 'Comilla', 'Narayanganj',
  'Gazipur', 'Narsingdi', 'Cumilla', 'Cox\'s Bazar', 'Noakhali',
  'Brahmanbaria', 'Feni', 'Chandpur', 'Lakshmipur', 'Habiganj',
]

export default function Coverage() {
  const { lang } = useLanguage()
  const statLabels = getText(lang, 'stats')

  const coverageStats = [
    { value: '64',    label: statLabels[0] },
    { value: '495',   label: statLabels[1] },
    { value: '4,500+', label: statLabels[2] },
    { value: '99%', label: statLabels[3] },
  ]

  return (
    <Section id="coverage" className="bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-red-600/6 to-transparent pointer-events-none" />

      <Container className="relative">
        <SectionHeader
          badge={getText(lang, 'badge.coverage')}
          heading={getText(lang, 'coverage.heading')}
          headingAccent={getText(lang, 'coverage.accent')}
          subheading={getText(lang, 'coverage.sub')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Bangladesh Map Image + Dot Overlay */}
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-red-500/40 bg-slate-900 shadow-2xl shadow-black/20 dark:shadow-black/40 flex items-center justify-center mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
              {/* Map Image — natural 2:3 aspect (408×612) */}
              <img
                src="/bd-map.svg"
                alt="Bangladesh Coverage Map"
                className="w-full h-auto block"
                style={{ filter: 'drop-shadow(0 0 12px rgba(239,68,68,0.15))' }}
              />

              {/* SVG Dot Overlay — viewBox matches bd-map.svg 1024×1024 */}
              <svg
                viewBox="0 0 1024 1024"
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
              >
                {SERVICE_CITIES.map(({ city, lng, lat, size }, cityIndex) => {
                  const svgX = toSvgX(lng)
                  const svgY = toSvgY(lat)
                  const dotRadius = size === 'lg' ? 10 : size === 'md' ? 6 : 4
                  const animationDuration = `${2 + (cityIndex % 4) * 0.4}s`
                  return (
                    <g key={city}>
                      {/* Pulse ring */}
                      <circle cx={svgX} cy={svgY} r={dotRadius} fill="rgba(239,68,68,0.2)">
                        <animate attributeName="r" values={`${dotRadius};${dotRadius * 3};${dotRadius}`} dur={animationDuration} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0;0.6" dur={animationDuration} repeatCount="indefinite" />
                      </circle>
                      {/* Dot */}
                      <circle cx={svgX} cy={svgY} r={dotRadius / 1.2} fill="#ef4444" opacity="0.95" />
                      {/* Label for divisional HQs */}
                      {size !== 'sm' && (
                        <text
                          x={svgX + dotRadius + 3} y={svgY + 4}
                          fill="rgba(255,255,255,0.9)"
                          fontSize={size === 'lg' ? 16 : 16}
                          fontWeight="700"
                          fontFamily="sans-serif"
                          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                        >
                          {city}
                        </text>
                      )}
                    </g>
                  )
                })}
              </svg>

              {/* Coverage badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-red-500/30 backdrop-blur-sm z-10 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-semibold">{getText(lang, 'coverage.badge')}</span>
              </div>
            </div>
          </Reveal>

          {/* Right — Stats + District Tags */}
          <Reveal direction="right" delay={150}>
            <div>
              {/* Coverage stat cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {coverageStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] p-5 text-center hover:border-red-500/20 transition-colors duration-300">
                    <p className="text-3xl font-black bg-gradient-to-r from-red-400 to-amber-300 bg-clip-text text-transparent mb-1">{stat.value}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* District tags */}
              <div className="mb-8">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-4">{getText(lang, 'coverage.majorAreas')}</p>
                <div className="flex flex-wrap gap-2">
                  {districts.map((district) => (
                    <span
                      key={district}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.07] text-slate-600 dark:text-slate-300 text-xs font-medium hover:border-red-500/30 hover:text-red-600 dark:hover:text-white transition-all duration-200 cursor-default"
                    >
                      {district}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                    +44 more →
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white font-semibold text-sm hover:from-red-500 hover:via-red-400 hover:to-orange-400 shadow-lg shadow-orange-500/20 transition-all duration-300 active:scale-95"
              >
                {getText(lang, 'coverage.checkAvailability')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
