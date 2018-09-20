---
title: "Alert"
---

Use Alerts to notify users of important information.

```jsx
// @live

<Component initialState={{ messages: [] }}>
  {({ setState, state }) => (
    <div>
      <Button
        onClick={() => {
          setState(
            state => ({
              messages: state.messages.concat([
                `Message #${state.messages.length + 1}`
              ])
            }),
            () => {
              setTimeout(() => {
                setState(state => ({
                  messages: state.messages.slice(1)
                }));
              }, 5000);
            }
          );
        }}
      >
        Add a message
      </Button>

      {state.messages.map((message, index) => (
        <Alert key={index} intent="success">{message}</Alert>
      ))}
    </div>
  )}
</Component>
```

The Alert component will announce to assistive technologies whatever you render to the screen.

## Installation

```
npm install @umich-lib-ui/alert
```

And then import the components you need:

```
import Alert from "@umich-lib-ui/alert"
```

## Alert props

### intent

Will style the component appropriatly.

```jsx
// @live
<div className="y-spacing">
  <Alert intent="warning">Don't do it!</Alert>
  <Alert intent="success">You did it!</Alert>
  <Alert intent="error">It's too late.</Alert>
  <Alert intent="informational">Hello there.</Alert>
  <Alert intent="none">We're not sure.</Alert>
</div>
```

### children

Regular React children.

```jsx
// @live
<Alert intent="informational">
  <div 
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <p>Don't forget to read this! <a href="#">What about html?</a></p>
    <Button small onClick={
      () => alert('Okay!')
    }>Okay</Button>
  </div>
</Alert>
```