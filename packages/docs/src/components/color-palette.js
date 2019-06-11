import React from 'react'
import {
  MEDIA_QUERIES,
  COLORS,
  SPACING
} from '@umich-lib/core'
import lightOrDark from '../utilities/light-or-dark'

const ColorPalette = ({ palette }) => (
  <section css={{
    breakInside: 'avoid'
  }}>
    <ol css={{
      display: 'block',
      marginBottom: '2rem',
      [MEDIA_QUERIES.LARGESCREEN]: {
        marginBottom: '0'
      }
    }}>
      {Object.keys(COLORS[palette]).map((shade, s) => (
        <li
          key={s}
          css={{
            background: COLORS[palette][shade],
            color: lightOrDark(COLORS[palette][shade]) === 'dark' ? 'white' : 'inherit',
            width: '100%',
            maxWidth: '100%',
            padding: '0.75rem 1rem',
            fontWeight: '600',
            display: 'flex',
            marginBottom: '0',
            justifyContent: 'space-between',
          }}
        >
          <span>{palette}-{shade}</span><span>{COLORS[palette][shade]}</span>
        </li>
      ))}
    </ol>
  </section>
)

export default ({ colors }) => (
  <div css={{
    [MEDIA_QUERIES.LARGESCREEN]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(220px, 1fr))',
      gridGap: SPACING['L']
    }
  }}>
    {colors.map((palette, p) => (
      <ColorPalette palette={palette} p={p} />
    ))}
  </div>
)