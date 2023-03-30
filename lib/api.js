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

async function getPostBySlug(slug) {
  // passing params to query
  const [post] = await sanityClient.fetch(`*[_type == 'blog' && slug == $slug]{${blogFields([
    ...defaultFields,
    "content[]{..., 'asset': asset->}",
  ])}}`, {slug})
  return post
}

export {
  getAllPosts,
  getPostBySlug,
}
