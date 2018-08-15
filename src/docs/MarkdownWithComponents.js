import React from 'react';
import Markdown from 'markdown-to-jsx';
import * as components from 'umich-lib-components-react'
import {
  Heading
} from 'umich-lib-components-react'

const ExampleOverride = ({ children, ...props }) => {
  return (
    <div className="code__preview code__preview--without-editor">
      {children}
    </div>
  )
}

const defaultOverrides = {
  'h1': {
    component: Heading,
    props: {
      level: 1,
      size: 'xlarge',
      className: 'text'
    }
  },
  'h2': {
    component: Heading,
    props: {
      level: 3,
      size: 'medium',
      className: 'text'
    }
  },
  'h3': {
    component: Heading,
    props: {
      level: 3,
      size: 'medium',
      className: 'text'
    }
  },
  'h4': {
    component: Heading,
    props: {
      level: 4,
      size: 'small',
      className: 'text'
    }
  },
  'h5': {
    component: Heading,
    props: {
      level: 5,
      size: 'xsmall',
      className: 'text'
    }
  },
  'p': {
    props: {
      className: 'text'
    }
  },
  'ul': {
    props: {
      className: 'text'
    }
  },
  'ol': {
    props: {
      className: 'text'
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
