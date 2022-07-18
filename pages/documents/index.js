import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import news from '../../styles/news.module.css'
import press from '../../styles/press.module.css'
import { Button, Card } from 'react-bootstrap'
import { PageName } from "../../components/PageName/PageName";

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/documents');
  const docs = await res.json();
  

  if (!docs) {
    return {
      notFound: true,
    }
  }

  return {
    props: { docs: docs },
  }
};



const Docs = ({ docs }) => {

  const datamap = docs.map(({ id, name, tag }) => (

      <Link href={`/documents/${id}`} key={id} className={'news'}>
        <div className='news' key={id}>
          <Card >
            <Card.Body>
              <div className='img_container'>
                <Image alt='some' src={'/news_1.jpg'} layout='fill' className='image' />
              </div>
              <div className='news_content'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {tag}
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

export default Docs;