import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  Heading,
  COLORS,
  SPACING,
  MEDIA_QUERIES
} from '@umich-lib/core'

import Layout from './layout'

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
  'p,li, h1, h2, h3, h4, h5, h6': {
    maxWidth: '32rem'
  }
})

const Doc = (props) => {
  const {
    title,
    navigation
  } = props.pageContext.frontmatter

  return (
    <Layout>
      <article>
        <div style={{
          background: COLORS.blue[100],
          borderBottom: `solid 1px ${COLORS.neutral[100]}`,
          paddingTop: SPACING['L']
        }}>
          <XMargins>
            <ContentContainer>
              <Heading level={1} size="xlarge">{title}</Heading>
              {navigation && (
                <ol>
                  {navigation.map(({text, to}) => (
                    <li
                      key={text + to}
                      style={{
                        display: 'inline-block',
                        marginRight: SPACING.L
                      }}
                    ><Link
                      to={to}
                      style={{
                        color: COLORS.neutral[400],
                        display: 'inline-block',
                        padding: `${SPACING.XS} 0`,
                        textDecoration: 'none'
                      }}
                      activeStyle={{
                        borderBottom: `solid 4px ${COLORS.maize[400]}`,
                        fontWeight: '800'
                      }}
                    >{text}</Link></li>
                  ))}
                </ol>
              )}
            </ContentContainer>
          </XMargins>
        </div>
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