import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import { Col, Container, Card, Image, NavDropdown, Row } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <div className='blog-detail-page'>
        <Row>
          <Col md="8">
            {/* AUTHOR INTRO STARTS */}
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
            {/* AUTHOR INTRO ENDS */}
          </Col>
        </Row>
        <hr/>
        <Row className="mb-5">
          <Col md="10">
            {/* CardListItem STARTS */}
            <Card className={`fj-card fj-card-list`}>
              <div className="card-body-wrapper">
                <Card.Header
                  className="d-flex flex-row">
                  <img
                    src={'https://via.placeholder.com/150'}
                    className="rounded-circle mr-3"
                    height="50px"
                    width="50px"
                    alt="avatar"/>
                    <div>
                      <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                      <Card.Text className="card-date">Placeholder Date</Card.Text>
                    </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                  <Card.Text>Placehodler Subtitle</Card.Text>
                </Card.Body>
              </div>
              <a href="#" className="card-button">
                Read More
              </a>
            </Card>
            {/* CardListItem ENDS */}
          </Col>

          <Col md="4">
            <Card className={`fj-card`}>
              <div className="card-body-wrapper">
                <Card.Header
                  className="d-flex flex-row">
                  <img
                    src={'https://via.placeholder.com/150'}
                    className="rounded-circle mr-3"
                    height="50px"
                    width="50px"
                    alt="avatar"/>
                  <div>
                    <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                    <Card.Text className="card-date">Placeholder Date</Card.Text>
                  </div>
                </Card.Header>
                <div className="view overlay">
                  <Card.Img
                    src='https://via.placeholder.com/250'
                    alt="Card image cap"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                  <Card.Text>Placehodler Subtitle</Card.Text>
                </Card.Body>
              </div>
              <a className="card-button">
                Read More
              </a>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
