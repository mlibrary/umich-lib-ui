import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import { Heading } from 'umich-lib-components-react'


const docTemplate = ({ data }) => {
  const { htmlAst } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { name } = data.markdownRemark.fields

  return (
    <Layout>
      <article>
        <header className="doc-header">
          <Heading level={1} size="xlarge">{title}</Heading>
        </header>

        <div className="y-spacing">
          <Markdown htmlAst={htmlAst} />
        </div>

        <footer className="doc-footer">
          <a href={`https://github.com/mlibrary/umich-lib-components-react/edit/master/docs/${name}.md`}>Edit on Github</a>
        </footer>
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
