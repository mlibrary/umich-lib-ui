import React from 'react';

import {
  Heading
} from 'umich-lib-components-react'

const AccessibilityPage = () => (
  <div className="y-spacing">
    <Heading size="xlarge" level={1}>Accessibility</Heading>

    <p className="text lede">Anyone should be able to understand how our websites work without instruction. The products and services we create should be accessible for all people, regardless of their mental or physical abilities.</p>

    <p className="text lede">Every component is compliant with <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 (A and AA)</a>.</p>
  </div>
)

export default AccessibilityPage
