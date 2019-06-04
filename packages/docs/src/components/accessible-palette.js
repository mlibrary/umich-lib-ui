import React from 'react'
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  MEDIA_QUERIES
} from '@umich-lib/core'
import lightOrDark from '../utilities/light-or-dark'
const wcag = require('wcag-contrast')

function TextContrast({ foreground, background }) {
  const ratio = wcag.hex(foreground, background)

  return (
    <React.Fragment>
      {ratio >= 4.5 && (
        <span css={{
          color: foreground,
          paddingRight: SPACING['2XS']
        }}>A</span>
      )}
      {ratio >= 3 && (
        <span css={{
          color: foreground,
          ...TYPOGRAPHY['S']
        }}>A</span>
      )}
    </React.Fragment>
  )
}

export default function AccessiblePalette() {
  return (
    <div css={{
      [MEDIA_QUERIES.LARGESCREEN]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(400px, 1fr))',
        gridGap: SPACING['XL']
      }
    }}>
      {Object.keys(COLORS).map(palette => (
        <table
          key={palette}
          css={{
            display: 'block',
            tableLayout: 'fixed',
            breakInside: 'avoid'
          }}
        >
          <tbody>
            {Object.keys(COLORS[palette]).map((shade, s) => (
              <tr
                key={s}
                css={{
                  'td': {
                    background: COLORS[palette][shade],
                    color: lightOrDark(COLORS[palette][shade]) === 'dark' ? 'white' : 'inherit',
                    padding: '0.75rem 1rem'
                  }
                }}
              >
                <td css={{ fontWeight: '800', width: '100%' }}>{palette}-{shade}</td>
                {[
                  COLORS.neutral['400'],
                  COLORS.neutral['300'],
                  '#FFFFFF'
                ].map((color, i) => (
                  <td key={color + i} css={{ whiteSpace: 'nowrap' }}><TextContrast foreground={color} background={COLORS[palette][shade]} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  )
}