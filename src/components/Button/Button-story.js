import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';

import Button from '../Button';

storiesOf('Button', module)
  .add('Button',
    withInfo(`
      Configure
    `)(() =>
      <Button
        kind={select('kind', ['primary', 'secondary', 'tertiary', 'start'], 'primary')}
        disabled={boolean('disabled', false)}
        small={boolean('small', false)}
        href={text('href', '')}
      >
        {text('Text', 'Button text')}
      </Button>
    )
  )
  .add('Small buttons',
    withInfo(`
      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most
      commonly found in tables. Small buttons should have three words or less.
    `)(() =>
      <div>
        <Button onClick={action('Button clicked')} kind="primary" small={true}>Primary</Button>
        &nbsp;
        <Button onClick={action('Button clicked')} kind="secondary" small={true}>Secondary</Button>
        &nbsp;
        <Button onClick={action('Button clicked')} kind="tertiary" small={true}>Tertiary</Button>
      </div>
    )
  )
