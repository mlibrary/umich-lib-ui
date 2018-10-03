import React from "react";
import List from "../src/index";

export let name = "all";

export let Example = () => (
  <div>
    <List type="bulleted">
      <li>here is a bulleted list</li>
      <li>this is another item in the list</li>
      <li>and another item with a bit more text</li>
    </List>

    <List type="numbered">
      <li>Understand that this is a numbered list.</li>
      <li>Follow the second step in this numbered list.</li>
      <li>Make sure each item is a full sentence ending with a full stop.</li>
    </List>
  </div>
)