export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse-slow" />
      {children}
    </span>
  )
}
