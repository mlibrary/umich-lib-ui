import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import {
  COLORS,
  MEDIA_QUERIES,
  Heading
} from '../../../packages/core'

const SectionNav = styled('nav')({
  gridArea: 'footer',
  'a': {
    textDecoration: 'none'
  },
  padding: '1rem 0',
  background: `${COLORS.grey[100]}`,
  borderTop: `solid 1px ${COLORS.grey[400]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    gridArea: 'side',
    borderTop: 'none',
    borderLeft: `solid 1px ${COLORS.grey[400]}`
  },
})

const StyledNavHeading = styled(Heading)({
  padding: '0.2rem 1rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '0.2rem 2rem',
  }
})

const StyledNavLink = styled(Link)({
  display: 'block',
  '&:hover': {
    textDecoration: 'underline'
  },
  padding: '0.2rem 1rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '0.2rem 2rem',
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

        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <StyledNavLink
                to={item.to}
                activeStyle={{
                  fontWeight: '700',
                  borderLeft: `4px solid ${COLORS.blue[500]}`,
                  background: COLORS.grey[200]
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

const SideNav = ({ data }) => {
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
            {nav.map((section, s) => (
              <NavSection key={s} title={section.title} items={section.items}  />
            ))}
          </SectionNav>
        )
      }}
    />
  )
}

export default SideNav
