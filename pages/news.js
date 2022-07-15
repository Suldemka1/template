import { PageName } from '../components/PageName/PageName'
import news from '../styles/news.module.css'
import press from '../styles/press.module.css'
import Image from 'next/image'
import { Button, Card } from 'react-bootstrap'

export default function News({ posts }) {
  const datamap = posts.map((data) => (
      <div className='news' key={data.id}>

        <Card >
          <Card.Body>
            <div className='img_container'>
              <Image alt='some' src={'/news_1.jpg'} layout='fill' className='image' />
            </div>
            <div className='news_content'>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.body}
              </Card.Text>
              <div className='news-tags'>
                <Button className='tag'>Tag 1</Button>
                <Button className='tag'>Tag 2</Button>
                <Button className='tag'>Tag 3</Button>
                <Button className='tag'>Tag 4</Button>
                <Button className='tag'>Tag 5</Button>
                <Button className='tag'>Tag 6</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
  ))

  return (
    <div className={news.news_page}>
      <PageName title='Новости министерства' />
      <div className={press.news}>
        <menu>
          <li>Новости</li>
          <li>Анонсы</li>
          <li>Интервью</li>
          <li>Выступления и заявления</li>
          <li>Официальный комментарий</li>
          <li>Медиатека</li>
        </menu>

        <div className={press.news_content}>
          <div className={press.news_date}>01.07.2022</div>
          {datamap}
        </div>

      </div>
    </div >
  )
}

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: { posts }
  }
}