import Link from 'next/link'
import Image from 'next/image'

export default function Resourse() {
  return (
    <div className='govresourses'>
      
      <div className='resourse'>
        <h2>Государственные услуги</h2>
        <div className='cards'>
          <div className='card'>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image alt='some' src='/' width={80} height={80}/></a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image alt='some' src='/' width={60} height={60}/></a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image alt='some' src='/' width={60} height={60}/></a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image alt='some' src='/' width={60} height={60}/></a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image alt='some' src='/' width={60} height={60}/></a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a><div>Название государсвенной услуги со ссылкой на неё</div><Image alt='some' src='/' width={60} height={60}/></a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}