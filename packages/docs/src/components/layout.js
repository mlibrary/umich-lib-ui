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
  UniversalHeader,
  LINK_STYLES
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
    borderRight: `solid 1px ${COLORS.neutral['100']}`
  }
})

const Main = styled('main')({
  width: '100%'
})

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
    ...TYPOGRAPHY['3XS']
  },
  'ul ul': {
    marginTop: SPACING['XS'],
    marginBottom: SPACING['L'],
    marginLeft: SPACING['M']
  },
  'li li': {
    textTransform: 'initial',
    fontWeight: '400',
    letterSpacing: '0',
    fontSize: '16px'
  },
  'a': {
    color: COLORS.neutral['400'],
    boxShadow: 'none'
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
