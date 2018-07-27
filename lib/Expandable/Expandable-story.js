import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, number, boolean, select } from '@storybook/addon-knobs';

import Expandable, { ExpandableChildren, ExpandableButton } from '../Expandable';

var items = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Pink", "Brown", "White", "Gray", "Black"];

storiesOf('Expandable', module).add('Show all', withInfo('\n      Expandable\n    ')(function () {
  return React.createElement(
    Expandable,
    null,
    React.createElement(
      'ul',
      null,
      React.createElement(
        ExpandableChildren,
        {
          show: number('Show initially', 3)
        },
        items.map(function (item, key) {
          return React.createElement(
            'li',
            { key: key },
            item
          );
        })
      )
    ),
    React.createElement(ExpandableButton, {
      kind: 'tertiary',
      name: text('Show all name', 'colors'),
      count: number('Show all count', items.length)
    })
  );
}));