/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import contentsData from '../.contents/posts.json'
import { getFaviconSrcFromLink } from '../utils/helper'

dayjs.extend(relativeTime)

export const ContentsList: FC = () => {
  return (
    <>
      {contentsData.map((content, i) => (
        // 最新の5つ表示する
        <div className="mb-5" key={i}>
          {i < 5 && (
            <a href={content.link} target="_blank" rel="noreferrer noopener">
              <span className="flex">
                <img
                  src={getFaviconSrcFromLink(content.link)}
                  alt="遷移先サイトの画像"
                  className="w-4 h-4 mt-1 mr-1"
                />
                <span className='className="font-medium text-gray-800 dark:text-white'>
                  {content.title}
                </span>
              </span>
              <div className="text-xs font-medium mt-1 mb-2 text-gray-500 dark:text-gray-300">
                {dayjs(content.isoDate).fromNow()}
              </div>
            </a>
          )}
        </div>
      ))}
    </>
  )
}
