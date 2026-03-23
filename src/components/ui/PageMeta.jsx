'use client'
import { useEffect } from 'react'

const SITE = 'https://reddata.com.bd'
const DEFAULT_TITLE = 'Red Data — Leading ISP in Bangladesh'
const DEFAULT_DESC = 'Red Data Limited — BTRC licensed ISP offering high-speed fiber internet, data connectivity, IP telephony, and managed IT services across Bangladesh since 2012.'
const DEFAULT_IMAGE = `${SITE}/images/og-cover.jpg`

// Find or create a <meta> element and set its content
function setMeta(name, content, isProp = false) {
  const attr = isProp ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function PageMeta({ title, description, image }) {
  useEffect(() => {
    const t   = title       ? `${title} | Red Data` : DEFAULT_TITLE
    const d   = description || DEFAULT_DESC
    const img = image       || DEFAULT_IMAGE
    const url = `${SITE}${window.location.pathname}`

    document.title = t

    setMeta('description', d)
    setMeta('og:title',       t,   true)
    setMeta('og:description', d,   true)
    setMeta('og:image',       img, true)
    setMeta('og:url',         url, true)
    setMeta('og:type',        'website', true)
    setMeta('twitter:card',        'summary_large_image')
    setMeta('twitter:title',       t)
    setMeta('twitter:description', d)
    setMeta('twitter:image',       img)

    let canon = document.querySelector('link[rel="canonical"]')
    if (!canon) {
      canon = document.createElement('link')
      canon.setAttribute('rel', 'canonical')
      document.head.appendChild(canon)
    }
    canon.setAttribute('href', url)
  }, [title, description, image])

  return null
}
