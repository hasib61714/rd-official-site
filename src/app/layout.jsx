import { Suspense } from 'react'
import Providers from './providers'
import './globals.css'

export const metadata = {
  title: 'Red Data — Leading ISP in Bangladesh',
  description: 'Red Data Limited — BTRC licensed ISP offering high-speed fiber internet, data connectivity, IP telephony, and managed IT services across Bangladesh since 2012.',
  metadataBase: new URL('https://reddata.com.bd'),
  openGraph: {
    type: 'website',
    siteName: 'Red Data',
    images: ['/images/og-cover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}
