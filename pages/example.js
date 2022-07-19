import Image from "next/image"
import Link from "next/link"
import { Card, Button } from "react-bootstrap"

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/news`)
  const news = await res.json()
  console.log(news)
  return {
    props: {
      news: news.response
    }
  }
}


export default function Example({ news }) {

  const datamap = news.map(({ id, title, body, unix_time, img_urls }) => (
    <Link href={`/news/${id}`} key={id} className={'news'}>
      <div className='news' key={id}>
        <Card >
          <Card.Body>
            <div className='img_container'>
              {
                img_urls.map(item => <Image src={item} width={100} height={100} objectFit='contain' key={item}/>
                )
              }

            </div>
            <div className='news_content'>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
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

    </Link>
  ))

  return (
    <>
      {datamap}
    </>
  )
}