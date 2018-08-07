import React from 'react';

import {
  Heading,
  Alert
} from 'umich-lib-components-react'

const PatternsPage = () => (
  <div className="y-spacing">
    <Heading level="1" size="xlarge">Design your service using U-M Library patterns</Heading>

    <p className="lede">Use this design system to make your service consistent with other library services. Learn from the research and experience of other teams and avoid repeating work that has already been done.</p>

    <Alert intent="warning">This project is not published and is a work in progress.</Alert>
  </div>
)

export default PatternsPage;
