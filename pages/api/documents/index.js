export const documents = [
  {
    id: 0,
    name: 'Об утверждении административных регламентов министерства',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
  {
    id: 1,
    name: 'somename',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
  {
    id: 2,
    name: 'somename',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
  {
    id: 3,
    name: 'somename',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
  {
    id: 4,
    name: 'somename',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
  {
    id: 5,
    name: 'somename',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
  {
    id: 6,
    name: 'somename',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
  {
    id: 7,
    name: 'somename',
    date: '13 июля 2022',
    tag: 'Протоколы',
    url: '/ob_utverzhdenii_administrativnyh_reglamentov_ministerstva.pdf'
  },
]

export default function handler(req, res) {
  res.status(200).json(documents)
}