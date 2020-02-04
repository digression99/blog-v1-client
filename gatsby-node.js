/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

const getPostsQuery = `
{
  allStrapiPost {
    edges {
      node {
        id
        title
        content
        slug
      }
    }
  }
}
`

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const results = await graphql(getPostsQuery)

  results.data.allStrapiPost.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`src/templates/post.js`),
      context: {
        id: node.id,
        slug: node.slug,
      },
    })
  })
}
