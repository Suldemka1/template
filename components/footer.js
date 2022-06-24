import footer from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className={footer.footer}>
        <div className={footer.jurinfo}>
          <div>
            <div className={footer.minname}>
              <a href="#">Сокращенное название министерства</a>
            </div>
            <div className={footer.type}>
              <a href="#">Официальный интернет-ресурс</a>
            </div>
            <div className={footer.contacts}>
              <div><img src="/herb.svg.png" /><p>+7-905-920-8545</p></div>
              <div><img src="/herb.svg.png" /><p>someemail@mail.com</p></div>
              <div className={footer.social_media}>
                <a href="#"><img src="/herb.svg.png" /></a>
                <a href="#"><img src="/herb.svg.png" /></a>
                <a href="#"><img src="/herb.svg.png" /></a>
                <a href="#"><img src="/herb.svg.png" /></a>
                <a href="#"><img src="/herb.svg.png" /></a>
                <a href="#"><img src="/herb.svg.png" /></a>
                <a href="#"><img src="/herb.svg.png" /></a>
              </div>
            </div>
          </div>

          <div>
            <div><a href="#">Использование материалов</a></div>
            <div><a href="#">О персональной информации пользователей</a></div>
            <div><a href="#">Карта сайта</a></div>
          </div>
        </div>

        <hr />
        <div className={footer.licence}>
          <p>Все материалы сайта доступны по лицензии: Лицензия на пользование</p>
          <img src="/informer.png" />
        </div>
      </div>
    </footer>
  )
}