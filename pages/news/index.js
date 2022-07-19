import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import news from '../../styles/news.module.css'
import press from '../../styles/press.module.css'
import { Button, Card } from 'react-bootstrap'
import { PageName } from "../../components/PageName/PageName";

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/news');
  const data = await response.json();


  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data.response },
  }
};



function News({ posts }){

  const datamap = posts.map(({ id, title, body, unix_time, img_urls }) => {
    return <Link href={`/news/${id}`} key={id} className={'news'}>
      <div className='news' key={id}>
        <Card >
          <Card.Body>
            <div className='img_container'>
              {
                img_urls.map(item => <Image alt='some' src={item} layout='fill' className="image" key={item}/>
                )
              }
            </div>
            <div className='news_content'>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {body}
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

  })

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

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
    </>
  );
};

export default News;