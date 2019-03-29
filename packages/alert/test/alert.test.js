import React from 'react';
import ReactDOM from "react-dom";
import Alert from '../src/index'

describe('Alert', () => {
  const root = document.createElement('div')

  it('should render without crashing', () => {
    ReactDOM.render(<Alert>Hello world!</Alert>, root)
  })
})