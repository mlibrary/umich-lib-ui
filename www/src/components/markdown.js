import React from "react"
import rehypeReact from "rehype-react"
import Heading from '../../../packages/heading'
import LiveCode from './livecode'
import { css } from 'emotion'
import styled from 'react-emotion'
import { colors } from '../../../packages/styles'
import ColorPalette from './color-palette'
import ColorIntent from './color-intent'
import ResearchInsight from './research-insight'
import AccessibilityInsight from './accessibility-insight'
import Text from '../../../packages/text'
import List from '../../../packages/list'
import Iconography from './iconography'
import { Link } from 'gatsby'

const StyledPre = styled('pre')({
  display: 'block',
  background: colors.grey[100],
  border: `solid 1px ${colors.grey[400]}`,
  padding: '1rem',
  margin: '0 -1rem',
  'code': {
    background: 'none',
    padding: '0'
  }
})

const StyledCode = styled('code')({
  display: 'inline-block',
  background: colors.grey[200],
  borderRadius: '3px',
  padding: '0 0.25rem',
  fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
  fontSize: '80%',
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

const renderAst = new rehypeReact({
  components: {
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
    a: ({children, ...other}) => <a {...other}>{children}</a>,
    p: ({children}) => <Text>{children}</Text>,
    strong: ({children}) => <strong style={{ fontWeight: '600' }}>{children}</strong>,
    'live-code': LiveCode,
    code: ({ children })  => <StyledCode>{children}</StyledCode>,
    ul: ({ children }) => <List type="bulleted">{children}</List>,
    ol: ({ children }) => <List type="numbered">{children}</List>,
    pre: StyledPre,
    'color-palette': ColorPalette,
    'research-insight': ResearchInsight,
    'accessibility-insight': AccessibilityInsight,
    'text': Text,
    'iconography': Iconography,
    'gatsby-link': ({ to, children }) => <Link to={to}>{children}</Link>,
    'color-intent': ColorIntent
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
