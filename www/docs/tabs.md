---
title: Tabs
---

Use to display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel.

```jsx
// @live

<Tabbed>
  <Tabs>
    <Tab to="#section1">Section 1</Tab>
    <Tab to="#section2">Section 2</Tab>
    <Tab to="#section3">Section 3</Tab>
  </Tabs>

  <TabPanel id="section1">
    Section 1 panel content.
  </TabPanel>
  <TabPanel id="section2">
    Section 2 panel content.
  </TabPanel>
  <TabPanel id="section3">
    Section 3 panel content.
  </TabPanel>
</Tabbed>
```

## Styling

`Tabs`, `Tab`, and `TabPanel` components by default do not have styles. They do accept `className` props.

## Props

The `Tab` `to` prop links to the `TabPanel` `id`. Be sure those match and are unique.