---
title: Icon
---

Use this to render SVG icons.

```jsx
// @live
<div className="y-spacing">
  <ul className="y-spacing">
    {Object.keys(icons).map((i, k) => (
      <li key={k}>
        <Icon icon={i} className="margin-right-half"/>
        {i}
      </li>
    ))}
  </ul>
</div>
```

## Size

Adjust the pixel `size`.

```jsx
// @live
<ul className="y-spacing">
  <li>
    <Icon icon="check-circle" size={16} />
  </li>
  <li>
    <Icon icon="warning" size={32} />
  </li>
  <li>
    <Icon icon="error" size={64} />
  </li>
</ul>
```