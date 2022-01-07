import React, { useState, useEffect, VFC } from 'react'
import { useTheme } from 'next-themes'

export const ChangeThemeButton: VFC = () => {
  const { theme, setTheme } = useTheme()

  // レンダー後か否か判定
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  return (
    <>
      <button
        aria-label="DarkModeToggle"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 md:relative md:left-0"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <>
            {theme === 'dark' ? (
            //   <Moon height={'25'} width={'25'} />
            '夜'
            ) : (
            //   <Sun height={'25'} width={'25'} />
            '昼'
            )}
          </>
        )}
      </button>
    </>
  )
}
