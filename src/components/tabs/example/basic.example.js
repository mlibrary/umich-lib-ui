import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel
} from "../index";

export let name = "basic";

export let Example = () => (
  <Tabs>
    <TabList>
      <Tab>Section 1</Tab>
      <Tab>Section 2</Tab>
      <Tab>Section 3</Tab>
    </TabList>

    <TabPanel>
      <p>Section 1 panel.</p>
      <a href="#">A link</a>
    </TabPanel>
    <TabPanel>
      <p>Section 2 panel.</p>
      <a href="#">A link</a>
    </TabPanel>
    <TabPanel>
      <p>Section 3 panel.</p>
      <a href="#">A link</a>
    </TabPanel>
  </Tabs>
)