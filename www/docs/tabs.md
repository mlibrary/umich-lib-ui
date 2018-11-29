---
title: Tabs
---

<lede>Use to display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel.</lede>

## Install

```
npm install @umich-lib/tabs
```

## Usage

```jsx
// @live

<Tabs>
  <TabList>
    <Tab>Catalog</Tab>
    <Tab>Articles</Tab>
    <Tab>Databases</Tab>
  </TabList>

  <TabPanel>
    <p>The Catalog is the definitive place for finding materials held by the U-M Library.</p>
  </TabPanel>
  <TabPanel>
    <p>Articles is a gateway to discovering a wide range of the library's resources.</p>
  </TabPanel>
  <TabPanel>
    <p>Databases are library search engines focused on a specific subject or range of subjects. Some may highlight a particular format, while others will contain a variety of material types.</p>
  </TabPanel>
</Tabs>
```

## Tabs props

This component is a wrap of the [react-tabs](https://github.com/reactjs/react-tabs). See documention for props there. 