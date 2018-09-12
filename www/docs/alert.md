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
  <Alert intent="informational">
    <p>Hello there</p>
    <Button kind="tertiary" small onClick={
      () => alert('handle click')
    }>Close</Button>
  </Alert>
  <Alert intent="none">
    <p>We're not sure. <a href="#">What about html?</a></p>
    <Button small onClick={
      () => alert('handle click')
    }>Okay</Button>
  </Alert>
</div>
```