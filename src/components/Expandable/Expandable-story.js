import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';

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
  .add('Show all',
    withInfo(`
      Expandable
    `)(() =>
      <Expandable>
        <ul>
          <ExpandableChildren show={4}>
            {items.map((item, key) => <li key={key}>{item}</li>)}
          </ExpandableChildren>
        </ul>

        <ExpandableButton kind="tertiary" />
      </Expandable>
    )
  )
