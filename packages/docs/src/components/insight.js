import React from 'react'
import {
  COLORS,
  SPACING
} from '@umich-lib/core'

function Insight({ kind, children }) {

  function renderHeading() {
    if (kind === 'research') {
      return (
        <React.Fragment>
          💡 <stong css={{
            fontWeight: '800'
          }}>Research insight: </stong>
        </React.Fragment>
      )
    } else if (kind === 'accessibility') {
      return (
        <React.Fragment>
          ⌨️ <stong css={{
            fontWeight: '800'
          }}>Accessibility insight: </stong>
        </React.Fragment>
      )
    }

    return null
  }

  return (
    <div css={{
      background: COLORS.maize['100'],
      border: `solid 1px ${COLORS.maize['200']}`,
      padding: SPACING['L'],
      maxWidth: '38rem'
    }}>
      {renderHeading()}
      {children}
    </div>
  )
}

export default Insight