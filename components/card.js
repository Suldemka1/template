import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card } from "react-bootstrap"

function UniversalCard(params, { children }) {
  const [state, setState] = useState({
    surname: null,
    name: null,
    patronymic: null,
    position: null,
    title: null,
  })


  return (
    <div className="universal-card">
      <Link href={params.href}>
      <a>
        <Card style={{maxWidth: '350px'}}>
          {children}
          <Card.Body>
            <Image src={params.image} width={params.width} height={params.height} layout="fixed" objectFit="cover"/>
          </Card.Body>
          <Card.Footer style={{maxWidth: '350px'}}>
            <p>{params.title}</p>
          </Card.Footer>
        </Card>
      </a>
    </Link >
    </div>
    
  )
}

export default UniversalCard