import { FC } from 'react'
import { Presentation } from 'iconoir-react'
import { getFaviconSrcFromLink } from '../utils/helper'

export const Speaker: FC = () => {
  return (
    <div className="flex rounded-lg shadow-lg h-full p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 inline-flex items-center rounded-full text-gray-800 dark:text-white flex-shrink-0">
          <Presentation />
        </div>
        <h2 className="text-gray-800 dark:text-white text-lg title-font font-medium">
          Speaker
        </h2>
      </div>
      <div className="flex-grow">
        <div className="mb-5">
          <a
            href="https://speakerdeck.com/bengo4com/20231028"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="flex">
              <img
                src={getFaviconSrcFromLink(
                  'https://speakerdeck.com/bengo4com/20231028'
                )}
                alt="弁護士ドットコム クリエーターズブログのファビコン画像"
                className="w-4 h-4 mt-1 mr-1"
              />
              <span className="font-medium text-gray-800 dark:text-white">
                走りながらエンジンを交換する
                <br />
                <span className="text-sm">
                  -大規模プロダクトを成長させつつVue3にするには-
                </span>
              </span>
            </span>
            <div className="text-xs font-medium mt-1 mb-2 text-gray-500 dark:text-gray-300">
              <div className="flex justify-between">
                <div>Vue Fes Japan 2023</div>
                <div>2023-10-28</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
