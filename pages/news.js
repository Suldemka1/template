import news from '../styles/news.module.css'

export default function News() {
  return (
    <div className={news.news_page}>
      <div className={news.last_news}>
        <div className={news.last_post}>
          <img src='/sixteennine.png' />
        </div>
        <div className={news.banners}>
          <img className={news.banners_item} src='/sixteennine.png' />
          <img className={news.banners_item} src='/sixteennine.png' />
        </div>
      </div>
    </div>
  )
}