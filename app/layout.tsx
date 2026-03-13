import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'joyFULL Growth | A New Model for Growth',
  description: 'Transforming dentistry through joy, leadership, and innovation. A new model for growth built on legacy, love, and 100-year thinking.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.jpg',
        sizes: '32x32',
        type: 'image/jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.jpg',
        sizes: '32x32',
        type: 'image/jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.jpg',
  },
  openGraph: {
    title: 'joyFULL Growth | A New Model for Growth',
    description: 'Transforming dentistry through joy, leadership, and innovation.',
    siteName: 'joyFULL Growth',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'joyFULL Growth - A New Model for Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'joyFULL Growth | A New Model for Growth',
    description: 'Transforming dentistry through joy, leadership, and innovation.',
    images: ['/og-image.jpg'],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HR54WS3V7E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HR54WS3V7E');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
