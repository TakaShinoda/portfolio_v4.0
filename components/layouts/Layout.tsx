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
        <title>portfolio</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  )
}
