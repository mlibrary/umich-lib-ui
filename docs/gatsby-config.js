const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Design System | University of Michigan Library',
    description:
      'Use this design system to make your service consistent with other library services. Learn from the research and experience of other teams and avoid repeating work that has already been done.',
    author: 'Jon Earley <earley@umich.edu>',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@umich-lib/core': path.resolve(__dirname, "../src/index")
        },
        extensions: ['js', 'mdx']
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          pages: path.resolve('./src/components/doc.js')
        }
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#F7F8F9',
        theme_color: '#FFCB05',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ],
}
