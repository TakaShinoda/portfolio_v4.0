import { Personal } from './Personal'

export default function Home() {
  return (
    <section className="text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <Personal />
        </div>
      </div>
    </section>
  )
}
