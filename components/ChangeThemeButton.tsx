import React, { useState, useEffect, FC } from 'react'
import { useTheme } from 'next-themes'
import { SunLight, HalfMoon } from 'iconoir-react'

export const ChangeThemeButton: FC = () => {
  const { theme, setTheme } = useTheme()
  // レンダー後か否か判定
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  return (
    <>
      <button
        aria-label="DarkModeToggle"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && <>{theme === 'dark' ? <HalfMoon /> : <SunLight />}</>}
      </button>
    </>
  )
}
