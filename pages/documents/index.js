import { PageName } from "../../components/PageName/PageName";
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { DocumentCard } from "../../components/DocumentCard/DocumentCard";
import { Datepicker } from "../../components/DatePicker/DatePicker";


export const getServerSideProps = async () => {
  const res = await fetch(`http://${process.env.APIpath}/api/documents`,)
  const docs = await res.json()

  if (!docs) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      docs: JSON.parse(JSON.stringify(docs.response))
    },
  }
};



const Docs = ({ docs }) => {

  const datamap = docs.map(({ id, name, tag, date, url }) => (
    <DocumentCard
      key={id}
      num={id}
      name={name}
      date={date}
      tag={tag}
      url={url}
    />
  ))
  return (
    <>
      <PageName title='Банк документов' />
      <div>
        <FloatingLabel
          controlId="floatingInput"
          label="Заголовок содержит"
          className="mb-3">
          <Form.Control type="phone" value='' onChange={''} placeholder="Заголовок содержит" />
        </FloatingLabel>
        <Datepicker />
      </div>



      <Button onClick={e => ClickHandler()}>Применить</Button>
      <br></br>
      <div className="">
        {datamap}
      </div>
    </>
  );
};

export default Docs