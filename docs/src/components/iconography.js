import React from 'react'
import {
  Icon,
  icons,
  COLORS
} from '@umich-lib/core'

export default () => (
  <ul style={{
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%'
  }}>
    {Object.keys(icons).map((i, k) => (
      <li
        key={k}
        style={{
          flex: '1 1 10rem',
          maxWidth: '10rem',
          marginBottom: '1.5rem',
          marginRight: '1rem',
        }}
      >
        <div style={{
          display: 'flex',
          padding: '1.5rem',
          background: COLORS.blue[100],
          alignItems: 'center',
          justifyContent: 'center'
        }}><Icon icon={i} size={24} /></div>
        <span style={{ fontWeight: '600' }}>{i}</span>
      </li>
    ))}
  </ul>
)