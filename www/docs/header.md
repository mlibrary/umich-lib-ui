---
title: "Header"
---

Use the standard U-M Library header.

```jsx
// @live
<Header />
```

## Site name

Add a site name with `name`.

```jsx
// @live
<Header name="Search" />
```

## Navigation

Keep the header as simple as possible and only add critical navigation elements with `nav`.

```jsx
// @live
<Header
  nav={[
    {
      text: "About",
      href: "#"
    },
    {
      text: "My Account",
      href: "http://lib.umich.edu/my-account"
    }
  ]}
/>
```

