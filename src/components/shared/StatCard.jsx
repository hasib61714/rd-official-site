'use client'
export default function StatCard({ value, label, description }) {
  return (
    <div className="relative group text-center p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/[0.08] hover:border-red-500/20 dark:hover:bg-slate-800/60 transition-all duration-300 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <p className="relative text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-br from-red-500 via-orange-400 to-amber-300 bg-clip-text mb-2">
        {value}
      </p>
      <p className="relative text-slate-900 dark:text-white font-semibold text-base mb-1">{label}</p>
      <p className="relative text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
