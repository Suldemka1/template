import { Card } from "react-bootstrap";
import { DocumentPage } from "../../components/DocumentCard/DocumentCard";

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/documents')
  const docs = await res.json()

  const paths = docs.map(({ id }) => ({
    params: { id: id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`http://localhost:3000/api/documents/${id}`)
  const docs = await res.json()

  if (!docs) {
    return {
      notFound: true
    }
  }

  return {
    props: { docs: docs }
  }
}

const DocumentItem = ({ docs }) => (
  <DocumentPage
    num={docs.num}
    name={docs.name}
    url={docs.url}
    date={docs.date}
    tag={docs.tag}
  />
)

export default DocumentItem