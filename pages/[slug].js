import {useRouter} from 'next/router'

import PageLayout from "components/PageLayout"

const PostDetail = () => {
  const {query: {slug}} = useRouter()
  return (
    <PageLayout>
      <h1>Hello {slug}</h1>
    </PageLayout>
  )
}

export default PostDetail
