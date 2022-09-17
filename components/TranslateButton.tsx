import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Translate } from 'iconoir-react'

export const TranslateButton: FC = () => {
  const { locale } = useRouter()
  const isEn = locale === 'en' ? true : false

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
