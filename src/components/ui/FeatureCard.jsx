import IconMapper from './IconMapper'

// Reusable card used in service-page feature grids.
// compact: uses smaller padding/icon (for 4-column grids)
export default function FeatureCard({ icon, title, desc, compact = false }) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 ${compact ? 'p-5' : 'p-6'} hover:shadow-lg hover:-translate-y-1 transition-all group`}>
      <div className={`${compact ? 'w-11 h-11 mb-3' : 'w-12 h-12 mb-4'} rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center shadow group-hover:scale-110 transition-transform`}>
        <IconMapper name={icon} className="w-6 h-6" />
      </div>
      <h3 className={`font-bold text-slate-900 dark:text-white ${compact ? 'text-sm mb-1.5' : 'text-base mb-2'}`}>{title}</h3>
      {desc && (
        <p className={`text-slate-500 dark:text-slate-400 ${compact ? 'text-xs' : 'text-sm'} leading-relaxed`}>{desc}</p>
      )}
    </div>
  )
}
