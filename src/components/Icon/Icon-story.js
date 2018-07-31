import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, object } from '@storybook/addon-knobs';

import Icon from './Icon';
import icons from './icons';


storiesOf('Icon', module)
  .add('All icons', () => (
    <ul className="margin-left-one margin-top-one">
      {Object.keys(icons).map(i => (
        <li className="margin-bottom-half"><Icon icon={i} size={24} className="margin-right-half"/>{i}</li>
      ))}
    </ul>
  ))
