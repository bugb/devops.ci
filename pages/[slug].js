import { Row, Col } from 'react-bootstrap'

import PageLayout from 'components/PageLayout'
import { getAllPosts, getPostBySlug } from 'lib/api'
import BlogHeader from 'components/BlogHeader'
import BlogContent from 'components/BlogContent'

const PostDetail = ({post: {title, subtitle, coverImage, _updatedAt, author: {name, avatar}, content}}) => {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={title}
            subtitle={subtitle}
            coverImage={coverImage}
            name={name}
            avatar={avatar}
            updatedAt={_updatedAt}
          />
          <BlogContent content={content} />
        </Col>
        <hr/>
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps({params: {slug}}) {
  const post = await getPostBySlug(slug)
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts.map(({slug}) => ({ params: { slug }}))
  return  {
    paths,
    fallback: false,
  }
}
export default PostDetail
