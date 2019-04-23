import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import GithubSlugger from 'github-slugger'
import {
  Heading,
  Text,
  COLORS,
  SPACING,
  List,
  TYPOGRAPHY
} from '@umich-lib/core'
import Code from './code'
import Table from './Table'

/*
  Attempted to use MDX Component Autolink Header,
  but it threw and error and wasn't sure how to
  make it work with @umich-lib/core Heading.

  So, for now, just adding the slug with github-slugger.

  This can be problematic if a page shares the same
  heading as this creates a new slugger each time
  a slug is created.

  Also, this lacks the hover on a heading and click
  for a link feature.
*/
function slug(item) {
  let slugger = new GithubSlugger()
  return slugger.slug(item)
}

const textMaxWidth = {
  maxWidth: '32rem'
}

const Heading2 = ({ children, ...other }) => (
  <Heading
    level={2}
    size="XL"
    id={slug(children)}
    style={{ marginTop: SPACING['2XL'] }}
    {...other}
  >{children}</Heading>
)
const Heading3 = ({ children, ...other }) => (
  <Heading
    level={3}
    size="M"
    id={slug(children)}
    style={{ marginTop: SPACING['XL'] }}
    {...other}
  >{children}</Heading>
)
const Heading4 = ({ children, ...other }) => (
  <Heading level={4} size="small" id={slug(children)} {...other}>{children}</Heading>
)
const Heading5 = ({ children, ...other }) => (
  <Heading level={5} size="xsmall" id={slug(children)} {...other}>{children}</Heading>
)
const Heading6 = ({ children, ...other }) => (
  <Heading level={6} size="xsmall" id={slug(children)} {...other}>{children}</Heading>
)
const P = ({ children, ...other }) => (
  <Text {...other} style={{
    ...textMaxWidth
  }}>{children}</Text>
)

const TableContainer = styled('div')({
  overflowX: 'auto'
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
  wrapper: ({ children }) => (
    <React.Fragment>{children}</React.Fragment>
  ),
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  code: Code,
  a: A,
  ul: props => <List type="bulleted" {...props} />,
  ol: props => <List type="numbered" {...props} />,
  table: (props) => <TableContainer><Table {...props} /></TableContainer>,
  em: EM,
  strong: (props) => <strong style={{ fontWeight: '800' }} {...props} />,
  blockquote: (props) => (
    <blockquote style={{
      fontStyle: 'italic',
      borderLeft: `solid 4px ${COLORS.maize[300]}`,
      background: COLORS.maize[100],
      padding: SPACING['L']
    }} {...props} />
  )
}