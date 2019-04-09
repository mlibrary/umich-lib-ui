import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import TableOfContents from '../components/table-of-contents'
import Heading from '../../../packages/heading'
import styled from '@emotion/styled'
import { COLORS, MEDIA_QUERIES } from '../../../packages/styles'

const StyledFooter = styled('footer')({
  margin: '2rem 0'
})

const StyledHeader = styled('header')({
  paddingTop: '2rem',
  background: COLORS.blue[100],
  borderBottom: `solid 1px ${COLORS.neutral[100]}`
})

const DocContainer = styled('div')({
  margin: '0 auto',
  padding: '0 1rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '0 3rem',
    maxWidth: '72rem',
    margin: '0 auto'
  }
})

const docTemplate = ({ data }) => {
  const { htmlAst } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { slug } = data.markdownRemark.fields

  return (
    <Layout>
      <article role="main" className="content y-spacing">
        <StyledHeader>
          <DocContainer>
            <Heading level={1} size="xlarge" style={{ marginTop: '0' }}>{title}</Heading>
          </DocContainer>
        </StyledHeader>

        <DocContainer className="y-spacing">
          <Markdown htmlAst={htmlAst} />
        </DocContainer>

        <StyledFooter>
          <DocContainer>
            <a href={`https://github.com/mlibrary/umich-lib-components-react/edit/master/www/docs/${slug}.md`}>Edit this page on Github</a>
          </DocContainer>
        </StyledFooter>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query DocBySlug($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`

export default docTemplate
