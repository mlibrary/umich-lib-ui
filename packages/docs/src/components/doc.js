import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  Heading,
  COLORS,
  SPACING,
  MEDIA_QUERIES,
  TYPOGRAPHY,
  Margins
} from '@umich-lib/core'

import Layout from './layout'
import SEO from './seo'

const ContentContainer = styled('div')({
  maxWidth: '1024px'
})

const DocContainer = styled('div')({
  '> div > *:not(:last-child)': {
    marginBottom: SPACING['M']
  },
  'span, p, li, h1, h2, h3, h4, h5, h6': {
    wordBreak: 'break-word',
  },
  'li': {
    marginBottom: SPACING['S']
  },
  'img': {
    maxWidth: '100%'
  },
  'pre': {
    whiteSpace: 'normal'
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
          <Margins>
            <ContentContainer>
              <Heading level={1} size="3XL" style={{
                paddingBottom: SPACING['M'],
                marginTop: SPACING['XL']
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
          </Margins>
        </DocHeaderContainer>
        <Margins>
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
        </Margins>
      </article>
    </Layout>
  )
}

export default Doc