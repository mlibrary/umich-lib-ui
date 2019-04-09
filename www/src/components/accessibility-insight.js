import React from 'react'
import { COLORS } from '../../../packages/styles'

export default ({ children }) => (
  <p
    style={{
      borderLeft: 'solid 4px',
      borderLeftColor: COLORS.teal[300],
      padding: '1rem',
      margin: '1rem -1rem',
      background: COLORS.teal[100]
    }}
  ><b style={{ fontWeight: '700' }}><span role="img" aria-label="">⌨️</span> Accessibility:</b> {children}</p>
)