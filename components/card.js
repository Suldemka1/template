import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import card from '../styles/card.module.css'

export default function Card(params) {
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