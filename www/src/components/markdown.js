import React from "react"
import rehypeReact from "rehype-react"
import Heading from '../../../packages/heading'
import LiveCode from './livecode'
import { css } from 'emotion'
import styled from 'react-emotion'
import { colors } from '../../../packages/styles'
import ColorPalette from './color-palette'
import ResearchInsight from './research-insight'
import Text from '../../../packages/text'
import List from '../../../packages/list'
import Iconography from './iconography'

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

const renderAst = new rehypeReact({
  components: {
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
    a: ({children, ...other}) => <a className={cssText} {...other}>{children}</a>,
    p: ({children}) => <p className={cssText}>{children}</p>,
    strong: ({children}) => <strong style={{ fontWeight: '600' }}>{children}</strong>,
    'live-code': LiveCode,
    code: ({ children })  => <StyledCode>{children}</StyledCode>,
    ul: ({ children }) => <List type="bulleted">{children}</List>,
    ol: ({ children }) => <List type="numbered">{children}</List>,
    'color-palette': ColorPalette,
    'research-insight': ResearchInsight,
    'text': Text,
    'iconography': Iconography
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
