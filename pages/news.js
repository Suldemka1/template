import news from '../styles/news.module.css'
import Image from 'next/image'
import slider from '../styles/slider.module.css'
import Link from 'next/link'

export default function News() {
  return (
    <div className={news.news_page}>
      <div className={news.last_news}>
        <div className={news.last_post}>
          <Image src='/news.jpg' width={730} height={486} layout="fixed"/>
          <h3>Заголовок новости</h3>
        </div>
        <div className={news.banners}>
          <Image className={`${news.banners_item} ${news.top_slider}`} src='/anticorruption.jpeg' width={350} height={233} layout="fixed"/>
          <Image className={`${news.banners_item} ${news.down_slider}`} src='/anticorruption.jpeg' width={350} height={233} layout="fixed"/>
        </div>
      </div>

      <div className={slider.page}>
        <div className={slider.Image__wrapper}>
          <div className={slider.__items}>
            <div className={slider.__item}>
              <div></div>
            </div>
            <div className={slider.__item}>
              <div></div>
            </div>
            <div className={slider.__item}>
              <div></div>
            </div>
            <div className={slider.__item}>
              <div></div>
            </div>
          </div>
        </div>
        <Link href="#" ><a className={"slider__control slider__control_prev"}role="button" data-slide="prev"></a></Link>
        <Link href="#"><a className={"slider__control slider__control_next"} role="button" data-slide="next"></a></Link>
      </div>
    </div>
  )
}