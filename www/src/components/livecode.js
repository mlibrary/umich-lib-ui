import React from 'react';
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import styled from '@emotion/styled'
import * as core from '../../../packages/core'
import {
  COLORS,
  Alert
} from '../../../packages/core'
import Component from '@reach/component-component'

const scope = {
  ...core,
  Component
}

const StyledCodeContainer = styled('div')({
  margin: '0 calc(-1rem + -1px)'
})

const StyledCodePreview = styled('div')({
  border: `solid 1px ${COLORS.grey[400]}`,
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
      <LiveProvider
        code={code}
        scope={{...scope}}
        mountStylesheet={false}
      >
        <CodeEditorLive />
      </LiveProvider>
    )
  }
}

export default LiveCode