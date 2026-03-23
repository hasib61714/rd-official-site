'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('rdTheme')
    if (saved) return saved === 'dark'
    return false // light is default
  })

  useEffect(() => {
    const root = document.documentElement
    // Add transition only during theme toggle (remove after animation)
    root.classList.add('theme-transitioning')
    const timer = setTimeout(() => root.classList.remove('theme-transitioning'), 350)
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('rdTheme', dark ? 'dark' : 'light')
    return () => clearTimeout(timer)
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(v => !v) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
