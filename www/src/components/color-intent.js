import React from 'react'
import { intent_colors } from '../../../packages/styles';

export default () => (
  <article>
    <ol>
      {Object.keys(intent_colors).map((intent, s) => (
        <li
          key={s}
          style={{
            background: intent_colors[intent],
            padding: '0.5rem 1rem',
            fontWeight: '600',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 -1rem',
          }}
        >
          <span>{intent}</span><span>{intent_colors[intent]}</span>
        </li>
      ))}
    </ol>
  </article>
)