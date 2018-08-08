import React from 'react';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';
import MarkdownWithComponents from './MarkdownWithComponents.js'
import componentData from '../../config/componentData';

import {
  Heading,
  Alert
} from 'umich-lib-components-react'
import * as components from 'umich-lib-components-react'

const ComponentPage = ({ match }) => {
  const { componentName } = match.params
  const component = componentName ? componentData.filter(component => component.name === componentName)[0] : undefined;

  if (!component) {
    return null
  }

  const { name, description, props, examples, docs } = component;

  return (
    <div className="componentpage">
      <Heading level={1} size="xlarge">{name}</Heading>
      {
        description &&
        (
          <div className="component__description">
            <p>{description}</p>
          </div>
        )
      }

      <Heading level={2} size="medium">Example</Heading>
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

      {docs && (<MarkdownWithComponents md={docs} />)}
    </div>
  )
};

export default ComponentPage;
