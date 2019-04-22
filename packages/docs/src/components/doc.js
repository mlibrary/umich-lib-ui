import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  Heading,
  COLORS,
  SPACING,
  MEDIA_QUERIES,
  TYPOGRAPHY
} from '@umich-lib/core'

import Layout from './layout'
import SEO from './seo'

const ContentContainer = styled('div')({
  maxWidth: '1024px',
  margin: `0 ${SPACING['M']}`
})

const XMargins = styled('div')({
  margin: '0 3%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    margin: '0 5%'
  }
})

const DocContainer = styled('div')({
  '> div > *:not(:last-child)': {
    marginBottom: SPACING['M']
  },
  'p, li, h1, h2, h3, h4, h5, h6': {
    maxWidth: '38rem'
  }
})

const DocHeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  height: 'auto',
  background: COLORS.blue[100],
  borderBottom: `solid 1px ${COLORS.neutral[100]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    height: '12rem'
  }
})

const activeStyle={
  borderBottom: `solid 4px ${COLORS.teal[400]}`,                  fontWeight: '800'
}

const isActive = ({
  isPartiallyCurrent, href, location
}) => {
  return ( isPartiallyCurrent && location.pathname.match(href + '/?$') )
    ? {style: activeStyle}
    : {}
}

const StyledNavLink = styled(Link)({
  color: COLORS.neutral[400],
  display: 'inline-block',
  padding: `${SPACING['XS']} 0`,
  textDecoration: 'none',
  ...TYPOGRAPHY['3XS'],
  fontWeight: '600'
})

const Doc = (props) => {
  const {
    title,
    navigation
  } = props.pageContext.frontmatter

  return (
    <Layout>
      <article>
        <SEO title={title} />
        <DocHeaderContainer>
          <XMargins>
            <ContentContainer>
              <Heading level={1} size="3XL" style={{
                paddingBottom: SPACING['M']
              }}>{title}</Heading>
              {navigation && (
                <ol>
                  {navigation.map(({text, to}) => (
                    <li
                      key={text + to}
                      style={{
                        display: 'inline-block',
                        marginRight: SPACING.L
                      }}
                    ><StyledNavLink
                      to={to}
                      getProps={isActive}
                    >{text}</StyledNavLink></li>
                  ))}
                </ol>
              )}
            </ContentContainer>
          </XMargins>
        </DocHeaderContainer>
        <XMargins>
          <ContentContainer
            style={{
              marginTop: SPACING['XL'],
              marginBottom: SPACING['2XL']
            }}
          >
            <DocContainer>
              {props.children}
            </DocContainer>
          </ContentContainer>
        </XMargins>
      </article>
    </Layout>
  )
}

export default Doc