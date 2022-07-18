import React from "react";
import { render } from "react-dom";
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

  const [coauthors, setCoauthors] = useState(0)


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
    function hadler() {
      const title = React.createElement('h1', 'coauthor_1')
      render(title, document.getElementById('coauthors'))
    }

  }, [
    coauthors
  ])

  const handleAddAuthor = () => {
    //setCoauthors(coauthors + 1)
  }


  const authors = () => {
    return (
      <>
        <button onClick={handler()}>Добавить соавтора</button>
        <div className="coauthors"></div>
      </>

    )
  }

  return (
    <>
      <PageName title='Прием обращений граждан' />

      <Form onSubmit={handleSubmit}>

        <FormGroup style={{ margin: "auto" }}>
          <h5>Обращение к министру</h5>


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

          <div className="coauthors" id="coauthors">
            {authors()}
          </div>

          <FormGroup>
            <Form.Control as="textarea" value={feedback} onChange={e => setFeedback(e.target.value)} rows={4} placeholder="Введите ваше сообщение" style={{ resize: 'none', }} />
          </FormGroup>

          <p>
            В случае необходимости в подтверждение своих доводов гражданин вправе приложить к обращению необходимые
            документы и материалы в электронной форме, воспользовавшись функцией «Прикрепить файл».</p>

          <p>
            Обращаем внимание, что прикрепляемые в предложенном на сайте формате документы и материалы служат лишь
            подтверждением доводов автора обращения, изложенных в тексте обращения.
          </p>

          <p>
            Приложить необходимые документы и материалы в электронной форме можно в любой последовательности двумя
            самостоятельными вложениями файла без архивирования (файл вложения) по одному из двух разных типов допустимых
            форматов: текстового (графического) формата: txt, doc, docx, rtf, xls, xlsx, pps, ppt, odt, ods, odp, pub, pdf,
            jpg, jpeg, bmp, png, tif, gif, pcx;
            аудио- (видео-) формата: mp3, wma, avi, mp4, mkv, wmv, mov, flv.
            Иные форматы не обрабатываются.
          </p>

          <p>
            При подключении оборудования пользователя к сети «Интернет» по выделенным каналам связи с использованием технологий ADSL,
            3G, 4G, WiFi и иных технологий, обеспечивающих аналогичные скорости передачи данных в сети «Интернет», передача и обработка
            файла(ов) с суммарным размером:
            - до 5 Мб осуществляется, как правило, без задержки во времени;
            - от 5 Мб до 10 Мб может осуществляться с задержкой во времени;
            - свыше 10 Мб может быть не осуществлена.
          </p>


          <p>Для приложения к обращению необходимых документов и материалов в электронной форме нажмите кнопку «Выберите файл».</p>
          <Form.Control type='file' />

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
    </>

  )
}