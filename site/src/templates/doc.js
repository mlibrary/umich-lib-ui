import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import { Heading } from 'umich-lib-components-react'

const docTemplate = ({ doc }) => {
  console.log('doc', doc)

  if (!doc) { // temp
    return (
      <Layout>
        <Heading level={1} size="xlarge">No doc found</Heading>
        <p>Does the markdown file exist?</p>
      </Layout>
    )
  }

  const { htmlAst } = doc.markdownRemark
  const { title } = doc.markdownRemark.frontmatter

  return (
    <Layout>
      <Heading level={1} size="xlarge">{title}</Heading>

      <Markdown htmlAst={htmlAst} />
    </Layout>
  )
}

export const query = graphql`
  query DocBySlug($slug: String!){
    doc: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

export default docTemplate
