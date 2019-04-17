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
import mdx_components from './mdx_components'
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

const SideNav = styled('nav')({
  padding: `0 ${SPACING['L']}`,
  'li': {
    padding: `${SPACING['2XS']} 0`
  },
  'ul ul': {
    marginLeft: SPACING['L']
  }
})

const Layout = (props) => (
  <MDXProvider components={mdx_components}>
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
