import footer from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function Footer(props) {
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
                <div><Image alt='some' src="/herb.svg.png" layout='' width={20} height={20} /><p>{props.phone}</p></div>
                <div><Image alt='some' src="/herb.svg.png" layout='' width={20} height={20} /><p>{props.email}</p></div>
                <div className={footer.social_media}>
                  <Link href="/"><Image alt='some' src="/vk_logo.png" width={20} height={20} /></Link>
                  <Link href="/"><Image alt='some' src="/vk_logo.png" width={20} height={20} /></Link>
                  <Link href="/"><Image alt='some' src="/vk_logo.png" width={20} height={20} /></Link>
                  <Link href="/"><Image alt='some' src="/vk_logo.png" width={20} height={20} /></Link>
                  <Link href="/"><Image alt='some' src="/vk_logo.png" width={20} height={20} /></Link>
                  <Link href="/"><Image alt='some' src="/vk_logo.png" width={20} height={20} /></Link>
                  <Link href="/"><Image alt='some' src="/vk_logo.png" width={20} height={20} /></Link>
                </div>
              </div>
            </div>

            <div>
              <div><Link href="/documents/sample.pdf">Использование материалов</Link></div>
              <div><Link href="/documents/sample.pdf">О персональной информации пользователей</Link></div>
              <div><Link href="/sitemap">Карта сайта</Link></div>
            </div>
          </div>

          <hr />
          <div className={footer.licence}>
            <p>Все материалы сайта доступны по лицензии: Лицензия на пользование</p>
            <Image alt='some' src="/informer.png" width={100} height={40} />
          </div>
        </div>
      </Container>

    </footer>
  )
}