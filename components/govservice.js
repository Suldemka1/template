import govservice from '../styles/govservice.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Resourse() {
  return (
    <div className={govservice.bg_gray}>
      
      <div className={govservice.resourse}>
        <h2>Государственные услуги</h2>
        <div className={govservice.cards}>
          <div className={govservice.card}>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image src='/public/click.png' width={40} height={40}/></a></Link>
          </div>
          <div className={govservice.card}>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image src='/public/click.png' width={40} height={40}/></a></Link>
          </div>
          <div className={govservice.card}>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image src='/public/click.png' width={40} height={40}/></a></Link>
          </div>
          <div className={govservice.card}>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image src='/public/click.png' width={40} height={40}/></a></Link>
          </div>
          <div className={govservice.card}>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image src='/public/click.png' width={40} height={40}/></a></Link>
          </div>
          <div className={govservice.card}>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image src='/public/click.png' width={40} height={40}/></a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}