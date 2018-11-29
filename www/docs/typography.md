---
title: "Typography"
---

Use typography to create clear hierarchies and to make text content easy to scan and read. It is the core structure of any well designed interface.

## Font

The design system uses the open-sourced typeface [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro).

## Headings

- use headings consistently to create a clear content hierarchy
- write all heading in sentence case

```jsx
// @live
<div>
  <Heading size="xlarge" level={1}>An extra large heading</Heading>
  <Heading size="large" level={2}>A large heading</Heading>
  <Heading size="medium" level={3}>A medium heading</Heading>
  <Heading size="small" level={4}>A small heading</Heading>
  <Heading size="xsmall" level={4}>An extra small heading</Heading>
</div>
```

Use `size` to adjust the visual size of the heading. Use `level` to set the semantic level of the heading.

<research-insight>
  The most important piece of information or action for the user should be in the headings. Users tend to scan a page instead of closely reading paragraph text.
</research-insight>

### Install Heading

```
npm install @umich-lib/heading --save
```

## Body text

- avoid using bold and italics
- use 19px for body copy and 16px for smaller screens.
- use smaller sizes only if there’s a user need

```jsx
// @live
<Text>A regular font sized body copy paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.</Text>
```

```jsx
// @live

<Text small>A small font sized supporting text paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.</Text>
```

### Install Text

```
npm install @umich-lib/text --save
```

## Links

Links within body copy should be blue and underlined.

```jsx
// @live
<a href="">A link without surrounding text</a>
```

Links without surrounding text should not have a full stop at the end.

```jsx
// @live
<Text>
  <a href="#">A body copy link</a> with surrounding text which shows the link in more context.
</Text>
```

- links must be unique and descriptive of their destination.
- avoid generic "view-more" type links.

## Lists

Bullet point list items start with a lowercase letter and have no full stop at the end.

```jsx
// @live
<List type="bulleted">
  <li>here is a bulleted list</li>
  <li>this is another item in the list</li>
  <li>and another item with a bit more text</li>
</List>
```

Use numbered steps instead of bullet points to guide a user through a process. Steps end in a full stop because each should be a complete sentence.

```jsx
// @live
<List type="numbered">
  <li>Understand that this is a numbered list.</li>
  <li>Follow the second step in this numbered list.</li>
  <li>Make sure each item is a full sentence ending with a full stop.</li>
</List>
```

Unstyled lists.

```jsx
// @live
<List>
  <li>here is a bulleted list</li>
  <li>this is another item in the list</li>
  <li>and another item with a bit more text</li>
</List>
```

### Install List

```
npm install @umich-lib/list --save
```

## Line-height

Traditionally known as leading, is one of several factors that directly contribute to readability and pacing of copy. Line-heights are based on the size of the font itself.

## Line-length

Traditionally known as measure, is the number of characters in a single line. It also directly contributes to the readability and pacing of copy.

<research-insight>
  Lines that are too long degrade eye tracking from line to line, making it difficult to gauge which line to read next.
</research-insight>

Line-length should be between 52 and 78 characters.