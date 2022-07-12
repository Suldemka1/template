import Link from 'next/link'

export default function Resourse() {
  return (
    <div className='govresourses'>

      <div className='resourse'>
        <h2>Государственные ресурсы</h2>
        <div className='cards'>
          <div className='card'>
            <Link href="/"><a>Название информационного ресурса</a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a>Название информационного ресурса</a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a>Название информационного ресурса</a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a>Название информационного ресурса</a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a>Название информационного ресурса</a></Link>
          </div>
          <div className='card'>
            <Link href="/"><a>Название информационного ресурса</a></Link>
          </div>
        </div>
      </div>

    </div>
  )
}