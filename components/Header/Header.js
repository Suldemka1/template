import header from './/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { LinkItem, NavMenu } from './NavMenu'

export default function Header(props, { children }) {

  const handleSwitchToEyeDamagedVersion = () => {
    console.log('switch')
  }

  return (
    <header className={header.header}>
      <div className={header.navbar_top}>
        <Container>
          <div className={header.navbar_top_content}>
            <Image alt='some' src="/herb.svg.png" width={80} height={80} />
            <Link href="/">Министерство</Link>
            <Link href="/documents">Банк документов</Link>
            <Link href={'/sendrequest'}><a>Подать обращение</a></Link>

            <input type="text" placeholder='поиск' />

          </div>
        </Container>
      </div>

      <div className={header.navbar_brand}>
        <Container>

          <div className={header.navbar_brand_content}>

            <div className={header.navbar_brand_logo_name}>
              <Image alt='some' className={header.image} src="/tuvan_herb.png" width={100} height={100} />
              <div className={header.navbar_brand_name}>
                <h2>{props.compressedName}</h2>
                <h4>{props.fullName}</h4>
              </div>
            </div>

            <div className={header.must_have}>
              <div className={header.eyes} onClick={handleSwitchToEyeDamagedVersion}><Image alt='some' src={'/eye.png'} width={37.5} height={22.5} />Версия для слабовидящих</div>
              <div>Общественная приемная</div>
              <div>Противодействие коррупции</div>
              <div>Горячая линия</div>
            </div>
          </div>
          
        </Container>
      </div>

      <NavMenu>
        <LinkItem href='/about' link='О министерстве'/>
        <LinkItem href='/activity' link='Деятельность'/>
        <LinkItem href='/projects' link='Программы'/>
        <LinkItem href='/press-service' link='Пресс-служба'/>
        <LinkItem href='/contacts' link='Контакты'/>
      </NavMenu>

    </header>
  )
}