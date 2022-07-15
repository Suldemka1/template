import Person from "../components/PersonCard/Person";
import { PageName } from "../components/PageName/PageName";

export default function Management() {

  let management = [
    // {
    //   surname: 'Сат',
    //   name: 'Айдыс',
    //   patronymic: 'Александрович',
    //   position: 'Министр экономического развития и промышленности Республики Тыва'
    // },

    // {
    //   surname: 'Сат',
    //   name: 'Айдыс',
    //   patronymic: 'Александрович',
    //   position: 'Министр экономического развития и промышленности Республики Тыва'
    // },

    {
      surname: 'Ховалыг',
      name: 'Снежана',
      patronymic: 'Кушкаш-ооловна',
      position: 'Первый заместитель министра',
      email: 'mineconom@rtyva.ru',
      phone: '+7 (39422) 9-76-62'
    },

    {
      surname: 'Конгар',
      name: 'Анзатмаа',
      patronymic: 'Аяс-Кызы',
      position: 'Заместитель министра - начальник департамента по развитию промышленности и инвестиционной политике',
      email: 'mineconom@rtyva.ru',
      phone: '+7 (39422) 9-76-62'
    },

    {
      surname: 'Таспанчик',
      name: 'Темир',
      patronymic: 'Чаш-оолович',
      position: 'Заместитель министра',
      email: 'mineconom@rtyva.ru',
      phone: '+7 (39422) 9-76-62'
    },

    {
      surname: 'Фамилия',
      name: 'Имя',
      patronymic: 'Отчество',
      position: 'Специалист',
      email: 'somemail@mail.ru',
      phone: '+7 (39422) 2-25-45'
    },

    {
      surname: 'Фамилия',
      name: 'Имя',
      patronymic: 'Отчество',
      position: 'Специалист',
      email: 'somemail@mail.ru',
      phone: '+7 (39422) 2-25-45'
    },

    {
      surname: 'Фамилия',
      name: 'Имя',
      patronymic: 'Отчество',
      position: 'Специалист',
      email: 'somemail@mail.ru',
      phone: '+7 (39422) 2-25-45'
    },

    {
      surname: 'Фамилия',
      name: 'Имя',
      patronymic: 'Отчество',
      position: 'Специалист',
      email: 'somemail@mail.ru',
      phone: '+7 (39422) 2-25-45'
    },

    {
      surname: 'Фамилия',
      name: 'Имя',
      patronymic: 'Отчество',
      position: 'Специалист',
      email: 'somemail@mail.ru',
      phone: '+7 (39422) 2-25-45'
    },
  ]

  const show = management.map((item) => {
    return <Person
    key={item.id}
      surname={item.surname}
      name={item.name}
      patronymic={item.patronymic}
      position={item.position}
      email={item.email}
      phone={item.phone} />
  })

  return (
    <div className="management">
      <PageName title='Руководство министерства' />
      <h1></h1>
      <div className="headOf">

        <Person
        
          surname='Cат'
          name='Айдыс'
          patronymic='Александрович'
          position='Министр экономического развития и промышленности Республики Тыва'
          email='mineconom@rtyva.ru'
          phone='+7 (39422) 9-76-62' />
      </div>
      <div className="headOf">
        {show}
      </div>
    </div>
  )
}