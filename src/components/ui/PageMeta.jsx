'use client'
import { useEffect } from 'react'

const SITE = 'https://reddata.com.bd'
const DEFAULT_TITLE = 'Red Data — Leading ISP in Bangladesh'
const DEFAULT_DESC = 'Red Data Limited — BTRC licensed ISP offering high-speed fiber internet, data connectivity, IP telephony, and managed IT services across Bangladesh since 2012.'
const DEFAULT_IMAGE = `${SITE}/images/og-cover.jpg`

// Find or create a <meta> element and set its content
function setMeta(name, content, isProp = false) {
  const attr = isProp ? 'property' : 'name'
  let metaElement = document.querySelector(`meta[${attr}="${name}"]`)
  if (!metaElement) {
    metaElement = document.createElement('meta')
    metaElement.setAttribute(attr, name)
    document.head.appendChild(metaElement)
  }
  metaElement.setAttribute('content', content)
}

export default function PageMeta({ title, description, image }) {
  useEffect(() => {
    const pageTitle   = title       ? `${title} | Red Data` : DEFAULT_TITLE
    const pageDescription   = description || DEFAULT_DESC
    const ogImage = image       || DEFAULT_IMAGE
    const pageUrl = `${SITE}${window.location.pathname}`

    document.title = pageTitle

    setMeta('description', pageDescription)
    setMeta('og:title',       pageTitle,   true)
    setMeta('og:description', pageDescription,   true)
    setMeta('og:image',       ogImage, true)
    setMeta('og:url',         pageUrl, true)
    setMeta('og:type',        'website', true)
    setMeta('twitter:card',        'summary_large_image')
    setMeta('twitter:title',       pageTitle)
    setMeta('twitter:description', pageDescription)
    setMeta('twitter:image',       ogImage)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', pageUrl)
  }, [title, description, image])

  return null
}
