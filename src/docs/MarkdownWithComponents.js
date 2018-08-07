import React from 'react';
import Markdown from 'markdown-to-jsx';
import Example from './Example';
import * as components from 'umich-lib-components-react'
import {
  Heading
} from 'umich-lib-components-react'

const ExampleOverride = ({ children, ...props }) => {
  return (
    <Example code={`<Button kind="start">Start now</Button>`} />
  )
}

const defaultOverrides = {
  'h1': {
    component: Heading,
    props: {
      level: 1,
      size: 'xlarge'
    }
  },
  'h2': {
    component: Heading,
    props: {
      level: 2,
      size: 'large'
    }
  },
  'h3': {
    component: Heading,
    props: {
      level: 3,
      size: 'medium'
    }
  },
  'h4': {
    component: Heading,
    props: {
      level: 4,
      size: 'small'
    }
  },
  'h5': {
    component: Heading,
    props: {
      level: 5,
      size: 'xsmall'
    }
  },
  'Example': {
    component: ExampleOverride,
  }
}

const markdownOverrides = Object.keys(components).reduce((acc, key) => {
  return {
    ...acc,
    [key]: { component: components[key] }
  }
}, defaultOverrides)

const MarkdownWithComponents = ({ md }) => {
  console.log('md', md)

  return (
    <Markdown
      children={md}
      className="y-spacing"
      options={{
        overrides: markdownOverrides
      }}
    />
  )
}

export default MarkdownWithComponents
