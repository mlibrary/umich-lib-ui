import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, number, object } from '@storybook/addon-knobs';

import RecordFields from '../RecordFields';

storiesOf('RecordFields', module)
  .add('RecordFields',
    withInfo(`
      RecordFields
    `)(() =>
      <RecordFields
        fields={object('Fields', [
          {
            term: 'Previous Title',
            description: [
              'Wing span (Melbourne, Vic.)',
              'Bird observer (Hawthorn, Vic.)'
            ]
          },
          {
            term: 'Published',
            description: '2012 - Carlton, Vic. : BirdLife Australia'
          },
          {
            term: 'Numbering',
            description: 'Began with Vol. 1, no. 1 (Mar. 2012).'
          },
          {
            term: 'Source of Description Note',
            description: [
              'Description based on: Vol. 1, no. 1 (Mar. 2012); title from cover.',
              'Latest issue consulted: Vol. 1, no. 3 (Sept. 2012).'
            ]
          }
        ])}
      />
    )
  )
