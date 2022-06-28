import news from '../styles/news.module.css'
import Image from 'next/image'
import slider from '../styles/slider.module.css'
import Link from 'next/link'

export default function News() {
  return (
    <div className={news.news_page}>
      {/* <div className={news.last_news}>
        <div className={news.last_post}>
          <Image src='/news.jpg' width={600} height={450} />
          <p>Какой-то текст последней новости чтобы проверить как контент в конце идут три точки...</p>
        </div>
        <div className={news.banners}>
          <Image className={news.banners_item} src='/banner_1.jpg' width={200} height={150} />
          <Image className={news.banners_item} src='/banner_1.jpg' width={200} height={150} />
        </div>
      </div> */}

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