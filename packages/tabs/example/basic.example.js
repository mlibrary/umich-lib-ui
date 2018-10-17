import React from "react";
import {
  Tabbed,
  Tabs,
  Tab,
  TabPanel
} from "../src/index";

export let name = "basic";

export let Example = () => (
  <div style={{
    maxWidth: '34rem',
    margin: '0 auto'
  }}>
    <Tabbed id="tab-example">
      <Tabs>
        <Tab to="#section1">Section 1</Tab>
        <Tab to="#section2">Section 2</Tab>
        <Tab to="#section3">Section 3</Tab>
      </Tabs>

      <TabPanel id="section1">
        <p>Section 1 panel.</p>
        <a href="#">A link</a>
      </TabPanel>
      <TabPanel id="section2">
        <p>Section 2 panel.</p>
        <a href="#">A link</a>
      </TabPanel>
      <TabPanel id="section3">
        <p>Section 3 panel.</p>
        <a href="#">A link</a>
      </TabPanel>
    </Tabbed>
  </div>
)