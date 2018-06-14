import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, number, object } from '@storybook/addon-knobs';

import RecordAccess from '../RecordAccess';

storiesOf('RecordAccess', module)
  .add('RecordAccess',
    withInfo(`
      Access
    `)(() =>
      <RecordAccess
        caption={text('Caption', 'Research Museums Center Birds Division')}
        headings={['Action', 'Description', 'Status', 'Call Number']}
        rows={object('Rows', [
          [
            { text: 'Get this', href: '#' },
            { text: 'v.3 2017' },
            { text: 'On shelf', status: 'success' },
            { text: 'N/A' }
          ],
          [
            { text: 'Get this', href: '#' },
            { text: 'v.2 2016' },
            { text: 'Checked out', status: 'warning' },
            { text: 'N/A' }
          ],
          [
            { text: 'Get this', href: '#' },
            { text: 'v.1 2015' },
            { text: 'Missing', status: 'error' },
            { text: 'N/A' }
          ]
        ])}
        name={text('Show all name', 'holdings')}
        count={boolean('Show more count', true)}
      />
    )
  )
