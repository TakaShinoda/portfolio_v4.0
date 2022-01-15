import React, { ReactNode, VFC } from 'react'
import Head from 'next/head'
import { Header } from './Header'

type Props = {
  children?: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>console.log(me)</title>
        <meta name="portfolio site" content="portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />

        <meta property="og:url" content="https://portfolio-v4-0-takashinoda.vercel.app/" />
        <meta property="og:title" content="console.log(me)" />
        <meta property="og:site_name" content="console.log(me)" />
        <meta property="og:description" content="篠田貴大のポートフォリオサイト" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://portfolio-v4-0-takashinoda.vercel.app/icon.jp" />
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
