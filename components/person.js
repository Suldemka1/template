import Image from "next/image"
import person from '../styles/person.module.css'

export default function Person(params) {
  return (
    <div className={person.card}>
      <Image src={params.image} width={params.width} height={params.height} />
      <div className={person.info}>
        <p className={person.surname}>{params.surname}</p>
        <p>{params.name}</p>
        <p>{params.patronymic}</p>
        <p>{params.position}</p>

        <p className={person.department}>{params.department_1}</p>
        <p className={person.department}>{params.department_2}</p>
        <p className={person.department}>{params.department_3}</p>
        <p className={person.department}>{params.department_4}</p>
      </div>

    </div>
  )
}