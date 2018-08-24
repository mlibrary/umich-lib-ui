---
title: "Alert"
---

Use Alerts to notify users of important information.

```jsx
// @live

<div className="y-spacing">
  <Alert intent="warning">Don't do it!</Alert>
  <Alert intent="success">You did it!</Alert>
  <Alert intent="error" closable={false}>It's too late.</Alert>
  <Alert intent="informational">Hello there</Alert>
  <Alert intent="none"><p>We're not sure. <a href="#">What about html?</a></p></Alert>
</div>
```