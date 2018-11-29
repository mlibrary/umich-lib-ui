---
title: "Styles"
---

## Install

```
npm install @umich-lib/styles
```

## Usage

### Colors

```
import {
  colors
} from '@umich-lib/styles'
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