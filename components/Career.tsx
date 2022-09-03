import React, { FC } from 'react'
import { User } from 'iconoir-react'
import { CareerItemList } from './CareerItemList'

export const Career: FC = () => {
  return (
    <div className="flex rounded-lg shadow-lg h-full p-8 flex-col w-full">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 inline-flex items-center rounded-full text-gray-800 dark:text-white flex-shrink-0">
          <User />
        </div>
        <h2 className="text-gray-800 dark:text-white text-lg title-font font-medium">
          Career
        </h2>
      </div>
      <div className="flex-grow">
        <div className="relative">
          <div
            className="border-r-2 border-gray-300 absolute h-full top-0"
            style={{ left: '5px' }}
          ></div>
          <CareerItemList />
        </div>
      </div>
    </div>
  )
}
