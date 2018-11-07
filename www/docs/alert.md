---
title: "Alert"
---

<lede>Use Alerts to notify users of important information.</lede>

## Install

```
npm install @umich-lib-ui/alert
```

## Usage

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

<accessibility-insight>
The Alert component will announce to assistive technologies whatever you render to the screen.
</accessibility-insight>

## Alert props

### intent

Use `intent` to style the component appropriatly for the use case.

#### `informational`

```jsx
// @live
<Alert intent="informational">Hello there.</Alert>
```

#### `warning`

```jsx
// @live
<Alert intent="warning">Don't do it!</Alert>
```

#### `error`

```jsx
// @live
<Alert intent="error">It's too late.</Alert>
```

#### `success`

```jsx
// @live
<Alert intent="success">You did it!</Alert>
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