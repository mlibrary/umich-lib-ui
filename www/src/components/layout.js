import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from 'sidenav'
import getSideNavData from '../../utils/get-side-nav-data'
import Header from '../../../packages/header'
import Alert from '../../../packages/alert'
import {
  SITE_WIDTH,
  MEDIA_QUERIES
} from '../../../packages/styles'
import "../scss/init.scss"
import styled from 'react-emotion'

const DocContainer = styled('div')({
  maxWidth: SITE_WIDTH,
  margin: '2rem auto',
  padding: '1rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'grid',
    gridColumnGap: '1rem',
    gridTemplateColumns: '12rem auto'
  }
})

const DocSide = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridColumnStart: '1',
    gridColumnEnd: '1'
  }
})

const DocMain = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridColumnStart: '2',
    gridColumnEnd: '2'
  }
})

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
        <Header name="Design System" />
        <Alert intent="informational">This project is in development and not recommended for production use.</Alert>
        <DocContainer>
          <DocSide>
            <SideNav data={getSideNavData(data)} />
          </DocSide>
          <DocMain>
            {children}
          </DocMain>
        </DocContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
