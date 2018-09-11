import React from "react";
import {
  Expandable,
  ExpandableChildren,
  ExpandableButton
} from "../src/index";

export let name = "Basic";

const colors = [ "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Pink", "Brown", "White", "Gray", "Black"]

export let Example = () => (
  <Expandable>
    <ExpandableButton name="colors" count={colors.length} />

    <ul>
      <ExpandableChildren show={3}>
        {colors.map((color, key) => <li key={key}>{color}</li>)}
      </ExpandableChildren>
    </ul>
  </Expandable>
)