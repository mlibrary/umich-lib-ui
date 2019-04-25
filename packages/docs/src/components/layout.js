import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {MDXProvider} from '@mdx-js/tag'
import {
  GlobalStyleSheet,
  COLORS,
  SPACING,
  MEDIA_QUERIES,
  TYPOGRAPHY,
  UniversalHeader
} from '@umich-lib/core'
import components from './mdx-components'
import Logo from './logo'
import NavigationContent from './navigation.mdx'

const Root = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    minHeight: '100vh'
  }
})

const SiteWrapper = styled('div')({
  borderTop: `solid 2px ${COLORS.neutral[100]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex'
  }
})

const Side = styled('div')({
  background: COLORS.blue[100],
  padding: `${SPACING['XL']} 0`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    background: 'white',
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

/*
  A bunch of selectors to override
  MDX component styles.
*/
const SideNav = styled('nav')({
  padding: `0 3vw`,
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
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `0 ${SPACING['XL']}`
  }
})

const LogoContainer = styled('div')({
  marginBottom: SPACING['L'],
  padding: `0 3vw`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `0 ${SPACING['XL']}`
  }
})

const Layout = (props) => (
  <MDXProvider components={components}>
    <GlobalStyleSheet />
    <Root>
      <UniversalHeader />
      <SiteWrapper>
        <Main>
          {props.children}
        </Main>
        <Side>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <SideNav>
            <NavigationContent />
          </SideNav>
        </Side>
      </SiteWrapper>
    </Root>
  </MDXProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
