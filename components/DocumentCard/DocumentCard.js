import Link from "next/link"
import document from './document.module.scss'
import { Card } from 'react-bootstrap'
import { PageName } from "../PageName/PageName"

export const DocumentCard = (params) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <Link href={`/documents/${params.num}`}><a>{params.name}</a></Link>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <iframe src={`/documents/${params.url}`} className="" />
      </Card.Body>
      <Card.Footer>
        <div>{params.date}</div>
        <div>{params.tag}</div>
      </Card.Footer>
    </Card>
  )
}

export const DocumentPage = (params) => {
  return (
    <div className={document.documentCard}>
      <PageName title={params.name} />


      <Card.Text>Тип документа: {params.tag}</Card.Text>
      <Card.Text>Для загрузки и печати в формате pdf: <Link href={`/documents${params.url}`}>{params.name}</Link></Card.Text>

      {params.date}
      <div className={document.frame_container}>

        <iframe src={`/documents${params.url}`} className={document.myiframe}></iframe>
      </div>

    </div>

  )
}