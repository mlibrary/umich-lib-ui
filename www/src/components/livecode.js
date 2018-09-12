import React from 'react';
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


import Alert from '../../../packages/alert'
import Button from '../../../packages/button'
import Chat from '../../../packages/chat'
import {
  Expandable,
  ExpandableChildren,
  ExpandableButton
} from '../../../packages/expandable'
import Header from '../../../packages/header'
import Heading from '../../../packages/heading'
import Icon, { icons } from '../../../packages/icon'
import ResourceAccess from '../../../packages/resource-access'
import RecordFields from '../../../packages/record-fields'
import TextInput from '../../../packages/text-input'

const scope = {
  Alert,
  Button,
  Chat,
  Expandable,
  ExpandableChildren,
  ExpandableButton,
  Header,
  Heading,
  Icon,
  icons,
  ResourceAccess,
  RecordFields,
  TextInput
}

class CodeEditor extends React.Component {
  state = {
    showEditor: false
  }

  render() {
    const { error } = this.props.live

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

const CodeEditorLive = withLive(CodeEditor)

class LiveCode extends React.Component {
  render() {
    const { code } = this.props

    return (
      <LiveProvider code={code} scope={{...scope}} mountStylesheet={false}>
        <CodeEditorLive />
      </LiveProvider>
    )
  }
}

export default LiveCode