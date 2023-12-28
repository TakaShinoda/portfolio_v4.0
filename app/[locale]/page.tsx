import { Personal } from '@/Personal'
import { Career } from '@/Career'
import { RSS } from '@/RSS'
import { Blog } from '@/Blog'
import { Speaker } from '@/Speaker'

export default function Home() {
  return (
    <section className="text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <Personal />
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">
            <Career />
          </div>
          <div className="p-4 md:w-1/2">
            <RSS />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">
            <Blog />
          </div>
          <div className="p-4 md:w-1/2">
            <Speaker />
          </div>
        </div>
      </div>
    </section>
  )
}
