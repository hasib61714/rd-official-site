// Localization helper — returns obj.key_bn if lang==='bn' and the field exists, else obj.key
export function L(lang, obj, key) {
  const bnKey = key + '_bn'
  if (lang === 'bn' && obj[bnKey] !== undefined) return obj[bnKey]
  return obj[key]
}

export * from './nav'
export * from './hero'
export * from './services'
export * from './pricing'
export * from './sections'
export * from './blog'
export * from './pages'
