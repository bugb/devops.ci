import { Card } from 'react-bootstrap'
import Link from 'next/link'
const CardItem = ({title, subtitle, image, date, author: {name, avatar}, link}) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
          <img
            src={avatar}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/>
          <div>
            <Card.Title className="font-weight-bold mb-1">{name}</Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            src={image}
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>

      {/*use Link will be much faster than ahref*/}
      { link &&
        <Link {...link}>
          <span className="card-button">
            Read More
          </span>
        </Link>
      }
    </Card>
  )
}

export default CardItem
