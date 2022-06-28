import gvres from '../styles/govservice.module.css'
import Link from 'next/link'

export default function Resourse(){
  return(
      <div className={gvres.bg_gray}>
      <div className={gvres.resourse}>
        <h2>Государственные ресурсы</h2>
        <div className={gvres.cards}>
          <div className={gvres.card}>
            <Link href="/"><div>Название информационного ресурса</div></Link>
          </div>
          <div className={gvres.card}>
            <Link href="/"><div>Название информационного ресурса</div></Link>
          </div>
          <div className={gvres.card}>
            <Link href="/"><div>Название информационного ресурса</div></Link>
          </div>
          <div className={gvres.card}>
            <Link href="/"><div>Название информационного ресурса</div></Link>
          </div>
          <div className={gvres.card}>
            <Link href="/"><div>Название информационного ресурса</div></Link>
          </div>
          <div className={gvres.card}>
            <Link href="/"><div>Название информационного ресурса</div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}