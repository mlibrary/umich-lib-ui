const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSideNavLinksYaml {
          edges {
            node {
              title
              items
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      // Create pages for each side nav link.
      result.data.allSideNavLinksYaml.edges.forEach(({ node }) => {
        node.items.forEach((itemName) => {
          const slug = `/${itemName}/`

          createPage({
            path: slug,
            component: path.resolve(`./src/templates/doc.js`),
            context: {
              slug: slug
            },
          })
        })
      })
      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'umich-lib-components-react': path.resolve(__dirname, '../src/components/')
      }
    },
  })
}
