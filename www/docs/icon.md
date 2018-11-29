---
title: Icon
---

<lede>Use this to render SVG icons.</lede>

## Install

```
npm install @umich-lib/icon
```

## Usage

```jsx
// @live
<Icon icon="check_circle" />
```

## Size

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

## Color

An icon inherits color.

```jsx
// @live
<p style={{ color: colors.green[600] }}>
  <Icon icon="check_circle" /> Yes!
  <span
    style={{ color: colors.red[600] }}
  ><Icon icon="error" /> No!</span>
</p>
```