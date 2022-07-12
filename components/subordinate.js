import Image from "next/image";
import { Button, Card } from "react-bootstrap";

export default function Subordinate(params) {
  return (
    <div className="subordinate">
      <Card>
        <Card.Header>
          <Card.Title>{params.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="img_container">
            <Image src={params.image} layout="fill" className="image" />
          </div>

          <div className="sub-props">
            <Card.Text>Деятельность на 100 символов</Card.Text>
            <div>
              <Card.Text>{params.adress}</Card.Text>
              <Card.Text>Контактный телефон: {params.phone}</Card.Text>
              <Card.Text>Электронная почта: {params.email}</Card.Text>
              <Card.Text>social-media</Card.Text>
            </div>

          </div>
        </Card.Body>
        <Card.Footer><Button>Перейти на сайт</Button></Card.Footer>
      </Card>
    </div>
  )
}