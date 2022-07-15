import Image from "next/image"
import { Card, ListGroup, Button } from "react-bootstrap"

export default function Person(params) {

  return (
    <div className='person'>
      <Card key={params.key}>
        <Card.Header>
          <Card.Title>{params.position}</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="img_container">
            <Image alt='some' src='/person.jpg' layout="fill" className="image" />
          </div>

          <ListGroup>
            <div>
              <Card.Text className="surname">{params.surname}</Card.Text>
              <Card.Text className="name">{params.name}</Card.Text>
              <Card.Text className="patronymic">{params.patronymic}</Card.Text>
            </div>
            <div>
              <Card.Text className="email">{params.email}</Card.Text>
              <Card.Text className="phone">{params.phone}</Card.Text>
            </div>

          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <Button>Фото</Button>
        </Card.Footer>
      </Card>
    </div>

  )
}