export const ministry = {
  about: {
    minFullName: 'Министерство экономического развития и промышленности Республики Тыва',
    minCompressedName: 'Минэкономразвития РТ',
    adress: 'Адрес: 667000, Республика Тыва, г. Кызыл, ул. Чульдума, д.18 (Дом Правительства)'
  },

  contacts: {
    email: 'mineconom@rtyva.ru',

    fax: '2-16-56'
  },

  socialMedia: {
    vk: 'https://vk.com',
    telegram: 'telegram_link'
  },

  pressService: {
    email: 'someemail@mail.ru',
    phone: 'phone_number',
    adress: 'Адрес: 667000, Республика Тыва, г. Кызыл, ул. Чульдума, д.18 (Дом Правительства',

    chairman: 'Фамилия Чодураа Амировна'
  },

  details: {
    url: 'http://localhost/documents/sample.pdf'
  }
}

export default function handler(req, res) {
  res.status(200).json(ministry)
}