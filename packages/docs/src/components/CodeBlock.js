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
import theme from './code_theme'

const border_color = COLORS.neutral['100']
const background_color = COLORS.neutral['000']

function CodeEditor({ live }) {
  return (
    <div style={{
      margin: `${SPACING['L']} 0`,
      borderLeft: `solid 1px ${border_color}`,
      borderRight: `solid 1px ${border_color}`,
      borderBottom: `solid 1px ${border_color}`,
      background: background_color,
      marginBottom: SPACING['L']
    }}>
      <div style={{
        padding: SPACING['L'],
        borderTop: `solid 1px ${border_color}`
      }}>
        <LivePreview />
      </div>
      <div style={{
        padding: `calc(${SPACING['L']} - 10px)`,
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
  const language = className ? className.replace(/language-/, '') : ''

  if (live) {
    return (
      <div>
        <LiveProvider
          code={children.trim()}
          scope={{ ...core }}
          theme={theme}
        >
          <CodeEditorLive />
        </LiveProvider>
      </div>
    )
  }
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={className}
          style={{
            padding: SPACING['L'],
            fontFamily: 'monospace',
            border: `solid 1px ${border_color}`,
            background: background_color,
            marginBottom: SPACING['L'],
            ...style
          }}
        >
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