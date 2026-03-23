'use client'
import { useState } from 'react'

export default function ExpandableText({ children, className = '', wrapperClassName = '', lines = 3 }) {
  const [expanded, setExpanded] = useState(false)

  const clampClass = {
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
  }[lines] ?? 'line-clamp-3'

  return (
    <div className={wrapperClassName}>
      <p className={`${className} ${expanded ? '' : clampClass}`}>
        {children}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
      >
        {expanded ? 'Show less ↑' : 'Read more ↓'}
      </button>
    </div>
  )
}
