---
title: "Styles"
---

## Install

```
npm install @umich-lib-ui/styles
```

## Usage

### Colors

```
import {
  colors
} from '@umich-lib-ui/styles'
```

```jsx
// @live

<p
  style={{
    color: 'white',
    background: colors.blue[600],
    padding: '0.5rem 1rem'
  }}
>
  Example of using a color from the colors palette.
</p>
```