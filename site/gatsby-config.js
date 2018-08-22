module.exports = {
  siteMetadata: {
    title: 'Design System | University of Michigan Library',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/../docs`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/../src/components`
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `./data/`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    }
  ],
}
