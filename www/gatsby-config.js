module.exports = {
  siteMetadata: {
    title: 'Design System | University of Michigan Library',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs`
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
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-live-code`
        ],
      },
    },
    `gatsby-plugin-emotion`
    
    /*
    // This doesn't work for some reason...
    // https://github.com/gatsbyjs/gatsby/issues/7543
    `gatsby-transformer-react-docgen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/../packages`
      },
    },
    */
  ],
}
