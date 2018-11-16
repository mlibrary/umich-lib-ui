---
title: Tabs
---

<lede>Use to display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel.</lede>

## Install

```
npm install @umich-lib-ui/tabs
```

## Usage

```jsx
// @live

<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>

  <TabPanel>
    Tab Panel 1 panel content.
  </TabPanel>
  <TabPanel>
    Tab Panel 2 panel content.
  </TabPanel>
  <TabPanel>
    Tab Panel 3 panel content.
  </TabPanel>
</Tabs>
```

## Tabs props

This component is a wrap of the [react-tabs](https://github.com/reactjs/react-tabs). See documention for props there. 