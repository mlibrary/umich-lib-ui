import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';

import Alert from './Alert';

storiesOf('Alerts', module)
  .add('Alert',
    withInfo(`
      Configure
    `)(() =>
      <Alert intent={select('intent', ['informational', 'success', 'warning', 'error', 'none'])}>
        {text('text', 'This is an Alert message.')}
      </Alert>
    )
  )
