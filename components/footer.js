import footer from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={footer.footer}>
          <div className={footer.jurinfo}>
            <div>
              <div className={footer.minname}>
                <Link href="/">Сокращенное название министерства</Link>
              </div>
              <div className={footer.type}>
                <Link href="/">Официальный интернет-ресурс</Link>
              </div>
              <div className={footer.contacts}>
                <div><Image src="/herb.svg.png" layout='' width={20} height={20} /><p>+7-905-920-8545</p></div>
                <div><Image src="/herb.svg.png" layout='' width={20} height={20} /><p>someemail@mail.com</p></div>
                <div className={footer.social_media}>
                  <Link href="/"><Image src="/herb.svg.png" width={20} height={20} /></Link>
                  <Link href="/"><Image src="/herb.svg.png" width={20} height={20} /></Link>
                  <Link href="/"><Image src="/herb.svg.png" width={20} height={20} /></Link>
                  <Link href="/"><Image src="/herb.svg.png" width={20} height={20} /></Link>
                  <Link href="/"><Image src="/herb.svg.png" width={20} height={20} /></Link>
                  <Link href="/"><Image src="/herb.svg.png" width={20} height={20} /></Link>
                  <Link href="/"><Image src="/herb.svg.png" width={20} height={20} /></Link>
                </div>
              </div>
            </div>

            <div>
              <div><Link href="/">Использование материалов</Link></div>
              <div><Link href="/">О персональной информации пользователей</Link></div>
              <div><Link href="/">Карта сайта</Link></div>
            </div>
          </div>

          <hr />
          <div className={footer.licence}>
            <p>Все материалы сайта доступны по лицензии: Лицензия на пользование</p>
            <Image src="/informer.png" width={100} height={40} />
          </div>
        </div>
      </Container>

    </footer>
  )
}