import './globals.css'
import type { Metadata } from 'next'
import { Header } from './Header'

export const metadata: Metadata = {
  title: 'console.log(me)',
  description: '@tttttt_621_sのサイト',
  openGraph: {
    url: 'https://t621.vercel.app/',
    title: 'console.log(me)',
    siteName: 'console.log(me)',
    description: '@tttttt_621_sのサイト',
    type: 'website',
    images: {
      url: 'https://t621.vercel.app/_next/image?url=%2Ficon.webp&w=1080&q=75',
      width: '400',
      height: '400',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
