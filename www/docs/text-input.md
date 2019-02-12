---
title: TextInput
---

<lede>Use this to enable the user to enter text that's no longer than a single line.</lede>

## Install

```
npm install @umich-lib/text-input
```

## Usage


```jsx
// @live
<TextInput id="full-name" labelText="Full name" />
```

## TextInput props

### Description text

Let users know why you're asking for input and what it will be used for with `descriptionText`.

```jsx
// @live
<TextInput
  id="email-address"
  labelText="Email address"
  descriptionText="We will only use this to send you a confirmation email."
  type="email"
  placeholder="uniqname@umich.edu"
/>
```

### Invalid input and message

If input is invalid add `invalid` and a descriptive `invalidText` message.

```jsx
// @live
<TextInput
  id="email-address"
  labelText="Email address"
  descriptionText="We will only use this to send you a confirmation email."
  type="email"
  placeholder="uniqname@umich.edu"
  invalid
  invalidText="Enter a valid email address."
/>
```

### Hide the label

A label is required for accessibility, but if your use case requires it to be hidden visually then use `hideLabel`.

```jsx
// @live
<form action="https://search.lib.umich.edu/everything" method="get">
  <Heading size="medium" level={3}>Library Search</Heading>

  <div className="layout-flex x-spacing">
    <TextInput
      id="search-query"
      labelText="Search terms"
      type="search"
      hideLabel
      name="query"
    />
    <Button type="submit">Search</Button>
  </div>
</form>
```