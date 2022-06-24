import news from '../styles/news.module.css'

export default function News() {
  return (
    <div className={news.news_page}>
      <div className={news.last_news}>
        <div className={news.last_post}>
          <img src='/news.jpg' />
          <p>Какой-то текст последней новости чтобы проверить как контент в конце идут три точки...</p>
        </div>
        <div className={news.banners}>
          <img className={news.banners_item} src='/banner_1.jpg' />
          <img className={news.banners_item} src='/banner_1.jpg' />
        </div>
      </div>
    </div>
  )
}