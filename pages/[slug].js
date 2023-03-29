import PageLayout from 'components/PageLayout'

import { getAllPosts, getPostBySlug } from 'lib/api'

const PostDetail = ({post}) => {
  return (
    <PageLayout>
      <h1>Hello {post.slug}</h1>
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
