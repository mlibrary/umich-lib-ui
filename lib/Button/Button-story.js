import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';

import Button from '../Button';

storiesOf('Buttons', module).add('Button', withInfo('\n      Configure\n    ')(function () {
  return React.createElement(
    Button,
    { kind: select('Kind', ['primary', 'secondary', 'tertiary'], 'primary'), disabled: boolean('Disabled', false), small: boolean('Small', false), href: text('href', '') },
    text('Text', 'Button text')
  );
})).add('Primary buttons', withInfo('\n      ~~~js\n      <Button>Primary button</Button>\n      ~~~\n\n      Use buttons to move though a transaction. Aim to use only one primary button per page.\n\n      Primary buttons should be used for the principle call to action\n      on the page. Modify the behavior of the button by changing its event properties.\n\n      The example below shows Primary Button component.\n    ')(function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'primary' },
      'Primary button'
    ),
    '\xA0',
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'primary', href: '#' },
      'Primary link'
    )
  );
})).add('Secondary buttons', withInfo('\n      Buttons are used to initialize an action, either in the background or foreground of an experience. Secondary buttons should be used for secondary actions on each page.\n\n      Modify the behavior of the button by changing its property events. The example below shows a Secondary Button component.\n    ')(function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'secondary' },
      'Secondary button'
    ),
    '\xA0',
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'secondary', href: '#' },
      'Secondary link'
    )
  );
})).add('Tertiary buttons', withInfo('\n      Tertiary buttons are best used for small UI interactions that don\'t require a strong presence on the page.\n    ')(function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'tertiary' },
      'Tertiary button'
    ),
    '\xA0',
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'tertiary', href: '#' },
      'Tertiary link'
    )
  );
})).add('Small buttons', withInfo('\n      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most\n      commonly found in tables. Small buttons should have three words or less.\n    ')(function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'primary', small: true },
      'Primary'
    ),
    '\xA0',
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'secondary', small: true },
      'Secondary'
    ),
    '\xA0',
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'tertiary', small: true },
      'Tertiary'
    )
  );
})).add('Start buttons', withInfo('\n      Use buttons to move though a transaction. Aim to use only one primary button per page.\n\n      Launch your service with a "Start now" button.\n    ')(function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'start' },
      'Start button'
    ),
    '\xA0',
    React.createElement(
      Button,
      { onClick: action('Button clicked'), kind: 'start', href: '#' },
      'Start link'
    )
  );
}));