import React from 'react';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

import {
  Heading,
  Alert
} from 'umich-lib-components-react'
import * as components from 'umich-lib-components-react'

const ComponentPage = ({component}) => {
  const {name, description, props, examples, docs} = component;

  /*
  // TODO: Include all components in Markdown
  markdownOptions = () => {
    return components.reduce((acc, comp) => {
      console.log('comp', Comp)

      return acc
    }, {})
  }
  */

  return (
    <div className="componentpage">
      <Heading level={1} size="xlarge">{name}</Heading>
      <p>{description}</p>

      {docs.map(md => (
        <Markdown
          children={md}
          className="y-spacing"
          options={{
            overrides: {
              'Button': {
                component: 'Button',
              },
            },
          }}
        />
      ))}

      {
        examples.length > 0 ?
        examples.map(example => <Example key={example.code} name={name} code={example.code} /> ) :
        "No examples exist."
      }

      <Heading level={2} size="large">Props</Heading>
      {
        props ?
        <Props props={props} /> :
        "This component accepts no props."
      }
    </div>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
