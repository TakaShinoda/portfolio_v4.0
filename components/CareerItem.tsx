import React, { FC } from 'react'

type Props = {
  career: string
  from: string
  to?: string
}

export const CareerItem: FC<Props> = ({ career, from, to }) => {
  return (
    <li className="mb-5">
      <div className="flex items-center mb-1">
        <div className="bg-gray-300 rounded-full h-3 w-3"></div>
        <div
          className="flex-1 ml-4 font-medium text-gray-800 dark:text-white"
          data-testid="career"
        >
          {career}
        </div>
      </div>
      <div
        className="ml-7 text-xs font-medium pr-3 my-2 text-gray-500 dark:text-gray-300"
        data-testid="from-to"
      >
        {from} - {to ?? ''}
      </div>
    </li>
  )
}
