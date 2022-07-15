import header from './/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function Header() {

  return (
    <header className={header.header}>
      <div className={header.navbar_top}>
        <Container>
          <div className={header.navbar_top_content}>
            <Image src="/herb.svg.png" width={80} height={80} />
            {/* <div className={header.navbar_links}> */}
            <Link href="/">Министерство</Link>
            <Link href="/documents">Банк документов</Link>
            <Link href={'/sendrequest'}><a>Подать обращение</a></Link>

            {/* </div> */}

            <input type="text" placeholder='поиск' />

          </div>
        </Container>
      </div>

      <div className={header.navbar_brand}>
        <Container>
          {/* <video autoPlay muted loop >
            <source src='/flag_5.mp4' type='video/mp4' />
          </video> */}

          <div className={header.navbar_brand_content}>

            <div className={header.navbar_brand_logo_name}>
              <Image className={header.image} src="/tuvan_herb.png" width={100} height={100} />
              <div className={header.navbar_brand_name}>
                <h2>Минэкономразвития РТ</h2>
                <h4>Министерство экономического развития и промышленности</h4>
              </div>
            </div>

            <div className={header.must_have}>
              <div className={header.eyes}><Image src={'/eye.png'} width={37.5} height={22.5} />Версия для слабовидящих</div>
              <div>Общественная приемная</div>
              <div>Противодействие коррупции</div>
              <div>Горячая линия</div>
            </div>
          </div>
        </Container>
      </div>

      <div className={header.nav_menu}>
        <Container>
          <menu>
            <li><Link href='/about'><a>О министерстве</a></Link></li>
            <li><Link href='/activity'><a>Деятельность</a></Link></li>
            <li><Link href='/ipser'><a>«ИПСЭР»</a></Link></li>
            <li><Link href='/press-service'><a>Пресс-служба</a></Link></li>
            <li><Link href='/contacts'><a>Контакты</a></Link></li>
          </menu>
        </Container>

      </div>

    </header>
  )
}