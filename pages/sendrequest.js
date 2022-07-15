import { Form, FloatingLabel, FormGroup, FormCheck, Button } from "react-bootstrap";
import { PageName } from "../components/PageName/PageName";

export default function SendRequest() {
  return (
    <Form>
      <h2></h2>
      <PageName title='Прием обращений граждан' />
      <FormGroup style={{ width: '30rem', margin: "auto" }}>
        <h5>Отправить обращение</h5>
        <FloatingLabel
          controlId="floatingInput"
          label="Фамилия Имя Отчество"
          className="mb-3">
          <Form.Control type="email" value={''} onChange={e => setSender(e.target.value)} placeholder="Фамилия Имя Отчество" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Номер телефона"
          className="mb-3">
          <Form.Control type="phone" value={''} onChange={e => setSender(e.target.value)} placeholder="Номер телефона" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Адрес электронной почты"
          className="mb-3">
          <Form.Control type="email" value={''} onChange={e => setSender(e.target.value)} placeholder="Адрес электронной почты" />
        </FloatingLabel>

        <FormGroup>
          <Form.Control as="textarea" value={''} onChange={e => setFeedback(e.target.value)} rows={4} placeholder="Введите ваше сообщение" style={{ resize: 'none' }} />
        </FormGroup>
        <FormGroup>
          <FormCheck
            type="switch"
            id="custom-switch"
            label="Я ознакомлен с Политикой обработки персональных данных и принимаю публичную Оферту"
          ></FormCheck>
        </FormGroup>
        <Button type="submit">Отправить</Button>
      </FormGroup>
    </Form>
  )
}