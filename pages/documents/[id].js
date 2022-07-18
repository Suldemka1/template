import Head from "next/head";
import { DocumentCard } from "../../components/DocumentCard/DocumentCard";

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/documents')
  const docs = await res.json()

  const paths = docs.map(({ id }) => ({
    params: {id: id.toString() }
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
    props: {docs : data}
  }
}

const DocumentItem = ({ doc }) => (
  <>
    Документ {doc.id}
  </>
)

export default DocumentItem