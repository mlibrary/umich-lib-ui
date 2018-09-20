import React from 'react';
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import styled from 'react-emotion'

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
import {
  colors
} from '../../../packages/styles'

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

const StyledCodeContainer = styled('div')({
  margin: '0 calc(-1rem + -1px)'
})

const StyledCodePreview = styled('div')({
  border: `solid 1px ${colors.grey[500]}`,
  marginBottom: '-1px'
})

class CodeEditor extends React.Component {
  state = {
    showEditor: false
  }

  render() {
    const { error } = this.props.live

    return (
      <StyledCodeContainer>
        <StyledCodePreview>
          <LivePreview style={{ padding: '1rem' }} />
        </StyledCodePreview>
        <div className="code__editor">
          <LiveEditor ignoreTabKey={true} />
        </div>
        {error && (
          <Alert intent="error">
            <LiveError />
          </Alert>
        )}
      </StyledCodeContainer>
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