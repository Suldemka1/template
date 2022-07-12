import News from './news'
import Service from '../components/govservice'
import Resourse from '../components/govresourses'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='slider'>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/newspic.jpg"
              alt="First slide"
              width={1300}
              height={650}
            />
            <Carousel.Caption>
              <h3>Заголовок новости №1</h3>
              <p>Текст новости на 1 строку примерно 100 символов</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/newspic.jpg"
              alt="Second slide"
              width={1300}
              height={650}
            />

            <Carousel.Caption>
              <h3>Заголовок новости №2</h3>
              <p>Текст новости на 1 строку примерно 100 символов</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/newspic.jpg"
              alt="Third slide"
              width={1300}
              height={650}
            />

            <Carousel.Caption>
              <h3>Заголовок новости №3</h3>
              <p>Текст новости на 1 строку примерно 100 символов</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <Service />
      <Resourse />
    </>

  )
}
