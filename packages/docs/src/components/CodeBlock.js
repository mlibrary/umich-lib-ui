import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import * as core from '@umich-lib/core'
import {
  Alert,
  SPACING,
  COLORS
} from '@umich-lib/core'

const border_color = COLORS.neutral[100]

function CodeEditor({ live }) {
  return (
    <div style={{
      margin: `${SPACING['L']} 0`,
      borderLeft: `solid 1px ${border_color}`,
      borderRight: `solid 1px ${border_color}`,
      borderBottom: `solid 1px ${border_color}`
    }}>
      <div style={{
        padding: SPACING['L'],
        borderTop: `solid 1px ${border_color}`
      }}>
        <LivePreview />
      </div>
      <div style={{
        padding: SPACING['L'],
        borderTop: `solid 1px ${border_color}`
      }}>
        <LiveEditor ignoreTabKey={true} />
      </div>
      {live.error && (
        <Alert intent="error">
          <LiveError />
        </Alert>
      )}
    </div>
  )
}

const CodeEditorLive = withLive(CodeEditor)

export default ({children, className, live}) => {
  const language = className.replace(/language-/, '')

  if (live) {
    return (
      <div>
        <LiveProvider
          code={children.trim()}
          scope={{ ...core }}
          mountStylesheet={false}
        >
          <CodeEditorLive />
        </LiveProvider>
      </div>
    )
  }
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}