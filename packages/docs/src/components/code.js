import React from 'react'
import { jsx } from '@emotion/core'
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
import theme from './code-theme'
import VisuallyHidden from '@reach/visually-hidden'

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
      <CodeWindow
        css={{
          whiteSpace: 'normal'
        }}
      >
        <div css={{ padding: SPACING['M'] }}>
          <LivePreview />
        </div>
      </CodeWindow>
      <CodeWindow label="Live JSX editor">
        <LiveEditor ignoreTabKey={true} />
      </CodeWindow>
      {live.error && (
        <Alert intent="error">
          <LiveError />
        </Alert>
      )}
    </div>
  )
}

function CodeWindow({ label, children, ...rest }) {
  return (
    <div css={{
      position: 'relative',
      borderTop: `solid 1px ${COLORS.neutral['100']}`,
    }} {...rest}>
      <label><span css={{
        position: 'absolute',
        right: '0',
        border: `solid 1px ${COLORS.neutral['100']}`,
        borderTop: '0',
        borderRight: '0',
        padding: `0 ${SPACING['XS']}`,
        background: COLORS.blue['100'],
        borderRadius: `0 0 0 2px`,
        zIndex: '1',
        lineHeight: '1.2',
        fontSize: '0.9rem'
      }}>{label}</span>
        {children}
      </label>
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
          scope={{ jsx, ...core }}
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
            padding: SPACING['M'],
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