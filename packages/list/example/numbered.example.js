import React from "react";
import List from "../src/index";

export let name = "numbered list";

export let Example = () => (
    <List type="numbered">
      <li>Understand that this is a numbered list.</li>
      <li>Follow the second step in this numbered list.</li>
      <li>Make sure each item is a full sentence ending with a full stop.</li>
    </List>
)