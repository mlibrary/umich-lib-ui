---
title: Expandable
---

Use `Expandable`, `ExpandableChildren`, and `ExpandableButton` to show an initial subset of elements. The remaining will be hidden and can be expanded by the user.

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