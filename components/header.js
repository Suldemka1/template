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
          {/* <div className={header.navbar_links}> */}

          <Link href="/">Министерство</Link>
          <Link href="/documents">Банк документов</Link>
          <Link href={'/about'}><a>Подать обращение</a></Link>
          <button><Image src={'/eye.png'} width={37.5} height={22.5} />Версия для слабовидящих</button>
          {/* </div> */}

          {/* <input type="text" placeholder='поиск' /> */}
          {/* <div className={header.must_have}>

            // {/* <div>Общественная приемная</div>
            // <div>Противодействие коррупции</div>
            // <div>Горячая линия</div> 
          </div>*/}
        </div>
      </div>

      <div className={header.navbar_brand}>
        <video autoPlay muted loop >
          <source src='/flag_5.mp4' type='video/mp4' />
        </video>

        <div className={header.navbar_brand_content}>

          <div className={header.navbar_brand_logo}>
            <Image src="/logotip.png" width={200} height={200} />
            {/* <Image src="/mineklogo.png" width={100} height={100} /> */}
            <div className={header.navbar_brand_logo_name}>
              <h2 className={header.navbar_minabbr}>Министерство экономического развития</h2>
              <h2 >и промышленности Республики тыва</h2>
              {/* <h4 className={header.navbar_minfullname}>Министерство экономического развития и промышленности</h4> */}
            </div>
          </div>
        </div>
      </div>

      <div className={header.nav_menu}>
        <menu>
          <li><Link href='/about'><a onClick={e => setSelected(true)}>О министерстве</a></Link></li>
          <li><Link href='/activity'><a>Деятельность</a></Link></li>
          <li><Link href='/ipser'><a>Нацпроект «ИПСЭР»</a></Link></li>
          <li><Link href='/press-service'><a>Пресс-служба</a></Link></li>
          <li><Link href='/contacts'><a>Контакты</a></Link></li>
        </menu>
      </div>
    </header>
  )
}