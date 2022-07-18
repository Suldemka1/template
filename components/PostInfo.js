import Image from 'next/image'
import { Button, Card } from 'react-bootstrap'

const PostInfo = ({ post }) => {
  const { id, title, body } = post || {};

  if (!post) {
    return <h3>Empty post</h3>
  }

  return (
    <div className='news' key={id}>
        <Card >
          <Card.Body>
            <div className='img_container'>
              <Image alt='some' src={'/news_1.jpg'} layout='fill' className='image' />
            </div>
            <div className='news_content'>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {body}
              </Card.Text>
              <div className='news-tags'>
                <Button className='tag'>Tag 1</Button>
                <Button className='tag'>Tag 2</Button>
                <Button className='tag'>Tag 3</Button>
                <Button className='tag'>Tag 4</Button>
                <Button className='tag'>Tag 5</Button>
                <Button className='tag'>Tag 6</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
  );
}

export default PostInfo;