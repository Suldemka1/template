import contacts from '../styles/contacts.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Contacts() {
  return (
    <>
      <div className={contacts.contacts}>
        <h1>Справочная информация</h1>
        <div >
          <div className={contacts.item}>
            <p>Справочная служба</p>
            <p>Номер</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Электронная почта</p>
            <p>someemail@mail.ru</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Факс</p>
            <p>номер факса</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Контакты для СМИ</p>
            <p>номер</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Для корреспонденции</p>
            <p>667000 Республика Тыва, г. Кызыл, ул. Кочетова 1</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Отдел кадров</p>
            <p>номер</p>
          </div>
          <hr />
        </div>

        <h1>Горячая линия</h1>
        <div >
          <div className={contacts.item}>
            <p>По вопросам ...</p>
            <p>Номер</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>По вопросам ...</p>
            <p>someemail@mail.ru</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>По вопросам ...</p>
            <p>номер факса</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>По вопросам ...</p>
            <p>номер</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>По вопросам ...</p>
            <p>номер</p>
          </div>
          <hr />
        </div>

        <h1>Обращение граждан</h1>
        <div>
          <div className={contacts.item}>
            <div>
              <h4>
                Общественная приёмная
                (узнать статус вашего обращения)</h4>
              <p>Ответственный за организацию приема граждан – начальник отдела работы с обращениями граждан и организаций и архива Трипольская Ирина Юрьевна</p>
              <p>В целях охраны здоровья граждан и в связи с угрозой распространения коронавирусной инфекции личный приём граждан в помещениях Минсокрназвание России временно ограничен. При этом в Минсокрназвание России предусмотрена возможность проведения личных приемов граждан в режиме видеосвязи по предварительной записи и в соответствии с графиком личного приема уполномоченными лицами Министерства.
                По возможности рекомендуем направлять обращения в адрес Минсокрназвание России путем заполнения электронной формы на официальном сайте Минсокрназвание России.в</p>
            </div>

            <div>
              <p>+7 (495) 587-01-19</p>
              <p>(пн.-чт.: 9:00-18:00, пт.: 9:00-16:45, обед: 12:00-12:45)</p>
              <p>+7 (495) 587-01-10, доб. 3823</p>
              <Link href={'/'}><a>Электронное обращение</a></Link>
            </div>

          </div>
          <hr />
        </div>

        <h1>Реквизиты министерства</h1>

        <div >
          <div className={contacts.item}>
            <p>Полное наименование</p>
            <p>Министерство полное название</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Сокращенное наименование</p><p>Минсокрназвание</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Реквизиты лицевого счета</p><p>скачать</p>
          </div>
          <hr />
        </div>

        <div>
          <div className={contacts.item}>
            <p>Перечень источников дохода</p><p>скачать</p>
          </div>
          <hr />
        </div>

        <div className={contacts.socialMedia}>
          <div className={contacts.item}>
            <p>Социальные медиа</p>
            <ul>
              <li><Link href={'/'}><a><Image alt='some' src={'/vk_logo.png'} width={30} height={30}/></a></Link></li>
              <li><Link href={'/'}><a><Image alt='some' src={'/vk_logo.png'} width={30} height={30}/></a></Link></li>
              <li><Link href={'/'}><a><Image alt='some' src={'/vk_logo.png'} width={30} height={30}/></a></Link></li>
              <li><Link href={'/'}><a><Image alt='some' src={'/vk_logo.png'} width={30} height={30}/></a></Link></li>
              <li><Link href={'/'}><a><Image alt='some' src={'/vk_logo.png'} width={30} height={30}/></a></Link></li>
              <li><Link href={'/'}><a><Image alt='some' src={'/vk_logo.png'} width={30} height={30}/></a></Link></li>
            </ul>
          </div>
          <hr />
        </div>
      </div>

    </>
  )
}