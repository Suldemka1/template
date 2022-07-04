import news from '../styles/news.module.css'
import press from '../styles/press.module.css'
import Image from 'next/image'
import slider from '../styles/slider.module.css'
import Link from 'next/link'

export default function News() {
  return (
    <div className={news.news_page}>
      {/* <div className={news.last_news}>
        <div className={news.last_post}>
          
          <div className={news.imgcontainer}>
            <Image src='/news.jpg' width='100%' height='100%' layout="responsive" objectFit='contain'  />
          </div>
          <h3>Заголовок новости</h3>
        </div>
        <div className={news.banners}>
          <Image className={`${news.banners_item} ${news.top_slider}`} src='/anticorruption.jpeg' width={350} height={233} layout="fixed"/>
          <Image className={`${news.banners_item} ${news.down_slider}`} src='/anticorruption.jpeg' width={350} height={233} layout="fixed"/>
        </div>
      </div> */}

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

          <div className={press.news_card}>
            <Image src='/news_1.jpg' width={350} height='233px' layout='fixed'/>
            <div className={press.news_info}>
              <h3>Заголовок новости</h3>
              <p>Минсокрназвание России реализует функции по выработке и реализации государственной политики
                 и нормативно-правовому регулированию в сфере общего образования, среднего профессионального
                  образования и соответствующего дополнительного профессионального образования, профессионального
                   обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в 
                   отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся</p>
                   <div className={press.tags}>
                    <p>Tag 1</p>
                    <p>Tag 2</p>
                    <p>Tag 3</p>
                    <p>Tag 4</p>
                    <p>Tag 5</p>
                   </div>
            </div>
          </div>

          <div className={press.news_card}>
            <Image src='/news_1.jpg' width={350} height='233px' layout='fixed'/>
            <div className={press.news_info}>
              <h3>Заголовок новости</h3>
              <p>Минсокрназвание России реализует функции по выработке и реализации государственной политики
                 и нормативно-правовому регулированию в сфере общего образования, среднего профессионального
                  образования и соответствующего дополнительного профессионального образования, профессионального
                   обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в 
                   отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся</p>
                   <div className={press.tags}>
                    <p>Tag 1</p>
                    <p>Tag 2</p>
                    <p>Tag 3</p>
                    <p>Tag 4</p>
                    <p>Tag 5</p>
                   </div>
            </div>
          </div>

          <div className={press.news_card}>
            <Image src='/news_1.jpg' width={350} height='233px' layout='fixed'/>
            <div className={press.news_info}>
              <h3>Заголовок новости</h3>
              <p>Минсокрназвание России реализует функции по выработке и реализации государственной политики
                 и нормативно-правовому регулированию в сфере общего образования, среднего профессионального
                  образования и соответствующего дополнительного профессионального образования, профессионального
                   обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в 
                   отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся</p>
                   <div className={press.tags}>
                    <p>Tag 1</p>
                    <p>Tag 2</p>
                    <p>Tag 3</p>
                    <p>Tag 4</p>
                    <p>Tag 5</p>
                   </div>
            </div>
          </div>

          <div className={press.news_card}>
            <Image src='/news_1.jpg' width={350} height='233px' layout='fixed'/>
            <div className={press.news_info}>
              <h3>Заголовок новости</h3>
              <p>Минсокрназвание России реализует функции по выработке и реализации государственной политики
                 и нормативно-правовому регулированию в сфере общего образования, среднего профессионального
                  образования и соответствующего дополнительного профессионального образования, профессионального
                   обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в 
                   отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся</p>
                   <div className={press.tags}>
                    <p>Tag 1</p>
                    <p>Tag 2</p>
                    <p>Tag 3</p>
                    <p>Tag 4</p>
                    <p>Tag 5</p>
                   </div>
            </div>
          </div>

          <div className={press.news_card}>
            <Image src='/news_1.jpg' width={350} height='233px' layout='fixed'/>
            <div className={press.news_info}>
              <h3>Заголовок новости</h3>
              <p>Минсокрназвание России реализует функции по выработке и реализации государственной политики
                 и нормативно-правовому регулированию в сфере общего образования, среднего профессионального
                  образования и соответствующего дополнительного профессионального образования, профессионального
                   обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в 
                   отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся</p>
                   <div className={press.tags}>
                    <p>Tag 1</p>
                    <p>Tag 2</p>
                    <p>Tag 3</p>
                    <p>Tag 4</p>
                    <p>Tag 5</p>
                   </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}