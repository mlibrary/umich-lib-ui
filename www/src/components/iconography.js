import React from 'react'
import { COLORS } from '../../../packages/styles';
import Icon, { icons } from '../../../packages/icon'

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
          height: '8rem',
          marginRight: '1rem',
        }}
      >
        <div style={{
          display: 'flex',
          padding: '1rem 2rem',
          background: COLORS.blue[100],
          alignItems: 'center',
          justifyContent: 'center'
        }}><Icon icon={i} size={24} /></div>
        <span style={{ fontWeight: '600' }}>{i}</span>
      </li>
    ))}
  </ul>
)