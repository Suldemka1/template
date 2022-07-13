import News from './news'
import Service from '../components/govservice'
import Resourse from '../components/govresourses'
import NewsCarousel from '../components/carousel'

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <NewsCarousel/>
=======
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


>>>>>>> 8c2b25f843d926b05455c3753f1c03ffa86dc110
      <Service />
      <Resourse />
    </>
  )
}
