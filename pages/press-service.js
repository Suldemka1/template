import Footer from '../components/footer'
import Header from '../components/header'
import MobileHeader from '../components/mobile-header'
import container from '../styles/container.module.css'
import press from '../styles/press.module.css'

export default function Press() {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={container.container}>
        <h1>Пресс-служба</h1>

        <div className={press.contacts}>
          <div><p>Электронная почта</p><p>someemail@mail.ru</p></div>
          <hr/>
          <div><p>Телефоны</p><p>+7(39422)2-67-70, добавочный номер 502</p></div>
          <hr/>
          <div><p>Адрес</p><p>667000 г. Кызыл, ул. Кочетова д. 1</p></div>
          <hr/>
          <div><p>Ответственное лицо</p><p>Фамилия Имя Отчество</p></div>
          <hr/>
        </div>

        <h6>*только для СМИ, связанных с освещением деятельности Министерства</h6>

        <div className={press.news}>
          <menu>
            <li>Новости</li>
            <li>Анонсы</li>
            <li>Интервью</li>
            <li>Выступления и заявления</li>
            <li>Официальный комментарий</li>
            <li>Медиатека</li>
          </menu>

          <div className={press.news_content}>
            <p>Контент</p>
          </div>
        </div>
      </div>

      <Footer />
    </>

  )
}