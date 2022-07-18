import press from '../styles/press.module.css'
import { PageName } from '../components/PageName/PageName'


const APIpath = process.env.APIpath

export async function getStaticProps(){
  const res = await fetch(`http://${process.env.APIpath}/api/ministryinfo`)
  const press = await res.json()

  return {
    props: {
      press: press.pressService
    }
  }
}

export default function Press(props) {
  console.log('api path')
  console.log(APIpath)
  return (
    <>
      <PageName title='Пресс-служба' />

      <div className={press.contacts}>
        <div><p>Электронная почта</p><p>{props.press.email} {process.env.APIpath}</p></div>
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