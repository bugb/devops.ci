import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import { Col, Container, Card, Image, NavDropdown, Row } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro'

export default function Home() {
  return (
    <PageLayout>
      <AuthorIntro/>
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
    </PageLayout>
  )
}
