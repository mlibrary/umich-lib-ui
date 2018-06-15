import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, number, boolean, select } from '@storybook/addon-knobs';

import Expandable, { ExpandableChildren, ExpandableButton } from '../Expandable';

const items = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Cyan",
  "Blue",
  "Indigo",
  "Violet",
  "Purple",
  "Magenta",
  "Pink",
  "Brown",
  "White",
  "Gray",
  "Black"
]

storiesOf('Expandable', module)
  .add('Expandable',
    withInfo(`
      Expandable
    `)(() =>
      <Expandable>
        <ul>
          <ExpandableChildren
            show={number('Show initially', 3)}
          >
            {items.map((item, key) => <li key={key}>{item}</li>)}
          </ExpandableChildren>
        </ul>

        <ExpandableButton
          kind="tertiary"
          name={text('Show all name', 'colors')}
          count={number('Show all count', items.length)}
        />
      </Expandable>
    )
  )
