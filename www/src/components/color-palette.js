import React from 'react'
import { COLORS } from '../../../packages/styles';
import Heading from '../../../packages/heading'

const ColorPalette = ({ palette }) => (
  <section>
    <Heading level={3} size="medium">{palette}</Heading>
    <ol>
      {Object.keys(COLORS[palette]).map((shade, s) => (
        <li
          key={s}
          style={{
            background: COLORS[palette][shade],
            padding: '0.5rem 1rem',
            fontWeight: '600',
            color: shade > 400 || shade === 'blue' ? 'white' : '',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 -1rem',
          }}
        >
          <span>{shade}</span><span>{COLORS[palette][shade]}</span>
        </li>
      ))}
    </ol>
  </section>
)

export default () => (
  <article>
    {Object.keys(COLORS).map((palette, p) => (
      <ColorPalette palette={palette} key={p} />
    ))}
  </article>
)