---
title: Layout
---

## Setting global content width

Components such as <gatsby-link to="/components/header">Header</gatsby-link> and <gatsby-link to="/components/alert">Alert</gatsby-link> will be full width by default. If you require a maximum width use the following attribute selector.

```css
[data-content-container] {
  max-width: 960px;
}
```
