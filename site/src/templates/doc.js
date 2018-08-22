import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import { Heading } from 'umich-lib-components-react'

export default ({ data }) => {
  const { htmlAst } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Heading level={1} size="xlarge">{title}</Heading>

      <Markdown htmlAst={htmlAst} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
