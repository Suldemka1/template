import Image from "next/image"
import Link from "next/link"
import person from '../styles/person.module.css'

export default function Person(params) {

  return (
    <div className={person.card}>
      <div className={person.image_container}>
        <Image src={params.image} width={params.width} height={params.height} layout="fixed" objectFit="fill" />
      </div>
      
      <div className={person.info}>
        <div>
          <p className={person.surname}>{params.surname}</p>
          <p>{params.name}</p>
          <p>{params.patronymic}</p>
          <h4 className={person.position}>{params.position}</h4>
        </div>

        <div>
          <p className={person.department}>{params.department_1}</p>
          <p className={person.department}>{params.department_2}</p>
          <p className={person.department}>{params.department_3}</p>
          <p className={person.department}>{params.department_4}</p>
        </div>

        <div className={person.buttons}>
          <button><Link href={params.photos}><a>Фото</a></Link></button>
          {/* <button><Link href={params.biography}><a>Биография</a></Link></button>
          <button><Link href={params.news}><a>Новости</a></Link></button>
          <button><Link href={params.performance}><a>Выступления</a></Link></button>
          <button><Link href={params.interviews}><a>Интервью</a></Link></button> */}
        </div>

      </div>

    </div>
  )
}