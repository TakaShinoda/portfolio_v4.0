import React, { ReactNode, FC } from 'react'
import Head from 'next/head'
import { Header } from './Header'

type Props = {
  children?: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
