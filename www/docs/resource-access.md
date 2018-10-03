---
title: ResourceAccess
---

Use this component to provide a comprehensive listing of options to access a resource.

```jsx
// @live
<ResourceAccess
  caption={"Research Museums Center Birds Division"}
  captionLink={{ text: 'About location', href: 'http://www.lib.umich.edu/location/museums-library/unit/31' }}
  notes={['Library has: 1- : 2012-']}
  headings={["Link", "Description", "Status"]}
  rows={[
    [
      { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
      { text: "v.1 2012" },
      { text: "On shelf", intent: 'success', icon: 'check-circle' }
    ],
    [
      { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
      { text: "v.2 2013" },
      { text: "Missing", intent: 'warning', icon: 'warning' }
    ],
    [
      { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
      { text: "v.2 2014" },
      { text: "Checked out", intent: 'error', icon: 'error' }
    ],
  ]}
  renderAnchor={data => (
    <a href={data.to}>
      {data.text}
    </a>
  )}
  name={"holdings"}
/>
```

## ResourceAccess Props

### Headings

Use `headings` for table column headings. Headers should never be empty.

### Name

The `name` is used to show all rows.

### Caption

The displayed table `caption`. If you do not use this prop, make sure the preceding heading is appropriate.

### Caption link

Link to more information about the table caption with `captionLink`.

### Notes

Notes necessary to understand the resource access options with `notes`.

### Render anchor

Row cell links that use `to` and render with `renderAnchor`. This is useful if you want to use a routing library instead of an HTML anchor.

```jsx
// @live
<ResourceAccess
  headings={["Action"]}
  rows={[
    [
      { text: 'Go to item', to: '/record/1' }
    ]
  ]}
  renderAnchor={data => (
    <a href={data.to}>
      {data.text}
    </a>
  )}
/>
```

### Rows

Table rows must be an array of arrays. Each inner array represent a row and will contain objects for each cell. A cell object must contain a text key with a string value. If you wish the cell to be linked then include `to` or an `href` key. See `renderAnchor` prop to decide between `to` or `href`.

#### Link cell

```jsx
// @live
<ResourceAccess
  headings={["Action"]}
  rows={[
    [
      { text: 'Get this', href: '#' }
    ]
  ]}
/>
```

#### Text cell

```jsx
// @live
<ResourceAccess
  headings={["Action", "Call number"]}
  rows={[
    [
      { text: 'Go to article', href: '#' },
      { text: 'Q1 .S394' }
    ]
  ]}
/>
```

#### Cell color

Use `intent` to apply a related color. See <gatsby-link to="/styles/colors#intent">intent colors</gatsby-link> for all options.

```jsx
// @live
<ResourceAccess
  headings={["Action", "Status"]}
  rows={[
    [
      { text: 'Go to article', href: '#' },
      { text: 'Full text online', intent: 'success' }
    ]
  ]}
/>
```

#### Cell icon

Use an icon name from <gatsby-link to="/styles/iconography#available-icons">available icons</gatsby-link>.

```jsx
// @live
<ResourceAccess
  headings={["Action", "Status"]}
  rows={[
    [
      { text: 'Go to article', href: '#' },
      { text: 'Missing', intent: 'warning', icon: 'warning' }
    ]
  ]}
/>
```

#### Cell HTML

```jsx
// @live
<ResourceAccess
  headings={["Action", "Status", "Improving access"]}
  rows={[
    [
      { text: "Go to article", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
      { text: "Full text online", icon: "check-circle", intent: "success" },
      { html: `Found a problem? <a href="">Let our link fixers know</a>` }
    ]
  ]}
/>
```