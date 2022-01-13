import React, { VFC } from 'react'
import { RssFeed } from 'iconoir-react'

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
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
