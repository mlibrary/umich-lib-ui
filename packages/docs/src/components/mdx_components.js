import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  Heading,
  Text,
  COLORS,
  SPACING
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
    maxWidth: '32em',
    marginBottom: '1rem'
  }}>{children}</Text>
)

const TableContainer = styled('div')({
  overflowX: 'auto'
})

const Table = styled('table')({
  width: '100%',
  'th': {
    fontWeight: '800',
    textAlign: 'left'
  },
  'th, td': {
    padding: SPACING['M'],
    paddingLeft: '0',
    borderBottom: `solid 1px ${COLORS.neutral[100]}`,
  }
})

const EM = styled('em')({
  fontStyle: 'italic'
})

const activeLinkStyle = {
  /*fontWeight: '700'*/
}

const isActive = ({
  isPartiallyCurrent,
  href,
  location
}) => {
  return (isPartiallyCurrent && location.pathname.match(href + '/?$'))
    ? {style: activeLinkStyle}
    : {}
}

const A = ({ children, href, ...other }) => {
  /*
    The check if the href is an internal link.
  */
  if (href.startsWith('/')) {
    return (
      <Link
        to={href}
        {...other}
        getProps={isActive}
      >{children}</Link>
    )
  }

  return (
    <a href={href} {...other}>{children}</a>
  )
}

export default {
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: P,
  code: CodeBlock,
  a: A,
  table: (props) => <TableContainer><Table {...props} /></TableContainer>,
  em: EM
}