import React from 'react'
import styled from '@emotion/styled'
import {
  MEDIA_QUERIES,
  COLORS
} from '@umich-lib/core'
import lightOrDark from '../utilities/light-or-dark'

const StyledContainer = styled('div')({
  [MEDIA_QUERIES.LARGESCREEN]: {
    columns: '3'
  }
})

const ColorPalette = ({ palette }) => (
  <section style={{
    breakInside: 'avoid'
  }}>
    <ol style={{
      display: 'block',
      marginBottom: '2rem'
    }}>
      {Object.keys(COLORS[palette]).map((shade, s) => (
        <li
          key={s}
          style={{
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
  <StyledContainer>
    {colors.map((palette, p) => (
      <ColorPalette palette={palette} p={p} />
    ))}
  </StyledContainer>
)