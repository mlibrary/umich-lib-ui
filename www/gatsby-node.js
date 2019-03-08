const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ graphql, node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    /*
      Get the file name from the absolute path. I thought there might be
      a better way to get just the filename, but ended up with this.
    */
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const fileName = slug.split('/').filter(x => x !== "").pop()

    createNodeField({
      node,
      name: `slug`,
      value: fileName,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Create doc pages.
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const {
          slug
        } = node.fields
        const docTemplate = path.resolve(`./src/templates/doc.js`)
        createPage({
          path: `/${slug}/`,
          component: docTemplate,
          context: { slug },
        })
      })
      resolve()
    })
  })
}
