/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import { Notes } from 'iconoir-react'
import { getFaviconSrcFromLink } from '../utils/helper'

export const Blog: FC = () => {
  return (
    <div className="flex rounded-lg shadow-lg h-full p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 inline-flex items-center rounded-full text-gray-800 dark:text-white flex-shrink-0">
          <Notes />
        </div>
        <h2 className="text-gray-800 dark:text-white text-lg title-font font-medium">
          Blog
        </h2>
      </div>
      <div className="flex-grow">
        <div className="mb-5">
          <a
            href="https://creators.bengo4.com/entry/2023/03/27/083000"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex">
              <img
                src={getFaviconSrcFromLink(
                  'https://creators.bengo4.com/entry/2023/03/27/083000'
                )}
                alt="弁護士ドットコム クリエーターズブログのファビコン画像"
                className="w-4 h-4 mt-1 mr-1"
              />
              <span className='className="font-medium text-gray-800 dark:text-white'>
                CloudSign の社内用管理画面を Vue2.7 に移行した話
              </span>
            </span>
            <div className="text-xs font-medium mt-1 mb-2 text-gray-500 dark:text-gray-300">
              2023-03-27
            </div>
          </a>
        </div>
        <div className="mb-5">
          <a
            href="https://creators.bengo4.com/entry/2022/11/15/083000"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex">
              <img
                src={getFaviconSrcFromLink(
                  'https://creators.bengo4.com/entry/2022/11/15/083000'
                )}
                alt="弁護士ドットコム クリエーターズブログのファビコン画像"
                className="w-4 h-4 mt-1 mr-1"
              />
              <span className='className="font-medium text-gray-800 dark:text-white'>
                Vue Fes Japan Online 2022 に登壇 & 参加しました
              </span>
            </span>
            <div className="text-xs font-medium mt-1 mb-2 text-gray-500 dark:text-gray-300">
              2022-11-15
            </div>
          </a>
        </div>
        <div className="mb-5">
          <a
            href="https://creators.bengo4.com/entry/2022/07/28/083000"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex">
              <img
                src={getFaviconSrcFromLink(
                  'https://creators.bengo4.com/entry/2022/07/28/083000'
                )}
                alt="弁護士ドットコム クリエーターズブログのファビコン画像"
                className="w-4 h-4 mt-1 mr-1"
              />
              <span className='className="font-medium text-gray-800 dark:text-white'>
                クラウドサインのフロントエンドミーティングと、その勉強会で発表した話
              </span>
            </span>
            <div className="text-xs font-medium mt-1 mb-2 text-gray-500 dark:text-gray-300">
              2022-07-28
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
