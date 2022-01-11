import React, { VFC } from 'react'
import { GitHub, Twitter, PinAlt, Building } from 'iconoir-react'

export const Personal: VFC = () => {
  return (
    <div className="max-w-6xl py-4 px-8 shadow-lg rounded-lg my-20 m-auto">
      <div className="flex justify-center md:justify-start -mt-16 mb-4">
        <img
          className="w-28 h-28 object-cover rounded-full border-2 border-cyan-500"
          src="./icon.jpg"
        />
      </div>
      <div>
        <h2 className="text-gray-800 dark:text-white text-3xl font-semibold">
          篠田 貴大
        </h2>
        <div className="mt-2">
          <p className="group block items-center text-xs font-medium pr-3 my-2 text-gray-500 dark:text-gray-300">
            <span className="group inline-flex items-center">
              <PinAlt />
              東京都
            </span>
          </p>
          <p className="group block items-center text-xs font-medium pr-3 my-2 text-gray-500 dark:text-gray-300">
            <span className="group inline-flex items-center">
              <Building />
              弁護士ドットコム株式会社
            </span>
          </p>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          クラウドサインのフロントエンドエンジニアをしています。
          <br />
        </p>
      </div>
      <div className="mt-2 mb-2">
        <a
          href="https://github.com/TakaShinoda"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center text-lg font-medium pr-3 py-2 text-gray-800 dark:text-white"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/tttttt_621_s"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center text-lg font-medium pl-2 pr-3 py-2 text-gray-800 dark:text-white"
        >
          <Twitter />
        </a>
      </div>
      {/* <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          John Doe
        </a>
      </div> */}
    </div>
  )
}
