import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from 'styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import { Col, Container, Card, Image, NavDropdown, Row } from 'react-bootstrap';

import {getAllPosts} from 'lib/api'

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro'
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

export default function Home({blogs}) {
  //debugger
  return (
    <PageLayout>
      <AuthorIntro/>
      <hr/>
      <Row className="mb-5">
       {/* <Col md="10">
          <CardListItem />
        </Col>
        */}
        {
          blogs.map(blog =>
            // actually, we dont need key here*
            <Col md="4" key={blog.slug}>
              <CardItem
                title = {blog.title}
                subtitle = {blog.subtitle}
                image = {blog.coverImage}
                date = {blog._updatedAt}
                author = {blog.author}
                link = {{
                  href: '/[slug]',
                  as: `${blog.slug}`,
                }}
              />
            </Col>
          )
        }
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const blogs = await getAllPosts()
  return {
    props: {
     blogs,
    }
  }
}
