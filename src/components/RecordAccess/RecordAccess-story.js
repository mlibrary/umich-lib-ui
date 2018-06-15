import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, number, object } from '@storybook/addon-knobs';

import RecordAccess from '../RecordAccess';

storiesOf('RecordAccess', module)
  .add('RecordAccess',
    withInfo(`
      To handle React Router Links with 'to' without coupling this component to that library.
    `)(() =>
      <RecordAccess
        caption={text('Caption', 'Research Museums Center Birds Division')}
        headings={['Action', 'Description', 'Status', 'Call Number']}
        rows={object('Rows', [
          [
            { text: 'Go to item', href: '#' },
            { text: 'v.3 2017' },
            { text: 'On shelf', status: 'success' },
            { text: 'N/A' }
          ],
          [
            { text: 'Get this', to: '#' },
            { text: 'v.2 2016' },
            { text: 'Checked out', status: 'warning' },
            { text: 'N/A' }
          ],
          [
            { text: 'Get this', to: '#' },
            { text: 'v.1 2015' },
            { text: 'Missing', status: 'error' },
            { text: 'N/A' }
          ]
        ])}
        renderAnchor={(data) => (
          <a className="rendered-prop-anchor-example" href={data.to}>{data.text}</a>
        )}
        name={text('Show all name', 'holdings')}
        count={boolean('Show more count', true)}
      />
    )
  )
