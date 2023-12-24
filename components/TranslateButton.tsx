'use client'

import React, { FC } from 'react'
import { Translate } from 'iconoir-react'

export const TranslateButton: FC = () => {
  const changeLocale = () => {
    const isEn = window.location.pathname === '/en'
    location.href = isEn ? 'ja' : 'en'
  }

  return (
    <>
      <button type="button" onClick={changeLocale}>
        <Translate />
      </button>
    </>
  )
}
