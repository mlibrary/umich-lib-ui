import React from 'react'
import {
  Heading,
  Text
} from '@umich-lib/core'
import CodeBlock from './CodeBlock'

const Heading2 = ({ children, ...other }) => (
  <Heading level={2} size="large" {...other}>{children}</Heading>
)
const Heading3 = ({ children, ...other }) => (
  <Heading level={3} size="medium" {...other}>{children}</Heading>
)
const Heading4 = ({ children, ...other }) => (
  <Heading level={4} size="small" {...other}>{children}</Heading>
)
const Heading5 = ({ children, ...other }) => (
  <Heading level={5} size="xsmall" {...other}>{children}</Heading>
)
const Heading6 = ({ children, ...other }) => (
  <Heading level={6} size="xsmall" {...other}>{children}</Heading>
)
const P = ({ children, ...other }) => (
  <Text {...other} style={{
    maxWidth: '32em'
  }}>{children}</Text>
)

export default {
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: P,
  code: CodeBlock
}