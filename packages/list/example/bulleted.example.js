import React from "react";
import List from "../src/index";

export let name = "bulleted list";

export let Example = () => (
    <List type="bulleted">
      <li>here is a bulleted list</li>
      <li>this is another item in the list</li>
      <li>and another item with a bit more text</li>
    </List>
)