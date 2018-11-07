---
title: Expandable
---

<lede>Use `Expandable`, `ExpandableChildren`, and `ExpandableButton` to show an initial subset of elements. The remaining will be hidden and can be expanded by the user.</lede>

## Install

```
npm install @umich-lib-ui/expandable
```

## Usage

```jsx
// @live

() => {
  const colors = [ "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Pink", "Brown", "White", "Gray", "Black"]
  
  return (
    <div className="y-spacing">
      <Expandable>
        <ExpandableButton name="colors" count={colors.length} />

        <ul>
          <ExpandableChildren show={3}>
            {colors.map((color, key) => <li key={key}>{color}</li>)}
          </ExpandableChildren>
        </ul>
      </Expandable>
    </div>
  )
}
```

`ExpandableChildren` and `ExpandableButton` must be children of `Expandable`. `Expandable` cannot be a child of another `Expandable`.

## ExpandableButton

`ExpandableButton` is the same as a regular `Button`. See <gatsby-link to="/components/button">Button component</gatsby-link> for docs.

## Expandable props

<div>
  <research-insight>
    Avoid generic labels. Users much prefered and could predict behavor when including the name and count when expanding abbreviated content.
  </research-insight>
</div>

### name

Use `name` to include the name in the `ExpandableButton` text.

```jsx
// @live

() => {
  const colors = [ "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Pink", "Brown", "White", "Gray", "Black"]
  
  return (
    <div className="y-spacing">
      <Expandable>
        <ul>
          <ExpandableChildren show={1}>
            {colors.map((color, key) => <li key={key}>{color}</li>)}
          </ExpandableChildren>
        </ul>

        <ExpandableButton name="colors" count={colors.length} small />
      </Expandable>
    </div>
  )
}
```

### count

Use `count` to include the count of items in the `ExpandableButton` text.

```jsx
// @live

() => {
  const colors = [ "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Pink", "Brown", "White", "Gray", "Black"]
  
  return (
    <div className="y-spacing">
      <Expandable>
        <ExpandableButton name="colors" count={colors.length} small kind="secondary" />

        <ul>
          <ExpandableChildren show={1}>
            {colors.map((color, key) => <li key={key}>{color}</li>)}
          </ExpandableChildren>
        </ul>
      </Expandable>
    </div>
  )
}
```

### show

Use `show` to define how many items are showed at inital render.

```jsx
// @live

() => {
  const colors = [ "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Pink", "Brown", "White", "Gray", "Black"]
  
  return (
    <div className="y-spacing">
      <Expandable>
        <ExpandableButton name="colors" count={colors.length} kind="tertiary" />

        <ul>
          <ExpandableChildren show={1}>
            {colors.map((color, key) => <li key={key}>{color}</li>)}
          </ExpandableChildren>
        </ul>
      </Expandable>
    </div>
  )
}
```