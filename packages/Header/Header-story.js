import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, object } from '@storybook/addon-knobs';

import Header from './Header';

storiesOf('Header', module)
  .add('Header',
    withInfo(`
      Website header
    `)(() =>
      <Header
        name={text('name', 'Site Name')}
        siteUrl={text('siteUrl', '#')}
        renderAnchor={(data) => (
          <a className="rendered-prop-anchor-example" href={data.to}>{data.text}</a>
        )}
        nav={object('nav', [
          { text: 'About', to: '/about' },
          { text: 'My Account', href: 'https://www.lib.umich.edu/my-account/' }
        ])}
      />
    )
  )
