import Image from "next/image"
import Link from "next/link"
import card from '../styles/card.module.css'

function Card(params, { children }) {
  return (
    <div className={card.card}>
      <Link href={params.href}>
        <a>
          <Image src={params.image} width={params.width} height={params.height} />
          <p>{params.title}</p>
        </a>
      </Link>
    </div>
  )
}

export default  Card