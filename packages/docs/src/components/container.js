import React from 'react'
import styled from '@emotion/styled'
import {
  SPACING,
  MEDIA_QUERIES
} from '@umich-lib/core'

const SideMargins = styled('div')({
  margin: '0 3%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    margin: '0 5%'
  }
})

const ContentMaxWidth = styled('div')({
  maxWidth: '1024px',
  margin: `0 ${SPACING['M']}`
})

export default ({ children }) => (
  <SideMargins>
    <ContentMaxWidth>
      {children}
    </ContentMaxWidth>
  </SideMargins>
)