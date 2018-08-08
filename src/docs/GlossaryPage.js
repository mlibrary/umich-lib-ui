import React from 'react';

import {
  Heading
} from 'umich-lib-components-react'

const GlossaryPage = () => (
  <div className="y-spacing">
    <Heading level={1} size="xlarge" className="text">Glossary</Heading>

    <p className="text lede">What are we talking about here?</p>

    <Heading level={2} size="large">Components</Heading>
    <p className="text">Tangible building blocks of the interface, such as a button, a heading, or an icon.</p>

    <Heading level={2} size="large">Design System</Heading>
    <p className="text">A collection of shared design patterns for teams to build quality consistent interfaces. A bit like a LEGO kit.</p>

    <Heading level={2} size="large">Pattern library</Heading>
    <p className="text">A website where design patterns are stored and documented. Creating and maintaining a pattern library such as this one allows the whole team to use the shared design patterns to build products with.</p>

    <Heading level={2} size="large">Patterns</Heading>
    <p className="text">Repeating, reusable parts of the interface that can be applied and repurposed to solve a specific design problem, meet a user need, or evoke an emotion.</p>

    <Heading level={2} size="large">Styles</Heading>
    <p className="text">These are more descriptive and less tangible design patterns, such as iconography styles or colours and typography, typically used to create a certain kind of aesthetic</p>
  </div>
)

export default GlossaryPage;
