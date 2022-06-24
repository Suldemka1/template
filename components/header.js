import header from '../styles/header.module.css'

export default function Header() {
  return (
    <header className={header.header}>
      <div className={header.navbar_top}>
        <img src="/herb.svg.png" width={80} height={80} />
        <div className={header.navbar_links}>
          <a href="/about">Министерство</a>
          <a href="/documents">Банк документов</a>
          <a href="/service">Сервисы</a>
        </div>

        <input type="text" placeholder='поиск'/>
      </div>

      <div className={header.navbar_brand}>
        <div className={header.navbar_brand_logo}>
          <img src="/herb.svg.png" width={100} height={100} />
          <div className={header.navbar_brand_logo_name}>
            <h2 className={header.navbar_minabbr}>Минсокрназвание</h2>
            <h4 className={header.navbar_minfullname}>Министерство полное название</h4>
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

      <div className={header.nav_menu}>
        <menu>
          <li><a href='/about'>О министерстве</a></li>
          <li><a href='/about'>Деятельность</a></li>
          <li><a href='/about'>Проекты</a></li>
          <li><a href='/about'>Пресс-служба</a></li>
          <li><a href='/about'>Контакты</a></li>
        </menu>
      </div>
    </header>
  )
}