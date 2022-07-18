import Link from "next/link"
import document from './/document.module.scss'
import { Card } from 'react-bootstrap'

export const DocumentCard = (params) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>
            <Link href={`/documents/${params.url}`}><a>{params.name}</a></Link>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <iframe src={`/documents/${params.url}`} className=""/>
        </Card.Body>
        <Card.Footer>
          <div>{params.date}</div>
          <div>{params.tag}</div>
        </Card.Footer>
      </Card>
      <div>
        <div>{params.id}</div>


      </div>
    </>

  )
}

