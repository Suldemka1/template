import menu from '../styles/mobile-header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileHeader() {
  const [checked, setChecked] = useState(false)

  return (
    <header className={menu.mobileHeader}>
      <div className={menu.hamburger_menu}>
        <input id={menu.menu__toggle} type="checkbox" checked={checked} onChange={e => setChecked(checked)} />
        <label className={menu.menu__btn} htmlFor="menu__toggle" onClick={e => setChecked(!checked)}>
          <span></span>
        </label>
        <ul className={menu.menu__box}>
          <li><Link className={menu.menu__item} href="/about"><a>О министерстве</a></Link></li>
          <li><Link className={menu.menu__item} href="/activity"><a>Деятельность</a></Link></li>
          <li><Link className={menu.menu__item} href="/projects"><a>Проекты</a></Link></li>
          <li><Link className={menu.menu__item} href="/press-service"><a>Пресс-служба</a></Link></li>
          <li><Link className={menu.menu__item} href="/contacts"><a>Контакты</a></Link></li>

          <li><Link className={menu.menu__item} href="/"><a>Министерство</a></Link></li>
          <li><Link className={menu.menu__item} href="/"><a>Банк документов</a></Link></li>
          <li><Link className={menu.menu__item} href="/"><a>Сервисы</a></Link></li>
        </ul>
      </div>

      <div className={menu.min_logo_name}>
        <Image src='/herb.svg.png' alt='' width={40} height={40} />
        <div>МинЭк Тыва</div>
      </div>
    </header>

  )
}