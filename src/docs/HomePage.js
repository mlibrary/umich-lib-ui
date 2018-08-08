import React from 'react';

import {
  Heading,
  Alert
} from 'umich-lib-components-react'

const PatternsPage = () => (
  <div className="y-spacing">
    <Heading level={1} size="xlarge" className="text">Design your service using U-M Library styles, components, and patterns</Heading>

    <p className="lede text">Use this design system to make your service consistent with other library services. Learn from the research and experience of other teams and avoid repeating work that has already been done.</p>

    <Heading level={2} size="large">Styles</Heading>
    <p className="text">The core styles that will make your service look and feel like a U-M Library service. This includes Color, Typography, and Layout.</p>

    <Heading level={2} size="large">Components</Heading>
    <p className="text">Re-usable parts of the user interface. From small form elements like Radio buttons to larger ones such as a Header.</p>

    <Heading level={2} size="large">Patterns</Heading>
    <p className="text">Best practice design solutions for specific user-focused tasks and scenarios such as handling form errors or getting feedback.</p>
  </div>
)

export default PatternsPage;
