import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {MDXProvider} from '@mdx-js/tag'
import {
  GlobalStyleSheet,
  COLORS,
  SPACING,
  MEDIA_QUERIES,
} from '@umich-lib/core'
import components from './mdx-components'
import Logo from './logo'
import NavigationContent from './navigation.mdx'

const Root = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    minHeight: '100vh'
  }
})

const Side = styled('div')({
  display: 'block',
  minHeight: '100vh',
  minWidth: '250px',
  order: '-1',
  borderRight: `solid 2px ${COLORS.neutral[100]}`
})

const Main = styled('main')({
  width: '100%'
})

const list_link_styles = {
  textDecoration: 'none',
  color: COLORS.neutral[400],
  ':hover': {
    boxShadow: `inset 0 -2px ${COLORS.teal[300]}`
  } 
}

/*
  A bunch of selectors to override
  MDX component styles.
*/
const SideNav = styled('nav')({
  padding: `0 ${SPACING['L']}`,
  'ul': {
    listStyle: 'none',
    marginLeft: '0',
    marginBottom: SPACING['XS']
  },
  'li': {
    padding: `${SPACING['2XS']} 0`,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: '1.25px',
    color: COLORS.neutral[300],
    fontSize: '14px',
  },
  'ul ul': {
    marginLeft: SPACING['M']
  },
  'a': list_link_styles,
  'li li': {
    textTransform: 'initial',
    fontWeight: '400',
    letterSpacing: '0',
    fontSize: '16px'
  }
})

const Layout = (props) => (
  <MDXProvider components={components}>
    <GlobalStyleSheet />
    <Root>
      <Main>
        {props.children}
      </Main>
      <Side>
        <Logo />
        <SideNav>
          <NavigationContent />
        </SideNav>
      </Side>
    </Root>
  </MDXProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
