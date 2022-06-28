import header from '../styles/header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [selected, setSelected] = useState(false)

  return (
    <header className={header.header}>
      <div className={header.navbar_top}>
        <div className={header.navbar_top_content}>
          <Image src="/herb.svg.png" width={80} height={80} />
          <div className={header.navbar_links}>
            <Link href="/">Министерство</Link>
            <Link href="/documents">Банк документов</Link>
            <Link href="/service">Сервисы</Link>
          </div>

          <input type="text" placeholder='поиск' />
        </div>
      </div>

      <div className={header.navbar_brand}>
        <div className={header.navbar_brand_content}>
          <div className={header.navbar_brand_logo}>
            <Image src="/herb.svg.png" width={100} height={100} />
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
          <li><Link href='/about'><a onClick={e => setSelected(true)}>О министерстве</a></Link></li>
          <li><Link href='/about'><a>Деятельность</a></Link></li>
          <li><Link href='/about'><a>Проекты</a></Link></li>
          <li><Link href='/about'><a>Пресс-служба</a></Link></li>
          <li><Link href='/about'><a>Контакты</a></Link></li>
        </menu>
      </div>
    </header>
  )
}