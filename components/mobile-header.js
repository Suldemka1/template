import menu from '../styles/mobile-header.module.css'
import { useState } from 'react'

export default function mobileHeader() {
  const [checked, setChecked] = useState(false)

  return (
    <header className={menu.mobileHeader}>
      <div className={menu.hamburger_menu}>
        <input id={menu.menu__toggle} type="checkbox" checked={checked} onChange={e => setChecked(checked)} />
        <label className={menu.menu__btn} htmlFor="menu__toggle" onClick={e => setChecked(!checked)}>
          <span></span>
        </label>
        <ul className={menu.menu__box}>
          <li><a className={menu.menu__item} href="/about">О министерстве</a></li>
          <li><a className={menu.menu__item} href="/">Деятельность</a></li>
          <li><a className={menu.menu__item} href="/projects">Проекты</a></li>
          <li><a className={menu.menu__item} href="/press-service">Пресс-служба</a></li>
          <li><a className={menu.menu__item} href="/contacts">Контакты</a></li>

          <li><a className={menu.menu__item} href="#">Министерство</a></li>
          <li><a className={menu.menu__item} href="#">Банк документов</a></li>
          <li><a className={menu.menu__item} href="#">Сервисы</a></li>
        </ul>
      </div>

      <div className={menu.min_logo_name}>
        <img src='/herb.svg.png' alt='' width={40} height={40} />
        <div>МинЭк Тыва</div>
      </div>
    </header>

  )
}