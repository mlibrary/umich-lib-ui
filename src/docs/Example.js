import React from 'react';
import PropTypes from 'prop-types';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import * as components from 'umich-lib-components-react'

class Example extends React.Component {
  renderErrors = () => {
    const error = <LiveError />

    if (error) {
      return <components.Alert intent='error' closeable={false}>{error}</components.Alert>
    } else {
      return error
    }
  }

  render() {
    const { code, name } = this.props

    // mountStylesheet={false}

    return (
      <LiveProvider code={code} scope={{...components}} >
        <LivePreview />
        <LiveEditor ignoreTabKey={true} />
        {this.renderErrors()}
      </LiveProvider>
    )
  }
}

Example.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Example
