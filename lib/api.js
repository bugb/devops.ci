import sanityClient from './sanity'

async function getAllBlogs() {
  const result = await sanityClient.fetch(`*[_type == 'blog']{title, subtitle, slug, _updatedAt}`)
  return result
}

export {
  getAllBlogs,
}
