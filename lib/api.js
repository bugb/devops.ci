import sanityClient from './sanity'

const defaultFields = [
  "title",
  "'author': author->{name, 'avatar': avatar.asset->url}",
  "subtitle",
  "slug",
  "_updatedAt",
  "'coverImage': coverImage.asset->url",
]
const blogFields = (fields = defaultFields) => fields.join(",\n")

async function getAllPosts() {
  const result = await sanityClient.fetch(`*[_type == 'blog']{${blogFields()}}`)
  return result
}

export {
  getAllPosts,
}
