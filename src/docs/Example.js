import React from 'react';
import PropTypes from 'prop-types';
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import icons from '../components/Icon/icons'
import * as components from 'umich-lib-components-react'
import { Alert } from 'umich-lib-components-react'

class CodeEditor extends React.Component {
  state = {
    showEditor: false
  }

  render() {
    const { code, error } = this.props.live

    return (
      <div className="code">
        <div className="code__preview">
          <LivePreview />
        </div>
        <div className="code__editor">
          <LiveEditor />
        </div>
        {error && (
          <div className="code__error">
            <Alert intent="error" closeable={false}>
              <LiveError />
            </Alert>
          </div>
        )}
      </div>
    )
  }
}

const CodeEditorLive = withLive(CodeEditor)

class Example extends React.Component {
  render() {
    const { code } = this.props

    return (
      <LiveProvider code={code} scope={{...components, icons}} mountStylesheet={false}>
        <CodeEditorLive />
      </LiveProvider>
    )
  }
}

Example.propTypes = {
  code: PropTypes.string.isRequired
}

export default Example
