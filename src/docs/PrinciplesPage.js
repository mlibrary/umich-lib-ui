import React from 'react';

import {
  Heading
} from 'umich-lib-components-react'

const PrinciplesPage = () => (
  <div className="y-spacing">
    <Heading level={1} size="xlarge" className="text">Principles</Heading>

    <p className="text lede">A set of principles underpins all our design decisions and guides us when we need to make hard choices. This criteria is what makes good design at U-M Library and all design patterns are evaluated against it.</p>

    <Heading level={2} size="large" className="text">1. Simple</Heading>

    <p className="text">Less is more. Prioritized direction over choice. Offer one thought-out optimal path to the member. In most situations, there is a best path, choice or solution. Do research and find out what it is. Do the hard work, so that our users don’t have to.</p>

    <Heading level={2} size="large" className="text">2. Robust</Heading>

    <p className="text">Anyone should be able to understand how our websites work without instruction. It's easy to undo and impossible to break. And when we say ‘anyone’ we mean it. The products and services we create should be accessible for all people, regardless of their mental or physical abilities.</p>

    <Heading level={2} size="large" className="text">3. Backed by research</Heading>

    <p className="text">There are many challenges to supporting research needs and engaging with the campus — but there are also many solutions. Understanding user needs is central. Our design, development, and content efforts should be based on what real users need — what they need to do, their obstacles, and their context. Decisions must be informed by this research.</p>
  </div>
)

export default PrinciplesPage;
