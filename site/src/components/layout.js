import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import { Header } from 'umich-lib-components-react'

import '../../../src/docs/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              htmlAst,
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header name="Design System" />
        <div className="docs">
          <ul className="docs__side-nav">
            {data.allMarkdownRemark.edges.map(({ node }, i) => (
              <li key={i}><Link to={node.fields.slug}>{ node.frontmatter.title }</Link></li>
            ))}
          </ul>
          <div className="docs__content">
            <div className="docs__content-inner y-spacing">
              {children}
            </div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
