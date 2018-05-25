import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Header from './Header';

storiesOf('Headers', module)
  .add('Header',
    withInfo(`
      Website header
    `)(() =>
      <Header name="Site Name" url="#" />
    )
  )
