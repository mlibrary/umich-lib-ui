import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from 'sidenav'
import getSideNavData from '../../utils/get-side-nav-data'
import Header from '../../../packages/header'
import Alert from '../../../packages/alert'
import {
  SITE_WIDTH
} from '../../../packages/styles'
import "../scss/init.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
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
        <div className="docs-header-container">
          <Header name="Design System" />
          <Alert intent="informational">This project is in development and not recommended for production use.</Alert>
        </div>
        <div style={{
          width: SITE_WIDTH,
          margin: '0 auto',
          padding: '0 1rem'
        }} className="docs--large-screens">
          <SideNav data={getSideNavData(data)} />
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
