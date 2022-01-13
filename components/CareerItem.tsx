import React, { VFC } from 'react'

type Props = {
  career: string
  from: string
  to?: string
}

export const CareerItem: VFC<Props> = ({ career, from, to }) => {
  return (
    <li className="mb-4">
      <div className="flex items-center mb-1">
        <div className="bg-gray-300 rounded-full h-3 w-3"></div>
        <div className="flex-1 ml-4 font-medium text-gray-800 dark:text-white">
          {career}
        </div>
      </div>
      <div className="ml-7 text-xs font-medium pr-3 my-2 text-gray-500 dark:text-gray-300">
        {from} - {to ?? ''}
      </div>
    </li>
  )
}
