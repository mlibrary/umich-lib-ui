---
title: List
---

<lede>Use `List` to display a list of items.</lede>

## Usage

Unstyled lists.

```jsx
// @live
<List>
  <li>here is a plain list</li>
  <li>this is another item in the list</li>
  <li>and another item with a bit more text</li>
</List>
```


## List props

### Bulleted

Bullet point list items start with a lowercase letter and have no full stop at the end.

```jsx
// @live
<List type="bulleted">
  <li>here is a bulleted list</li>
  <li>this is another item in the list</li>
  <li>and another item with a bit more text</li>
</List>
```

### Numbered

Use numbered steps instead of bullet points to guide a user through a process. Steps end in a full stop because each should be a complete sentence.


```jsx
// @live
<List type="numbered">
  <li>Understand that this is a numbered list.</li>
  <li>Follow the second step in this numbered list.</li>
  <li>Make sure each item is a full sentence ending with a full stop.</li>
</List>
```