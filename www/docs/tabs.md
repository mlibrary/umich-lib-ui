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
    <Tab>Catalog</Tab>
    <Tab>Articles</Tab>
    <Tab>Databases</Tab>
  </TabList>

  <div style={{ margin: '1rem 0' }}>
    <TabPanel>
      <form action="https://search.lib.umich.edu/catalog" method="get" className="y-spacing">
        <Heading size="medium" level={3}>Library Catalog Search</Heading>
        <p>The Catalog is the definitive place for finding materials held by the U-M Library.</p>

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
    </TabPanel>
    <TabPanel>
      <form action="https://search.lib.umich.edu/articles" method="get" className="y-spacing">
        <Heading size="medium" level={3}>Library Articles Search</Heading>
        <p>Articles is a gateway to discovering a wide range of the library's resources.</p>

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
    </TabPanel>
    <TabPanel>
      <form action="https://search.lib.umich.edu/databases" method="get" className="y-spacing">
        <Heading size="medium" level={3}>Library Database Search</Heading>
        <p>Databases are library search engines focused on a specific subject or range of subjects. Some may highlight a particular format, while others will contain a variety of material types.</p>

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
    </TabPanel>
  </div>
</Tabs>
```

## Tabs props

This component is a wrap of the [react-tabs](https://github.com/reactjs/react-tabs). See documention for props there. 