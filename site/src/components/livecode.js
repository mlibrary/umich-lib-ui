import React from 'react';
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import * as components from 'umich-lib-components-react'
import { Alert } from 'umich-lib-components-react'

class CodeEditor extends React.Component {
  state = {
    showEditor: false
  }

  render() {
    const { error } = this.props.live

    return (
      <div className="code">
        <div className="code__preview">
          <LivePreview />
        </div>
        <div className="code__editor">
          <LiveEditor ignoreTabKey={true} />
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

class LiveCode extends React.Component {
  render() {
    const { code } = this.props

    return (
      <LiveProvider code={code} scope={{...components}} mountStylesheet={false}>
        <CodeEditorLive />
      </LiveProvider>
    )
  }
}

export default LiveCode