import React, { ReactNode, FC } from 'react'
import Head from 'next/head'
import { Header } from './Header'

type Props = {
  children?: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>console.log(me)</title>
        <meta charSet="utf-8" />
        <meta name="portfolio site" content="portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="@tttttt_621_sのサイト"></meta>

        <meta property="og:url" content="https://t621.vercel.app/" />
        <meta property="og:title" content="console.log(me)" />
        <meta property="og:site_name" content="console.log(me)" />
        <meta property="og:description" content="@tttttt_621_sのサイト" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://t621.vercel.app/_next/image?url=%2Ficon.webp&w=1080&q=75"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />

        <meta name="twitter:card" content="Summary Card" />
        <meta name="twitter:site" content="@tttttt_621_s" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  )
}
