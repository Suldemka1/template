import { Card, Button } from 'react-bootstrap'

export default function JobCard(params) {

  return (
    <div className='vacancy'>
      <Card>
        <Card.Header>
          <Card.Title>{params.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <div>
            <Card.Text>{params.department}</Card.Text>
            <Card.Text>{params.salary}</Card.Text>
            <Card.Text>{params.socialVaranty}</Card.Text>
          </div>

          <div>
            <Card.Text>Номер отдела кадров</Card.Text>
            <Card.Text>email отдела кадров</Card.Text>
          </div>
        </Card.Body>

        <Card.Footer>
          <Button variant='primary' onClick={ e => btnHandler(e.target.active)}>Отправить резюме</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}