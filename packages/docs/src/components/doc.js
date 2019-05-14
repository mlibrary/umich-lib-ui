import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'
import {
  Heading,
  COLORS,
  SPACING,
  TYPOGRAPHY,
  Margins,
  Link
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
  height: 'auto'
})

const activeStyle={
  borderBottom: `solid 4px ${COLORS.teal[400]}`,
  fontWeight: '800'
}

const isActive = ({
  isPartiallyCurrent, href, location
}) => {
  return ( isPartiallyCurrent && location.pathname.match(href + '/?$') )
    ? {style: activeStyle}
    : {}
}

const StyledNavLink = styled(GatsbyLink)({
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
  const { location } = props

  let github_path
  if (location.pathname) {
    github_path =
    'https://github.com/mlibrary/umich-lib-ui/tree/master/packages/docs/src/pages'
    + location.pathname.slice(0, -1)
    + '.mdx'
  }

  return (
    <Layout>
      <article>
        <SEO title={title} />
        <DocHeaderContainer>
          <Margins>
            <ContentContainer>
              <Heading level={1} size="3XL" style={{
                paddingBottom: SPACING['M'],
                marginTop: SPACING['2XL']
              }}>{title}</Heading>
              {navigation && (
                <ol css={{
                  borderBottom: `solid 1px ${COLORS.neutral[100]}`
                }}>
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

            {github_path && (
              <div style={{
                display: 'block',
                marginTop: SPACING['XL']
              }}>
                <Link href={github_path}>Edit this page on Github</Link>
              </div>
            )}
          </ContentContainer>
        </Margins>
      </article>
    </Layout>
  )
}

export default Doc