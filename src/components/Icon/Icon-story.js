import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, object } from '@storybook/addon-knobs';

import Icon from './Icon';

storiesOf('Icons', module)
  .add('Icon',
    withInfo(`
      Website header
    `)(() =>
      <Icon
        icon="check-circle"
        title="Search"
      />
    )
  )
