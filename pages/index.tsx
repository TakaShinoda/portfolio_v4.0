import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import { Personal } from '../components/Personal'
import { Career } from '../components/Career'
import { RSS } from '../components/RSS'

const Home: NextPage = () => {
  return (
    <Layout>
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
        </div>
      </section>
    </Layout>
  )
}

export default Home
