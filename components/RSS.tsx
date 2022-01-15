import React, { VFC } from 'react'
import { RssFeed } from 'iconoir-react'
import { ContentsList } from './ContentsList'

export const RSS: VFC = () => {
  return (
    <div className="flex rounded-lg shadow-lg h-full p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 inline-flex items-center rounded-full text-gray-800 dark:text-white flex-shrink-0">
          <RssFeed />
        </div>
        <h2 className="text-gray-800 dark:text-white text-lg title-font font-medium">
          RSS
        </h2>
      </div>
      <div className="flex-grow">
        <ContentsList />
      </div>
    </div>
  )
}
