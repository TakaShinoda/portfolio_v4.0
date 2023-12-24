import React, { FC } from 'react'
import { Building, GitHub, PinAlt, Twitter } from 'iconoir-react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/Avatar'
import { getI18n } from '../locales/server'

export const Personal: FC = async () => {
  const t = await getI18n()
  return (
    <div className="p-8 shadow-lg rounded-lg my-8">
      <div className="flex justify-center md:justify-start -mt-16 mb-4">
        <Avatar className="w-28 h-28 border-2 border-cyan-500">
          <AvatarImage src="/icon.webp" alt="篠田貴大のプロフィール画像" />
          <AvatarFallback>篠田貴大のプロフィール画像</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h2 className="text-gray-800 dark:text-white text-3xl font-semibold">
          {t('name')}
        </h2>
        <div className="mt-2">
          <p className="group block items-center text-xs font-medium pr-3 my-2 text-gray-500 dark:text-gray-300">
            <span className="group inline-flex items-center">
              <PinAlt />
              {t('address')}
            </span>
          </p>
          <p className="group block items-center text-xs font-medium pr-3 my-2 text-gray-500 dark:text-gray-300">
            <span className="group inline-flex items-center">
              <Building />
              {t('company')}
            </span>
          </p>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{t('bio')}</p>
      </div>
      <div className="mt-2 mb-2">
        <a
          href="https://github.com/TakaShinoda"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center text-lg font-medium pr-3 py-2 text-gray-800 dark:text-white"
          aria-label="link to github"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/tttttt_621_s"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center text-lg font-medium pl-2 pr-3 py-2 text-gray-800 dark:text-white"
          aria-label="link to twitter"
        >
          <Twitter />
        </a>
      </div>
    </div>
  )
}
