import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {MDXProvider} from '@mdx-js/tag'
import {
  GlobalStyleSheet,
  COLORS,
  SPACING,
  MEDIA_QUERIES,
  TYPOGRAPHY
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
  background: COLORS.blue[100],
  borderTop: `solid 2px ${COLORS.neutral[100]}`,
  padding: `${SPACING['XL']} 0`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    borderTop: 'none',
    background: 'white',
    padding: '0',
    display: 'block',
    minHeight: '100vh',
    minWidth: '280px',
    order: '-1',
    borderRight: `solid 2px ${COLORS.neutral[100]}`
  }
})

const Main = styled('main')({
  width: '100%'
})

const list_link_styles = {
  textDecoration: 'none',
  color: COLORS.neutral[400],
  ':hover': {
    boxShadow: `inset 0 -2px ${COLORS.teal[400]}`
  } 
}

const LargeScreenOnly = styled('div')({
  display: 'none',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block'
  }
})

const SmallScreenOnly = styled('div')({
  display: 'block',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none'
  }
})

const LogoContainer = styled('div')({
  background: COLORS.blue[100],
  'svg': {
    maxWidth: '10rem'
  }
})

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
    ...TYPOGRAPHY['3XS']
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
      <SmallScreenOnly>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </SmallScreenOnly>
      <Main>
        {props.children}
      </Main>
      <Side>
        <LargeScreenOnly>
          <Logo />
        </LargeScreenOnly>
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
