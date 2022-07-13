import News from './news'
import Service from '../components/govservice'
import Resourse from '../components/govresourses'
import NewsCarousel from '../components/carousel'

export default function Home() {
  return (
    <>
      <NewsCarousel/>
      <Service />
      <Resourse />
      <News />
    </>
  )
}
