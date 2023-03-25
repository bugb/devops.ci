import { Row, Col, Card, Image } from 'react-bootstrap'

const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        <Card className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="/static/images/me.jpeg"
            alt="Generic placeholder"
          />
          <Card.Body>
            <h5 className="font-weight-bold mb-0">Welcome to devops.ci,</h5>
            <p className="welcome-text">
            My name is Chau Giang. I write tips and tricks for effective Devops engineers: cloud computing (mostly on AWS), shell, code snippets/templates, logging, monitoring, CI/CD and other cool ideas/stuffs..
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default AuthorIntro
