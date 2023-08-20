import '../styles/globals.css'
import { Layout } from '../components/layouts/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'console.log(me)',
  description: '@tttttt_621_sのサイト',
  openGraph: {
    type: 'website',
    title: 'console.log(me)',
    description: '@tttttt_621_sのサイト',
    siteName: 'console.log(me)',
    url: 'https://t621.vercel.app/',
    images: {
      url: 'https://t621.vercel.app/icon.webp',
      width: 400,
      height: 400,
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
      <body className="dark:bg-gray-800">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
