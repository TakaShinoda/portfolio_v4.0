import React, { FC } from 'react'
import { Translate } from 'iconoir-react'
// import { useLocale } from '../hooks/useLocale'

export const TranslateButton: FC = () => {
  // const { locale } = useLocale()
  // const isEn = locale === 'en' ? true : false
  const isEn = false

  const changeLocale = () => {
    location.href = isEn ? '/' : 'en'
  }

  return (
    <>
      <button aria-label="DarkModeToggle" type="button" onClick={changeLocale}>
        <Translate />
      </button>
    </>
  )
}
