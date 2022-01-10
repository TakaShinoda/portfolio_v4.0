import React, { VFC } from 'react'
import { GitHub } from 'iconoir-react'
import { ChangeThemeButton } from '../ChangeThemeButton'

export const Header: VFC = () => {
  return (
    <header className="bg-cyan-600 space-y-4 p-4 sm:px-8 sm:py-4 lg:p-4 xl:px-8 xl:py-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900 text-xl">Portfolio</h2>
        <nav>
          <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
            <ChangeThemeButton />
          </span>
          <a
            href="https://github.com/TakaShinoda/portfolio_v4.0"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2"
          >
            <GitHub />
          </a>
        </nav>
      </div>
    </header>
  )
}
