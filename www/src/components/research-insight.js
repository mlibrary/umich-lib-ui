import React from 'react'
import { colors } from '../../../packages/styles'

export default ({ children }) => (
  <p
    style={{
      borderLeft: 'solid 4px',
      borderLeftColor: colors.blue[600],
      padding: '0.5rem 1rem',
      margin: '1rem -1rem',
      background: colors.blue[300]
    }}
  ><b style={{ fontWeight: '700' }}>💡 Research insight:</b> {children}</p>
)