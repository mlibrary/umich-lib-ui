import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';

import Navigation from '../Navigation';

storiesOf('Navigation', module)
  .add('Navigation',
    withInfo(`
      Nav
    `)(() =>
      <Navigation items={[
        ['Section 1', 'section1'],
        ['Section 2', 'section2'],
        ['Section 3', 'section3']
      ]} />
    )
  )
