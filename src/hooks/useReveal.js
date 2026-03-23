'use client'
import { useEffect, useRef, useState } from 'react'
import { REVEAL_THRESHOLD } from '../constants'

/**
 * useReveal — returns a ref and `visible` boolean.
 * The element fades in when it enters the viewport.
 */
export function useReveal(threshold = REVEAL_THRESHOLD) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
