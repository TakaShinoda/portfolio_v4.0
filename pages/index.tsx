import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import { Personal } from '../components/Personal'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1">
        <div>
          <Personal />
        </div>
        {/* <div className="grid grid-cols-2 gap-4">
          <div>1</div>
          <div>2</div>
        </div> */}
      </div>
    </Layout>
  )
}

export default Home
