import React from "react";
import Text from "../src";

export let name = "all";

export let Example = () => (
  <div>
    <List type="bulleted">
      <ListItem>here is a bulleted list</ListItem>
      <ListItem>this is another item in the list</ListItem>
      <ListItem>and another item with a bit more text</ListItem>
    </List>

    <List type="numbered">
      <ListItem>Understand that this is a numbered list.</ListItem>
      <ListItem>Follow the second step in this numbered list.</ListItem>
      <ListItem>Make sure each item is a full sentence ending with a full stop.</ListItem>
    </List>
  </div>
)