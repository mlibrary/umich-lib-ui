---
title: "Button"
---

Use buttons to move though a transaction, aim to use only one button per page.

## Button text
Button text should be short and describe the action the button performs.

```jsx
// @live
<Button>Search</Button>
```

## Start now button
Launch your service with a Start now button.

```jsx
// @live
<Button kind="start">Start now</Button>
```

## Secondary button

```jsx
// @live
<Button kind="secondary">Save</Button>
```

## Tertiary button

```jsx
// @live
<Button kind="tertiary">Show more</Button>
```

## Small buttons

```jsx
// @live

<ul className="y-spacing">
  <li><Button small>Log in to continue</Button></li>
  <li><Button kind="secondary" small>Retry</Button></li>
  <li><Button kind="tertiary" small>Undo</Button></li>
</ul>
```

## Buttons that link

```jsx
// @live

<ul className="y-spacing">
  <li><Button href="#">Log in</Button></li>
  <li><Button kind="secondary" href="#">Secondary</Button></li>
  <li><Button kind="tertiary" href="#">Tertiary</Button></li>
</ul>
```

## Button alignment
Align the primary action button to the left edge of your form, in the user’s line of sight.

```jsx
// @live
<div className="y-spacing">
  <TextInput labelText="Full name" />
  <Button>Save and continue</Button>
</div>
```

## Disabled buttons
- don’t disable buttons, unless there’s a good reason to
- if you have to disable buttons, make sure they look like you can’t click them (use 50% opacity)
- an example of a useful disabled option is a calendar with greyed out days where no bookings are available
- provide another way for the user to continue, add an error message or text to explain why the button is disabled
- use the aria-disabled attribute for older screen readers

```jsx
// @live
<Button disabled>Save and continue</Button>
```