import React from "react"
import rehypeReact from "rehype-react"
import Heading from '../../../packages/heading'
import LiveCode from './livecode'
import { css } from 'emotion'
import styled from 'react-emotion'
import { colors } from '../../../packages/styles'

const cssText = css({
  maxWidth: '32em'
})

const StyledCode = styled('code')({
  display: 'inline-block',
  background: `${colors.brand.maze}`,
  backgroundColor: `hsla(48,100%,51%,0.3)`,
  padding: '0 0.25em',
  fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
  fontSize: '80%',
  borderRadius: '3px'
})

/**
  Headings
*/
const Heading2 = ({ children, ...other }) => (
  <Heading level={2} size="large" {...other}>{children}</Heading>
)
const Heading3 = ({ children, ...other }) => (
  <Heading level={3} size="medium" {...other}>{children}</Heading>
)
const Heading4 = ({ children, ...other }) => (
  <Heading level={4} size="small" {...other}>{children}</Heading>
)
const Heading5 = ({ children, ...other }) => (
  <Heading level={5} size="xsmall" {...other}>{children}</Heading>
)
const Heading6 = ({ children, ...other }) => (
  <Heading level={6} size="xsmall" {...other}>{children}</Heading>
)

const StyledUL = styled('ul')({
  listStyle: 'disc',
  marginLeft: '1.5rem',
  'li': {
    marginBottom: '0.5rem'
  }
})

const StyledOL = styled('ol')({
  listStyle: 'decimal',
  marginLeft: '1.5rem',
  'li': {
    marginBottom: '0.5rem'
  }
})

const renderAst = new rehypeReact({
  components: {
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
    p: ({children}) => <p className={cssText}>{children}</p>,
    'live-code': LiveCode,
    code: ({ children })  => <StyledCode>{children}</StyledCode>,
    ul: ({ children }) => <StyledUL>{children}</StyledUL>,
    ol: ({ children }) => <StyledOL>{children}</StyledOL>
  },

  // A workaround to replace the container div created by rehype-react with a React fragment.
  createElement: (component, props = {}, children = []) => {
    if (component === 'div') {
      return <React.Fragment {...props}>{children}</React.Fragment>;
    }

    return React.createElement(component, props, children);
  }
}).Compiler

export default ({ htmlAst }) => {
  return (
    <React.Fragment>
      {renderAst(htmlAst)}
    </React.Fragment>
  )
}
