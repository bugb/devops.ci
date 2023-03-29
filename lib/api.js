import sanityClient from './sanity'

const blogFields = (fields = ["title", "subtitle", "slug", "'updatedAt': _updatedAt"]) => fields.join(",\n")
console.log({a: blogFields()})

async function getAllBlogs() {
  const result = await sanityClient.fetch(`*[_type == 'blog']{${blogFields()}}`)
  return result
}

export {
  getAllBlogs,
}
