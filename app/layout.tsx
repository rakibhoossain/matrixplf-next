import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Matrixplatform | From Fabric to Finished Product',
  description: 'Vertically integrated textile manufacturing partner across China, Bangladesh, and Sri Lanka. 3M+ garments per month, 37 partner factories, 15+ international certifications.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.jpg',
        type: 'image/jpg',
      },
    ],
    apple: '/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
