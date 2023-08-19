import { Personal } from '../components/Personal'
import { Career } from '../components/Career'
import { RSS } from '../components/RSS'
import { Blog } from '../components/Blog'

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
          <div className="p-4 md:w-1/2"></div>
        </div>
      </div>
    </section>
  )
}
