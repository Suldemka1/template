import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

export default function NewsCarousel() {

  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/newspic.jpg"
          alt="First slide"
          width={1100}
          height={600}
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
          width={1100}
          height={600}
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
          width={1100}
          height={600}
        />

        <Carousel.Caption>
          <h3>Заголовок новости №3</h3>
          <p>Текст новости на 1 строку примерно 100 символов</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}