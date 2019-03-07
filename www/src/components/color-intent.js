import React from 'react'
import { INTENT_COLORS } from '../../../packages/styles';

export default () => (
  <article>
    <ol>
      {Object.keys(INTENT_COLORS).map((intent, s) => (
        <li
          key={s}
          style={{
            background: INTENT_COLORS[intent],
            padding: '0.5rem 1rem',
            fontWeight: '600',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 -1rem',
          }}
        >
          <span>{intent}</span><span>{INTENT_COLORS[intent]}</span>
        </li>
      ))}
    </ol>
  </article>
)