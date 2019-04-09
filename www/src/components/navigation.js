import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import {
  COLORS,
  SPACING,
  MEDIA_QUERIES
} from '../../../packages/core/src'
import MLibraryLogo from '../components/mlibrary-logo'

const LogoContainer = styled(Link)({
  display: 'block',
  padding: SPACING['L'],
  maxWidth: `calc(200px + ${SPACING['XL']} + ${SPACING['XL']})`
})

const SiteName = styled('span')({
  textTransform: 'uppercase',
  fontSize: '18px',
  letterSpacing: '4.5px',
  lineHeight: '24px',
  fontWeight: '600',
  color: COLORS.neutral[300]
})

const SectionNav = styled('nav')({
  gridArea: 'footer',
  'a': {
    textDecoration: 'none'
  },
  lineHeight: 2,
  borderTop: `solid 1px ${COLORS.neutral[100]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridArea: 'side',
    borderTop: 'none',
    borderRight: `solid 2px ${COLORS.neutral[100]}`
  },
})

const StyledNavHeading = styled('h2')({
  color: COLORS.neutral[300],
  textTransform: 'uppercase',
  fontWeight: '680',
  letterSpacing: '1.25px',
  fontSize: '14px',
  padding: `0 ${SPACING['L']}`,
})

const StyledNavLink = styled(Link)({
  display: 'block',
  '&:hover': {
    textDecoration: 'underline'
  },
  borderLeft: 'solid 4px transparent',
  padding: '0.4rem 1rem',
  color: `${COLORS.blue[400]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `0 ${SPACING['XL']}`,
  }
})

class NavSection extends React.Component {
  render() {
    const { title, items } = this.props

    return (
      <React.Fragment>
        <StyledNavHeading
          level={2}
          size="small"
        >{title}</StyledNavHeading>

        <ul style={{
          marginBottom: SPACING['L'],
        }}>
          {items.map((item, i) => (
            <li key={i}>
              <StyledNavLink
                to={item.to}
                activeStyle={{
                  fontWeight: '700',
                  borderLeft: `4px solid ${COLORS.maize[400]}`,
                  background: COLORS.maize[100]
                }}
              >
                {item.text}
              </StyledNavLink>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

const Navigation = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteNavQuery {
          allDocsYaml {
            edges {
              node {
                title
                items
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
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        /*
          Take the two queries and turn it into this shape:

          const nav = [
            {
              title: '...',
              items: [
                {
                  text: '...',
                  to: '...'
                }
              ]
            },
            ...
          ]
        */

        const docs = data.allMarkdownRemark.edges
        const nav = data.allDocsYaml.edges.reduce((acc, edge) => {
          const {
            title,
            items
          } = edge.node

          const itemsWithTo = items.reduce((pages, item) => {
            const doc = docs.find(doc => doc.node.fields.slug === item)

            if (doc) {
              pages = pages.concat({
                text: doc.node.frontmatter.title,
                to: `/${doc.node.fields.slug}`
              })
            }

            return pages
          }, [])

          if (itemsWithTo.length > 0) {
            acc = acc.concat({
              title,
              items: itemsWithTo
            })
          }

          return acc
        }, [])

        return (
          <SectionNav role="navigation" aria-label="side bar">
            <LogoContainer to="/" >
              <MLibraryLogo />
              <SiteName>Design System</SiteName>
            </LogoContainer>

            {nav.map((section, s) => (
              <NavSection key={s} title={section.title} items={section.items}  />
            ))}
          </SectionNav>
        )
      }}
    />
  )
}

export default Navigation
