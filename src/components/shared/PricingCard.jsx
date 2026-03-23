'use client'
import Button from '../ui/Button'
import { Zap } from 'lucide-react'

// popular: only used on the home page to highlight one plan.
// All-packages page passes no popular prop so every card looks the same.
export default function PricingCard({ name, tag, price, vatBreakdown, period, oneTime, bandwidth, popular, features, cta }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
        popular
          ? 'bg-gradient-to-b from-red-700 to-red-900 border-2 border-red-400/60 shadow-xl shadow-red-500/30 scale-105'
          : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Popular / Tag Badge */}
      {(popular || tag) && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className={`px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg whitespace-nowrap ${
            popular
              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-red-600/40'
              : 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-slate-800/40'
          }`}>
            {tag || 'Most Popular'}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${popular ? 'text-red-200' : 'text-slate-500 dark:text-slate-400'}`}>{name}</p>
        <div className="flex items-end gap-1 mb-0.5">
          <span className={`text-3xl font-black ${popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{price}</span>
          <span className={`text-sm mb-1.5 ${popular ? 'text-red-200' : 'text-slate-400'}`}>{period}</span>
        </div>
        {vatBreakdown && (
          <p className={`text-[10px] font-light mb-1 ${popular ? 'text-red-200/60' : 'text-slate-400/70 dark:text-slate-500/70'}`}>{vatBreakdown}</p>
        )}
        <p className={`text-xs ${popular ? 'text-red-200' : 'text-slate-500'}`}>{oneTime}</p>
        <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold ${popular ? 'bg-white/15 text-white' : 'bg-slate-100 dark:bg-slate-700/50 text-red-600 dark:text-red-300'}`}>
          <Zap className="w-3.5 h-3.5" /> {bandwidth}
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px mb-6 ${popular ? 'bg-white/20' : 'bg-slate-200 dark:bg-white/[0.08]'}`} />

      {/* Features List */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${popular ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
              ✓
            </span>
            <span className={`text-sm ${popular ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={popular ? 'secondary' : 'outline'}
        href="#contact"
        className={`w-full ${popular ? '!bg-white !text-red-700 !border-white hover:!bg-red-50 !font-bold' : ''}`}
      >
        {cta}
      </Button>
    </div>
  )
}
