import press from '../styles/press.module.css'
import { PageName } from '../components/PageName/PageName'

export async function getStaticProps(){
  const res = await fetch('http://127.0.0.1:3000/api/ministryinfo')
  const press = await res.json()

  return {
    props: {
      press: press.pressService
    }
  }
}

export default function Press(props) {
  console.log(props.press.email)
  return (
    <>
      <PageName title='Пресс-служба' />

      <div className={press.contacts}>
        <div><p>Электронная почта</p><p>{props.press.email}</p></div>
        <hr />
        <div><p>Телефоны</p><p>{props.press.phone}</p></div>
        <hr />
        <div><p>Адрес</p><p>{props.press.adress}</p></div>
        <hr />
        <div><p>Ответственное лицо</p><p>{props.press.chairman}</p></div>
        <hr />
      </div>

      <h6>*только для СМИ, связанных с освещением деятельности Министерства</h6>

    </>

  )
}