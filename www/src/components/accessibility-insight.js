import React from 'react'
import { COLORS } from '../../../packages/styles'

export default ({ children }) => (
  <p
    style={{
      borderLeft: 'solid 4px',
      borderLeftColor: COLORS.green[600],
      padding: '0.5rem 1rem',
      margin: '1rem -1rem',
      background: COLORS.green[400]
    }}
  ><b style={{ fontWeight: '700' }}><span role="img" aria-label="">⌨️</span> Accessibility:</b> {children}</p>
)