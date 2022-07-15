import press from '../styles/press.module.css'
import { PageName } from '../components/PageName/PageName'

export default function Press() {
  return (
    <>
      <PageName title='Пресс-служба' />

      <div className={press.contacts}>
        <div><p>Электронная почта</p><p>someemail@mail.ru</p></div>
        <hr />
        <div><p>Телефоны</p><p>+7(39422)2-67-70, добавочный номер 502</p></div>
        <hr />
        <div><p>Адрес</p><p>667000 г. Кызыл, ул. Кочетова д. 1</p></div>
        <hr />
        <div><p>Ответственное лицо</p><p>Фамилия Имя Отчество</p></div>
        <hr />
      </div>

      <h6>*только для СМИ, связанных с освещением деятельности Министерства</h6>

    </>

  )
}