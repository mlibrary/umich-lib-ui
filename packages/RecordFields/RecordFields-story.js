import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, number, object } from '@storybook/addon-knobs';

import RecordFields from '../RecordFields';

storiesOf('RecordFields', module)
  .add('Full',
    withInfo(`
      Full
    `)(() =>
      <RecordFields
        full={boolean("full", true)}
        fields={object('Fields', [
          {
            term: 'Published',
            description: [
              { text: '2012 - Carlton, Vic. : BirdLife Australia' }
            ]
          },
          {
            term: 'Contributors',
            description: [
              { text: 'BirdLife Australia.', to: '#',  }
            ]
          },
          {
            term: 'Previous Title',
            description: [
              { text: 'Wing span (Melbourne, Vic.)', to: '#' },
              { text: 'Bird observer (Hawthorn, Vic.)', to: '#' }
            ]
          },
          {
            term: 'Numbering',
            description: [
              { text: 'Began with Vol. 1, no. 1 (Mar. 2012).' }
            ]
          },
          {
            term: 'Source of Description Note',
            description: [
              { text: 'Description based on: Vol. 1, no. 1 (Mar. 2012); title from cover.' },
              { text: 'Latest issue consulted: Vol. 1, no. 3 (Sept. 2012).' }
            ]
          },
          {
            term: 'Academic Discipline',
            description: [
              [
                { text: 'Science', to: '#' },
                { text: 'Biology', to: '#' },
                { text: 'Zoology', to: '#' },
              ],
              [
                { text: 'Science', to: '#' },
                { text: 'Biology', to: '#' },
                { text: 'Ecology and Evolutionary Biology', to: '#' },
              ],
              [
                { text: 'International Studies', to: '#' },
                { text: 'Asian Studies', to: '#' },
                { text: 'Pacific/Australia/New Zealand Studies', to: '#' },
              ]
            ]
          }
        ])}
        renderAnchor={(data) => (
          <a className="rendered-prop-anchor-example" href={data.to}>{data.text}</a>
        )}
      />
    )
  )
  .add('Brief',
    withInfo(`
      Brief
    `)(() =>
      <RecordFields
        full={boolean("full", false)}
        fields={object('Fields', [
          {
            term: 'Published',
            description: [
              { text: '2012 - Carlton, Vic. : BirdLife Australia' }
            ]
          },
          {
            term: 'Contributors',
            description: [
              { text: 'BirdLife Australia.', to: '#',  }
            ]
          }
        ])}
        renderAnchor={(data) => (
          <a className="rendered-prop-anchor-example" href={data.to}>{data.text}</a>
        )}
      />
    )
  )
