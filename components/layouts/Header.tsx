import React, { VFC } from 'react'
import { ChangeThemeButton } from '../ChangeThemeButton'

export const Header: VFC = () => {
  return (
    <header className="space-y-4 p-4 sm:px-8 sm:py-4 lg:p-4 xl:px-8 xl:py-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800 dark:text-white text-xl">
          さいと
        </h2>
        <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
          <ChangeThemeButton />
        </span>
      </div>
    </header>
  )
}
