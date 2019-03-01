import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
var GithubSlugger = require('github-slugger')

// GitHubSlugger is used here since the plugin
// "gatsby-remark-autolink-headers" uses it also.
// and will match.
var slugger = new GithubSlugger()

const OL = styled('ol')({
  marginBottom: '1rem',
})

/*
  Render headings with depth of 2.

  TODO
  - Render nested by heading depth property.
*/
const TableOfContents = ({ headings }) => {
  slugger.reset()

  if (typeof window === 'undefined') {
    return null
  }
  
  return (
    <OL>
      {headings.map((h, i) => {
        if (h.depth === 2) {
          let to = document.location.pathname + '#' + slugger.slug(h.value)
          return (
            <li key={h.value + i}><Link to={to}>{h.value}</Link></li>
          )
        }

        return null
      })}
    </OL>
  )
}

// TODO
// - Add prop types to headings data.

export default TableOfContents