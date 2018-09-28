---
title: Icon
---

Use this to render SVG icons.

```jsx
// @live
<Icon icon="check-circle" />
```

## Size

Adjust the pixel `size`. The default size is 16px.

```jsx
// @live
<ul className="y-spacing">
  <li>
    <Icon icon="check-circle" size={24} />
  </li>
  <li>
    <Icon icon="warning" size={32} />
  </li>
  <li>
    <Icon icon="error" size={64} />
  </li>
</ul>
```

## Color

An icon inherits color.

```jsx
// @live
<p style={{ color: colors.green[600] }}>
  <Icon icon="check-circle" /> Yes!
  <span
    style={{ color: colors.red[600] }}
  ><Icon icon="error" /> No!</span>
</p>
```