---
title: Install
---

<lede>If you're using React, the easiest way to get started is to install the `@umich-lib/core` [package](https://www.npmjs.com/package/@umich-lib-ui/core).</lede>

```
npm install --save @umich-lib/core
```

Then import the components you need from `@umich-lib/core`.

```
import {
  Button,
  Icon
} from '@umich-lib/core'
```

And then use them.

```jsx
// @live

<Button onClick={() => alert('Hello!')}><Icon icon="chat" /> Say hello</Button>

```

## Full example

<iframe src="https://codesandbox.io/embed/q9wq1rmj3q?fontsize=14" style="width: calc(100% + 2rem + 1px); height:600px; border:0; border-radius: 4px; overflow:hidden; margin: 0 calc(-1rem + -1px);" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
