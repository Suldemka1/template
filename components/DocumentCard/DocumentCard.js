import Link from "next/link"
import document from './document.module.scss'
import { Card } from 'react-bootstrap'
import { PageName } from "../PageName/PageName"

export const DocumentCard = (params) => {
  return (
    <div className={document.documentCard}>
      <Card>
        <Card.Header>
          <Card.Title>
            <Link href={`/documents/${params.num}`}><a>{params.name}</a></Link>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>Для загрузки и печати в формате pdf: <Link href={`/documents${params.url}`}>{params.name}</Link></Card.Text>
        </Card.Body>
        <Card.Footer>
          <div>{params.date}</div>
          <div>{params.tag}</div>
        </Card.Footer>
      </Card>
    </div>

  )
}

export const DocumentPage = (params) => {
  return (
    <div className={document.documentPage}>
      <PageName title={params.name} />


      <Card.Text>Тип документа: {params.tag}</Card.Text>
      <Card.Text>Для загрузки и печати в формате pdf: <Link href={`/documents${params.url}`}>{params.name}</Link></Card.Text>

      <Card.Text>Дата размещения: {params.date}</Card.Text>
      <div className={document.frame_container}>

        <iframe src={`/documents${params.url}`} className={document.myiframe}></iframe>
      </div>

    </div>

  )
}