import { useEffect, useState } from "react";
import { Form, FloatingLabel, FormGroup, FormCheck, Button } from "react-bootstrap";
import { PageName } from "../components/PageName/PageName";
import axios from 'axios'

export default function SendRequest() {
  const [snp, setSnp] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [offerCheck, setOfferCheck] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)


  const handleSubmit = () => {

      axios.post('url',
        {
          snp: snp,
          phone: phone,
          email: email,
          feedback: feedback
        })

    console.log(snp)
  }

  const handleOfferCheckChange = (e) => {

    if (offerCheck == false) {
      setOfferCheck(true)
      setButtonDisabled(false)
      console.log('принято')
    }
    else {
      setOfferCheck(false)
      setButtonDisabled(true)
      console.log('не принято')
    }

    console.log(offerCheck)
  }

  useEffect(() => {
  })



  return (
    <Form onSubmit={handleSubmit}>
      <h2></h2>
      <PageName title='Прием обращений граждан' />
      <FormGroup style={{ width: '30rem', margin: "auto" }}>
        <h5>Отправить обращение</h5>
        <FloatingLabel
          controlId="floatingInput"
          label="Фамилия Имя Отчество"
          className="mb-3">
          <Form.Control value={snp} onChange={(e) => setSnp(e.target.value)} placeholder="Фамилия Имя Отчество" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Номер телефона"
          className="mb-3">
          <Form.Control type="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Номер телефона" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Адрес электронной почты"
          className="mb-3">
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Адрес электронной почты" />
        </FloatingLabel>

        <FormGroup>
          <Form.Control as="textarea" value={feedback} onChange={e => setFeedback(e.target.value)} rows={4} placeholder="Введите ваше сообщение" style={{ resize: 'none' }} />
        </FormGroup>
        <FormGroup>
          <FormCheck
            type="switch"
            id="custom-switch"
            label="Я ознакомлен с Политикой обработки персональных данных и принимаю публичную Оферту"
            value={offerCheck}
            onChange={handleOfferCheckChange}
          ></FormCheck>
        </FormGroup>
        <Button type="submit" disabled={buttonDisabled} >Отправить</Button>
      </FormGroup>
    </Form>
  )
}