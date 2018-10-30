---
title: "Button"
---

Use buttons to move though a transaction, aim to use only one button per page. 

```jsx
// @live
<Button>Okay</Button>
```

Button text should be short and describe the action the button performs.

### Alignment
Align the primary action button to the left edge of your form, in the user’s line of sight.

```jsx
// @live
<div className="y-spacing">
  <TextInput labelText="Full name" />
  <Button>Save and continue</Button>
</div>
```

## Button props

### `kind`

Use `primary`, `secondary`, or `start`. The default is `primary`.

```jsx
// @live
<div className="x-spacing">
  <Button kind="primary">Okay</Button>
  <Button kind="secondary">Undo</Button>
</div>
```

Launch a service with `start` button.

```jsx
// @live
<Button kind="start">Start now</Button>
```

### `children`

Regular React children.

```jsx
// @live
<Button><Icon icon="search" size={24} /> Search</Button>
```

### `small`

```jsx
// @live

<div className="x-spacing">
  <Button small>Log in to continue</Button>
  <Button kind="secondary" small>Close</Button>
</div>
```

### `href`

```jsx
// @live

<div className="x-spacing">
  <Button href="#">Log in</Button>
</div>
```

### `disabled`

Don’t disable buttons, unless there’s a good reason to.

Provide another way for the user to continue, add an error message or text to explain why the button is disabled.

```jsx
// @live
<Button disabled>Submit</Button>
```