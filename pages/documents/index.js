import { PageName } from "../../components/PageName/PageName";
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { DocumentCard } from "../../components/DocumentCard/DocumentCard";

export const getStaticProps = async () => {
  const res = await fetch(`http://${process.env.APIpath}/api/documents`);
  const docs = await res.json();


  if (!docs) {
    return {
      notFound: true,
    }
  }

  return {
    props: { docs: docs },
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
      <FloatingLabel
        controlId="floatingInput"
        label="Заголовок содержит"
        className="mb-3">
        <Form.Control type="phone" value='' onChange={''} placeholder="Заголовок содержит" />
      </FloatingLabel>

      <Button onClick={e => ClickHandler()}>Применить</Button>
      <br></br>
      <div className="">
        {datamap}
      </div>

    </>
  );
};

export default Docs;