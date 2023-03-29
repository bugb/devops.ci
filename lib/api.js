import sanityClient from './sanity'

const defaultFields = [
  "title",
  "subtitle",
  "slug",
  "_updatedAt",
  "'coverImage': coverImage.asset->url",
]
const blogFields = (fields = defaultFields) => fields.join(",\n")

async function getAllBlogs() {
  const result = await sanityClient.fetch(`*[_type == 'blog']{${blogFields()}}`)
  return result
}

export {
  getAllBlogs,
}
