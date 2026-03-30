// localize(lang, obj, key)
// lang = current language ('en' or 'bn')
// obj  = data object (e.g. a slide or plan)
// key  = field name (e.g. 'title', 'badge')
// Returns Bengali value (key_bn) if language is 'bn' and it exists, otherwise returns English value
export function localize(lang, obj, key) {
  const bengaliKey = key + '_bn'
  if (lang === 'bn' && obj[bengaliKey] !== undefined) return obj[bengaliKey]
  return obj[key]
}

// Keep L as alias so existing code doesn't break
export const L = localize

export * from './nav'
export * from './hero'
export * from './services'
export * from './pricing'
export * from './sections'
export * from './blog'
export * from './pages'
