const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    /*
      Get the file name from the absolute path. I thought there might be
      a better way to get just the filename, but ended up with this.
    */
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const name = slug.split('/').filter(x => x !== "").pop()

    createNodeField({
      node,
      name: `name`,
      value: name,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Create doc pages.
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSideNavPagesYaml {
          edges {
            node {
              page
              pages
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                name
              }
              htmlAst
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
     
      // Create Side Nav pages where markdown files exist.
      result.data.allSideNavPagesYaml.edges.forEach(({ node }) => {
        // Find the markdown that match the YAML page
        const remarkEdge = result.data.allMarkdownRemark.edges.find(remarkEdge => {
          return remarkEdge.node.fields.name === node.page
        })
        
        // Create section landing page
        if (remarkEdge) {
          createPage({
            path: `/${node.page}/`,
            component: path.resolve(`./src/templates/doc.js`),
            context: {
              name: node.page,
              pages: node.pages
            },
          })

          if (node.pages) {
            node.pages.forEach(page => {
              // Does the child pages exist.
              const remarkEdge = result.data.allMarkdownRemark.edges.find(remarkEdge => {
                return remarkEdge.node.fields.name === page
              })
  
              if (remarkEdge) {
                createPage({
                  path: `/${node.page}/${page}`,
                  component: path.resolve(`./src/templates/doc.js`),
                  context: {
                    name: page
                  },
                })
              }
            })
          }
        }
      })
      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'umich-lib-components-react': path.resolve(__dirname, '../src/components/')
      }
    },
  })
}
