import header from '../styles/header.module.css'
import { useState } from 'react'

export default function Header() {
  const [selected, setSelected] = useState(false)

  return (
    <header className={header.header}>
      <div className={header.navbar_top}>
        <div className={header.navbar_top_content}>
          <img src="/herb.svg.png" width={80} height={80} />
          <div className={header.navbar_links}>
            <a href="/">Министерство</a>
            <a href="/documents">Банк документов</a>
            <a href="/service">Сервисы</a>
          </div>

          <input type="text" placeholder='поиск' />
        </div>
      </div>

      <div className={header.navbar_brand}>
        <div className={header.navbar_brand_content}>
          <div className={header.navbar_brand_logo}>
            <img src="/herb.svg.png" width={100} height={100} />
            <div className={header.navbar_brand_logo_name}>
              <h2 className={header.navbar_minabbr}>Минэкономразвития РТ</h2>
              <h4 className={header.navbar_minfullname}>Министерство экономического развития и промышленности</h4>
            </div>
          </div>

          <div className={header.must_have}>
            <div>Версия для слабовидящих</div>
            <div>Подать обращение</div>
            <div>Общественная приемная</div>
            <div>Противодействие коррупции</div>
            <div>Горячая линия</div>
          </div>
        </div>

      </div>

      <div className={header.nav_menu}>
        <menu>
          <li><a href='/about' onClick={e => setSelected(true)}>О министерстве</a></li>
          <li><a href='/about'>Деятельность</a></li>
          <li><a href='/about'>Проекты</a></li>
          <li><a href='/about'>Пресс-служба</a></li>
          <li><a href='/about'>Контакты</a></li>
        </menu>
      </div>
    </header>
  )
}