---
title: "Chat"
---

<lede>Use `Chat` to provide users access to the Ask a Librarian chat service.</lede>

## Usage

### Open in a new window

By default, `Chat` will open into a new window when a user clicks the button.

```jsx
// @live

<Chat />
```

## Chat props

### Fix to the viewport

Optionally, use `fixed` to position `Chat` to the bottom right of the viewport on wide screens.


```jsx
// @live

<Chat fixed />
```

Careful when using `fixed` as it has some drawbacks:

- The user will no longer have access to Chat if they navigate away from the page.
- Remember, `fixed` is only for large screens. You still need to consider placement of the Chat button in the document structure.

<accessibility-insight>
 When fixing the Chat component it likely becomes harder for users who rely on keyboard navigation to find the Chat widget in the document structure.
</accessibility-insight>