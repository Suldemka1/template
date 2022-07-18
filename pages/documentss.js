import Link from "next/link"
import { PageName } from "../components/PageName/PageName"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { DocumentCard } from "../components/DocumentCard/DocumentCard"

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/documents`)
  const documents = await res.json()


  return {
    props: {
      documents: documents
    }
  }
}

export default function Documents(props) {
  console.log(props)

  const show = props.documents.map(item => {
    return (
      <DocumentCard
        num={item.id}
        name={item.name}
        date={item.date}
        tag={item.tag}
        url={item.url}
      />
    )

  })

  return (
    <>
      <PageName title='Банк документов' />
      <FloatingLabel
        controlId="floatingInput"
        label="Заголовок содержит"
        className="mb-3">
        <Form.Control type="phone" value='' onChange={''} placeholder="Заголовок содержит" />
      </FloatingLabel>

      <Button onClick={e => ClickHandler()}>Применить</Button>
      {show}


    </>
  )
}