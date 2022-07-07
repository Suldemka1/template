import Service from '../components/govservice'
import Resourse from '../components/govresourses'
import Slider from '../components/slider/slider'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Slider>
        <div><Image src={'/anticorruption.jpeg'} layout='fill'/> </div>
        <div><Image src={'/antiterror.jpg'} layout='fill'/> </div>
        <div><Image src={'/click.png'} layout='fill'/> </div>
        {/* <div><Image src={'/antiterror.jpg'} width={450} height={333} /></div>
        <div><Image src={'/click.png'} width={450} height={333} /></div> */}
      </Slider>

      {/* <News /> */}
      <Service />
      <Resourse />
    </>

  )
}
