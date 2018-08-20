import React from 'react';

import {
  Heading
} from 'umich-lib-components-react'

const GlossaryPage = () => (
  <div className="y-spacing">
    <Heading level={1} size="xlarge" className="text">Glossary</Heading>

    <p className="text lede">What are we talking about here?</p>

    <Heading level={2} size="large">Design System</Heading>

    <Heading level={3} size="small">Design System</Heading>
    <p className="text">A collection of shared design patterns for teams to build quality consistent interfaces. A bit like a LEGO kit.</p>

    <Heading level={3} size="small">Pattern library</Heading>
    <p className="text">A website where design patterns are stored and documented. Creating and maintaining a pattern library such as this one allows the whole team to use the shared design patterns to build products with.</p>

    <Heading level={3} size="small">Styles</Heading>
    <p className="text">These are more descriptive and less tangible design patterns, such as iconography styles or colors and typography, typically used to create a certain kind of aesthetic to make your service look and feel like a U-M Library website.</p>

    <Heading level={3} size="small">Components</Heading>
    <p className="text">Re-usable tangible parts of the user interface, such as a button, a heading, or an icon.</p>

    <Heading level={3} size="small">Patterns</Heading>
    <p className="text">Repeating, reusable parts of the interface that can be applied and repurposed to solve a specific design problem, meet a user need, or evoke an emotion, such as handling form errors or getting feedback.</p>

    <Heading level={2} size="large">Development</Heading>

    <Heading level={3} size="small">Branch</Heading>
    <p className="text">A branch starts as a snapshot of the current codebase and then diverges as the developer makes changes.</p>

    <p className="text">We create a branch when we start a new piece of work, and only apply it to the main codebase once it is complete.</p>

    <Heading level={3} size="small">Component</Heading>
    <p className="text">A component is a highly loaded term in development, it can mean a React Component and sometimes is used to refer to a piece of functionality/tool.</p>
    
    <Heading level={3} size="small">Git</Heading>
    <p className="text">Git is at the core of how we do collaborative development. It's a version control system tool which allows us to work on the same codebases in a safe and fairly easy way.</p>

    <Heading level={3} size="small">GitHub</Heading>
    <p className="text">Github is an all-in-one platform for collaborative development. It hosts our git repos and provides a mechanism for peer review.</p>

    <Heading level={3} size="small">Master</Heading>
    <p className="text">Development teams use of git works where developers work on topic branchs (generally a copy of the master branch at the time work starts) and only once work has been completed (including testing) the work is applied to master branch.</p>

    <p className="text">When work is applied to the master branch, actions are generally triggered, depending on the project. These actions include things like deploying the work to the staging sites, releasing a new version of a package, and publishing the pattern library.</p>

    <Heading level={3} size="small">Merge</Heading>
    <p className="text">While merging can refer to merging between any branches, generally when developers talk about merging they are discussing merging to the master branch.</p>

    <Heading level={3} size="small">Props</Heading>
    <p className="text">Similar to HTML attributes. React components take inputs (called "props") and return React elements describing what should appear on the screen.</p>

    <Heading level={3} size="small">Pull request / PR</Heading>
    <p className="text">Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.</p>

    <Heading level={3} size="small">React</Heading>
    <p className="text">A JavaScript library for building component-based user interfaces. It is used as the foundation to building components for this design system.</p>

    <Heading level={3} size="small">Repo / repository</Heading>
    <p className="text">A single project in git is called a repository and often abbreviated as repo by developers.</p>


  </div>
)

export default GlossaryPage;
