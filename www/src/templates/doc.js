import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import Heading from '../../../packages/heading'
import {
  colors,
} from '../../../packages/styles'
import styled from 'react-emotion'

const StyledFooter = styled('footer')({
  margin: '2rem 0'
})

const docTemplate = ({ data }) => {
  const { htmlAst } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { name } = data.markdownRemark.fields

  return (
    <Layout>
      <article>
        <header>
          <Heading level={1} size="xlarge" style={{ marginTop: '0' }}>{title}</Heading>
        </header>

        <div className="y-spacing">
          <Markdown htmlAst={htmlAst} />
        </div>

        <StyledFooter>
          <a href={`https://github.com/mlibrary/umich-lib-components-react/edit/master/www/docs/${name}.md`}>Edit this page on Github</a>
        </StyledFooter>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query DocByName($name: String!){
    markdownRemark(fields: { name: { eq: $name } }) {
      htmlAst
      frontmatter {
        title
      }
      fields {
        name
      }
    }
  }
`

export default docTemplate
