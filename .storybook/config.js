import React, { Component } from 'react';
import { configure, addDecorator } from '@storybook/react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

function loadStories() {
  const req = require.context('../src/components', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
