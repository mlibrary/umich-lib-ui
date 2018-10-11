import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from './sidenav'
import getSideNavData from '../../utils/get-side-nav-data'
import Header from '../../../packages/header'
import Alert from '../../../packages/alert'
import {
  SITE_WIDTH,
  MEDIA_QUERIES
} from '../../../packages/styles'
import "../scss/init.scss"
import styled from 'react-emotion'
import favicon from '../../static/favicon.ico'

const DocContainer = styled('div')({
  maxWidth: SITE_WIDTH,
  margin: '0 auto',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'grid',
    height: '100vh',
    width: '100vw',
    gridTemplateColumns: '16rem auto',
    gridTemplateRows: 'max-content',
    gridTemplateAreas: `
      "header header"
      "side main"
    `
  }
})

const DocMain = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridArea: 'main',
    justifySelf: 'stretch'
  }
})

const DocMainContent = styled('div')({
  maxWidth: '38rem',
  margin: '0 auto',
  padding: '2rem 1rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '2rem'
  }
})

const StyledHeaderContainer = styled('div')({
  gridArea: 'header'
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
            {
              name: 'description',
              content: 'Design your service using U-M Library styles, components, and patterns.'
            }
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicon}`
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <DocContainer>
          <StyledHeaderContainer role="banner">
            <Header name="Design System" />
            <Alert intent="informational">This project is in development and not recommended for production use. Stay tuned for a beta release.</Alert>
          </StyledHeaderContainer>
          <DocMain>
            <DocMainContent>
              hello
              {children}
            </DocMainContent>
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
