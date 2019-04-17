import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import mdx_components from './mdx_components'

export default (props) => {
  return (
    <MDXProvider components={mdx_components}>
      {props.children}
    </MDXProvider>
  )
}