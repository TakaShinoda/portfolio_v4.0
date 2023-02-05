import { FC } from 'react'
import contentsData from '../.contents/posts.json'
import Image from 'next/image'

export const Article: FC = () => {
  return (
    <div className="p-8 shadow-lg rounded-lg pb-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 px-3">
          {contentsData.map((content, i) => (
            <div key={content.title}>
              {i < 9 && (
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:scale-125 transition-all duration-500">
                  <div className="flex-shrink-0">
                    <a
                      href={content.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        className="h-54 w-full object-cover"
                        src={content.enclosure.url}
                        alt={`${content.title}の画像`}
                        width={500}
                        height={500}
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
