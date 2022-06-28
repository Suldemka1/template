import news from '../styles/news.module.css'
import Image from 'next/image'

export default function News() {
  return (
    <div className={news.news_page}>
      <div className={news.last_news}>
        <div className={news.last_post}>
          <Image src='/news.jpg' width={600} height={450}/>
          <p>Какой-то текст последней новости чтобы проверить как контент в конце идут три точки...</p>
        </div>
        <div className={news.banners}>
          <Image className={news.banners_item} src='/banner_1.jpg' width={200} height={150}/>
          <Image className={news.banners_item} src='/banner_1.jpg' width={200} height={150}/>
        </div>
      </div>
    </div>
  )
}