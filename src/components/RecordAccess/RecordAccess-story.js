import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';

import RecordAccess from '../RecordAccess';

const data = [
  {
    heading: 'Online resources',
    link: {
      label: 'About location',
      href: 'http://www.lib.umich.edu/location/buhr-remote-shelving-facility/unit/45'
    },
    headings: [
      'Action',
      'Description',
      'Status',
      'Call Number'
    ],
    rows: [
      [
        {
          kind: 'link',
          link: {
            label: 'Go to item',
            href: '/'
          }
        },
        {
          kind: 'text',
          value: 'desc placeholder'
        },
        {
          kind: 'icon-with-text',
          link: {
            label: '',
            href: '/'
          }
        },
        {
          kind: 'text',
          value: '123'
        }
      ]
    ]
  }
]

storiesOf('RecordAccess', module)
  .add('RecordAccess',
    withInfo(`
      Access
    `)(() =>
      <RecordAccess data={data} />
    )
  )
