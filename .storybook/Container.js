import React, { Component } from 'react';
import '../src/globals/scss/styles.css'

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div>
        {story()}
      </div>
    );
  }
}
