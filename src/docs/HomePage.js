import React from 'react';

import {
  Heading,
  Alert,
  Button
} from 'umich-lib-components-react'

import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const PatternsPage = () => (
  <div className="y-spacing">
    <Heading level={1} size="xlarge" className="text">Design your service using U-M Library styles, components, and patterns</Heading>

    <p className="lede text">Use this design system to make your service consistent with other library services. Learn from the research and experience of other teams and avoid repeating work that has already been done.</p>

    <Heading level={2} size="large" className="text">Try it out</Heading>

    <p className="text">Each component has examples to experiment and test. Go even further and launch an online sandbox code editor environment.</p>

    <Button href="https://codesandbox.io/s/8z337kk6r9">Launch code editor</Button>

    <Heading level={2} size="large" className="text">Install</Heading>

    <code className="code">npm install umich-lib-components-react</code>

    <a href="https://github.com/mlibrary/umich-lib-components-react">View more on GitHub</a>
  </div>
)

export default PatternsPage;
