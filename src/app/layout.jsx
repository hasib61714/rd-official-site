import { Suspense } from 'react'
import Providers from './providers'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: {
    default: 'Red Data — Faster and Trusted Internet Service Provider',
    template: '%s | Red Data',
  },
  description: 'Red Data (Pvt.) Limited — BTRC licensed ISP offering high-speed fiber internet, data connectivity, IP telephony, and managed IT services across Bangladesh since 2012.',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGG5VV50C1"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DGG5VV50C1');
          `}
        </Script>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}
