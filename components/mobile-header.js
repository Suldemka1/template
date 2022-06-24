import menu from '../styles/mobile-header.module.css'
import {useState} from 'react'

export default function mobileHeader() {
  const [checked, setChecked] = useState(false)

  return (
      <div className={menu.hamburger_menu}>
        <input id={menu.menu__toggle} type="checkbox" checked={checked} onChange={e=> setChecked(checked)}/>
        <label className={menu.menu__btn} htmlFor="menu__toggle" onClick={e=>setChecked(!checked)}>
          <span></span>
        </label>
        <ul className={menu.menu__box}>
          <li><a className={menu.menu__item} href="#">О министерстве</a></li>
          <li><a className={menu.menu__item} href="#">Деятельность</a></li>
          <li><a className={menu.menu__item} href="#">Проекты</a></li>
          <li><a className={menu.menu__item} href="#">Пресс-служба</a></li>
          <li><a className={menu.menu__item} href="#">Контакты</a></li>
        </ul>
      </div>
  )
}