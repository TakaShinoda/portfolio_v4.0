/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import { Notes } from 'iconoir-react'
import { getFaviconSrcFromLink } from '../utils/helper'
import type { Blog as BlogData } from '../types/types'

const getBlogs = async () => {
  const res = await fetch('https://t621.vercel.app/api/blog', {
    cache: 'no-cache',
  })

  const data = await res.json()
  return data as BlogData[]
}

export const Blog: FC = async () => {
  const blogs = await getBlogs()
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
        {blogs.map((blog, i) => (
          <div className="mb-5" key={i}>
            <a href={blog.url} target="_blank" rel="noreferrer noopener">
              <span className="flex">
                <img
                  src={getFaviconSrcFromLink(
                    'https://creators.bengo4.com/entry/2023/03/27/083000'
                  )}
                  alt="弁護士ドットコム クリエーターズブログのファビコン画像"
                  className="w-4 h-4 mt-1 mr-1"
                />
                <span className='className="font-medium text-gray-800 dark:text-white'>
                  {blog.title}
                </span>
              </span>
              <div className="text-xs font-medium mt-1 mb-2 text-gray-500 dark:text-gray-300">
                {blog.date}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
