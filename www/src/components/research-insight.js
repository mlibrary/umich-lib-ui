import React from 'react'
import { COLORS } from '../../../packages/styles'

export default ({ children }) => (
  <p
    style={{
      borderLeft: 'solid 4px',
      borderLeftColor: COLORS.blue[300],
      padding: '0.5rem 1rem',
      margin: '1rem -1rem',
      background: COLORS.blue[100]
    }}
  ><b style={{ fontWeight: '700' }}><span role="img" aria-label="">💡</span> Research insight:</b> {children}</p>
)