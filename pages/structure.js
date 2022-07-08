import { Button, Card, ListGroup } from "react-bootstrap";
import Image from "next/image";

export default function Structure() {

  // let management = [
  //   // {
  //   //   surname: 'Сат',
  //   //   name: 'Айдыс',
  //   //   patronymic: 'Александрович',
  //   //   position: 'Министр экономического развития и промышленности Республики Тыва'
  //   // },

  //   // {
  //   //   surname: 'Сат',
  //   //   name: 'Айдыс',
  //   //   patronymic: 'Александрович',
  //   //   position: 'Министр экономического развития и промышленности Республики Тыва'
  //   // },

  //   {
  //     surname: 'Ховалыг',
  //     name: 'Снежана',
  //     patronymic: 'Кушкаш-ооловна',
  //     position: 'Первый заместитель министра',
  //     email: 'mineconom@rtyva.ru',
  //     phone: '+7 (39422) 9-76-62'
  //   },

  //   {
  //     surname: 'Конгар',
  //     name: 'Анзатмаа',
  //     patronymic: 'Аяс-Кызы',
  //     position: 'Заместитель министра - начальник департамента по развитию промышленности и инвестиционной политике',
  //     email: 'mineconom@rtyva.ru',
  //     phone: '+7 (39422) 9-76-62'
  //   },

  //   {
  //     surname: 'Таспанчик',
  //     name: 'Темир',
  //     patronymic: 'Чаш-оолович',
  //     position: 'Заместитель министра',
  //     email: 'mineconom@rtyva.ru',
  //     phone: '+7 (39422) 9-76-62'
  //   },

  //   {
  //     surname: 'Фамилия',
  //     name: 'Имя',
  //     patronymic: 'Отчество',
  //     position: 'Специалист',
  //     email: 'somemail@mail.ru',
  //     phone: '+7 (39422) 2-25-45'
  //   },

  //   {
  //     surname: 'Фамилия',
  //     name: 'Имя',
  //     patronymic: 'Отчество',
  //     position: 'Специалист',
  //     email: 'somemail@mail.ru',
  //     phone: '+7 (39422) 2-25-45'
  //   },

  //   {
  //     surname: 'Фамилия',
  //     name: 'Имя',
  //     patronymic: 'Отчество',
  //     position: 'Специалист',
  //     email: 'somemail@mail.ru',
  //     phone: '+7 (39422) 2-25-45'
  //   },

  //   {
  //     surname: 'Фамилия',
  //     name: 'Имя',
  //     patronymic: 'Отчество',
  //     position: 'Специалист',
  //     email: 'somemail@mail.ru',
  //     phone: '+7 (39422) 2-25-45'
  //   },
    
  //   {
  //     surname: 'Фамилия',
  //     name: 'Имя',
  //     patronymic: 'Отчество',
  //     position: 'Специалист',
  //     email: 'somemail@mail.ru',
  //     phone: '+7 (39422) 2-25-45'
  //   },
  // ]

  const show = management.map((item) => {
    return <Card className="card">
      <Card.Header className="card-header">
        <Card.Title className="card-title">{item.position}</Card.Title>
      </Card.Header>
      <Card.Body className="card-body">
        <Image src='/person.jpg' width={216} height={286} />
        <ListGroup className="list-group">
          <Card.Text>{item.surname}</Card.Text>
          <Card.Text>{item.name}</Card.Text>
          <Card.Text>{item.patronymic}</Card.Text>
          <Card.Text>{item.email}</Card.Text>
          <Card.Text>{item.phone}</Card.Text>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="justify-content-end">
        <Button>Фото</Button>
      </Card.Footer>
    </Card>
  })

  return (
    <>
      <h1>Структура министерства</h1>
      <div>
        <Card className="card">
          <Card.Header className="card-header">
            <Card.Title className="card-title">Министр экономического развития и промышленности</Card.Title>
          </Card.Header>
          <Card.Body className="card-body">
            <Image src='/person.jpg' width={216} height={286} />
            <ListGroup className="list-group">
              <Card.Text>Сат</Card.Text>
              <Card.Text>Айдыс</Card.Text>
              <Card.Text>Александрович</Card.Text>
              <Card.Text>mineconom@rtyva.ru  </Card.Text>
              <Card.Text>+7 (394 22) 9-76-62</Card.Text>
            </ListGroup>
          </Card.Body>
          <Card.Footer className="justify-content-end">
            <Button>Фото</Button>
          </Card.Footer>
        </Card>


        <div className="headOf">
          {show}
        </div>
      </div>
    </>

  )
}