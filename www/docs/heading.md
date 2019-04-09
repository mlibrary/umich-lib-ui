---
title: Heading
---

<lede>Use `Heading` to create clear hierarchies and to make text content easy to scan and read. It is the core structure of any well designed interface.</lede>

<research-insight>
  The most important piece of information or action for the user should be in the headings. Users tend to scan a page instead of closely reading paragraph text.
</research-insight>

## Usage

Write all heading in sentence case.

```jsx
// @live
<Heading size="xlarge" level={1}>An extra large heading</Heading>
```

## Heading props

### Size

Use `size` to change the visual size of the heading.

```jsx
// @live
<div>
  <Heading size="xlarge" level={1}>An extra large heading</Heading>
  <Heading size="large" level={2}>A large heading</Heading>
  <Heading size="medium" level={3}>A medium heading</Heading>
  <Heading size="small" level={4}>A small heading</Heading>
  <Heading size="xsmall" level={5}>An extra small heading</Heading>
</div>

```

### Level

Use `level` to set the semantic heading level.

<accessibility-insight>
  Skipping heading levels can be confusing and should be avoided where possible.
</accessibility-insight>

```jsx
// @live
<Heading size="xsmall" level={2}>An extra small heading at level 2</Heading>
```