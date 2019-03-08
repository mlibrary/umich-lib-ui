---
title: Icon
---

<lede>Use `Icon` to render SVG icons.</lede>

## Usage

```jsx
// @live
<Icon icon="check_circle" />
```

## Icon props

### Size

Adjust the pixel `size`. The default size is 16px.

```jsx
// @live
<ul className="y-spacing">
  <li>
    <Icon icon="check_circle" size={24} />
  </li>
  <li>
    <Icon icon="warning" size={32} />
  </li>
  <li>
    <Icon icon="error" size={64} />
  </li>
</ul>
```

### Color

An icon inherits color.

```jsx
// @live
<p style={{ color: COLORS.green[600] }}>
  <Icon icon="check_circle" /> Yes!
  <span
    style={{ color: COLORS.red[600] }}
  ><Icon icon="error" /> No!</span>
</p>
```

### Draw a custom icon

Icon optionally takes a path to be drawn [SVG path `d` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d). Use this if your icon is unique and doesn't need to be part of the official design system iconography, but it still makes sense to use the Icon component.

The icon still must have a 24px view box. See <gastby-link to="/styles/iconography">iconography</gatsby-link> for more.

```jsx
// @live
<Icon d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
```