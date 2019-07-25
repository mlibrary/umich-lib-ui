import React from 'react'

import {
  COLORS,
  SPACING,
  MEDIA_QUERIES
} from '@umich-lib/core'

export function Dos({ children, ...rest }) {
  return (
    <ul
      css={{
        margin: `${SPACING['XL']} 0`,
        [MEDIA_QUERIES.LARGESCREEN]: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gridGap: SPACING['L']
        }
      }}
      {...rest}
    >
      {children}
    </ul>
  )
}

export function DoHeading({ dont, children }) {
  return (
    <p>
      <strong css={{
        color: dont ? COLORS.pink['500'] : COLORS.green['500'],
        fontWeight: '700'
      }}>Do{dont && "n't"}</strong> {children}
    </p>
  )
}

export function DoExample({ children, ySpacing }) {
  function ySpacingCSS() {
    if (ySpacing) {
      return {
        '> *:not(:last-child)': {
          marginRight: '0.75rem'
        }
      }
    }

    return {}
  }

  return (
    <div css={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: SPACING['XL'],
      marginBottom: SPACING['M'],
      ...ySpacingCSS()
    }}>
      {children}
    </div>
  )
}

export function Do({ dont, children}) {
  const topBorderColor = dont ? COLORS.pink['400'] : COLORS.green['400'] 
  return (
    <li css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: `solid 1px ${COLORS.neutral[100]}`,
      borderTop: `solid 6px ${topBorderColor}`,
      padding: SPACING['M'],
      paddingTop: SPACING['S'],
      marginBottom: SPACING['L']
    }}>
      {children}
    </li>
  )
}

export function DoYSpacing(props) {
  return (
    <div css={{
      display: 'inline-flex',
      '> *': {
        marginRight: '0.75rem',
      }
    }} {...props} />
  )
}