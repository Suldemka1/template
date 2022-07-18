export const staff = {
  ministr: {
    id: 0,

    surname: 'Сат',
    name: 'Айдыс',
    patronymic: 'Александрович',

    position: 'Министр экономического развития и промышленности Республики Тыва',

    phone: '+7 (39422) 9-76-62',
    email: 'mineconom@rtyva.ru'
  },
  staff: [{
    id: 1,
    surname: 'Ховалыг',
    name: 'Снежана',
    patronymic: 'Кушкаш-ооловна',
    position: 'Первый заместитель министра',
    email: 'mineconom@rtyva.ru',
    phone: '+7 (39422) 9-76-62'
  },

  {
    id: 2,
    surname: 'Конгар',
    name: 'Анзатмаа',
    patronymic: 'Аяс-Кызы',
    position: 'Заместитель министра - начальник департамента по развитию промышленности и инвестиционной политике',
    email: 'mineconom@rtyva.ru',
    phone: '+7 (39422) 9-76-62'
  },

  {
    id: 3,
    surname: 'Таспанчик',
    name: 'Темир',
    patronymic: 'Чаш-оолович',
    position: 'Заместитель министра',
    email: 'mineconom@rtyva.ru',
    phone: '+7 (39422) 9-76-62'
  },

  {
    id: 4,
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    position: 'Специалист',
    email: 'somemail@mail.ru',
    phone: '+7 (39422) 2-25-45'
  },

  {
    id: 5,
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    position: 'Специалист',
    email: 'somemail@mail.ru',
    phone: '+7 (39422) 2-25-45'
  },

  {
    id: 6,
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
    id: 7,
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    position: 'Специалист',
    email: 'somemail@mail.ru',
    phone: '+7 (39422) 2-25-45'
  }
  ]
}

export default function handler(req, res) {
  res.status(200).json(staff)
}