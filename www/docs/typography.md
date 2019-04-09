---
title: "Typography"
---

U-M Library’s Design System provides a constrained, purposeful set of typographic styles. Maintaining consistency with these styles ensures that elements in the UI are clear and easily recognizable when scanning the page. The text sizes, styles, and layouts were selected to balance content and UI and foster familiarity.

## Font

The design system uses the open-sourced typeface [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro).

## Line-height

Traditionally known as leading, is one of several factors that directly contribute to readability and pacing of copy. Line-heights are based on the size of the font itself.

## Line-length

Traditionally known as measure, is the number of characters in a single line. It also directly contributes to the readability and pacing of copy.

<research-insight>
  Lines that are too long degrade eye tracking from line to line, making it difficult to gauge which line to read next.
</research-insight>

Line-length should be between 52 and 78 characters.

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
