import { Row, Col } from 'react-bootstrap'

import PageLayout from 'components/PageLayout'
import { getAllPosts, getPostBySlug } from 'lib/api'
import BlogHeader from 'components/BlogHeader'

const PostDetail = ({post: {title, subtitle, coverImage, _updatedAt, author: {name, avatar}}}) => {
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
          <hr/>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Col>
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
