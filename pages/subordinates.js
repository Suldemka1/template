import Image from "next/image"
import Link from "next/link"
import sub from '../styles/subordinates.module.css'

export default function Subordinates() {
  return (
    <>
      <h1>Подведомственные организации</h1>

      <div className={sub.container}>
        <div className={sub.subordinates}>
          <div className={sub.image}>
            <Image src={'/fpprt.png'} width={300} height={300} layout="fixed" />
          </div>
          <div className={sub.info}>
            <h2>Фонд поддержки предпринимательства Республики Тыва</h2>
            <p>Деятельность организации на 255 символов Деятельность организации на 255 символов </p>
            <p>Республика Тыва, г. Кызыл, ул. Красных партизан д. 18</p>
            <p>Контактный телефон: +7 (39422) 36082</p>
            <p>Адрес электронной почты: someemail@mail.ru</p>

            <div className={sub.links}>
              <button><Link href="/"><a>Перейти на сайт</a></Link></button>

              <button><Link href="/"><a>Скачать информацию</a></Link></button>

              <button><Link href="/"><a>Скачать информацию</a></Link></button>

              <button><Link href="/"><a>Скачать информацию</a></Link></button>

              <button><Link href="/"><a>Скачать информацию</a></Link></button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}