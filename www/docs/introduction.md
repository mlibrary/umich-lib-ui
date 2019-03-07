---
title: Introduction
---

<lede>The Design System is a bit like a branded lego kit for creating high quality user interfaces for the University of Michigan Library.</lede>

## Distributed as React components

The Design System is distributed as <gatsby-link to="/glossary/#react">React components</gatsby-link> and published on the NPM registry. This means to use the Design System in your project, you will need to understand and use React.

## But what about regular HTML, CSS, and JavaScript?

We’re so glad you’re interested, but it’s not here yet. <gatsby-link to="/design-system-team#contact-us">Get in touch</gatsby-link> if you’re interested to help us prioritize distributing the design system in other formats.

## Using styles

Styles make your service look and feel like a U-M Library service. The design system provides colors, typography, layout, iconography, and more.

## Using components

Components are reusable tangible parts of the user interface, such as a button, an icon, or something more involved like displaying record fields. Components can be composed just like HTML elements.

```jsx
// @live

<Button onClick={() => alert('Hello!')}><Icon icon="chat" /> Say hello</Button>

```

## Using patterns

Patterns are repeating, reusable parts of the interface that can be applied and repurposed to solve a specific design problem, meet a user need, or evoke an emotion, such as handling form errors or getting feedback.

This includes helping users fill out forms, handling errors and validation, and getting feedback from users.
