import React from "react";
import Icon, { icons } from "../src/index";

export let name = "all";

export let Example = () => (
  <ul className="margin-left-one margin-top-one">
    {Object.keys(icons).map(i => (
      <li className="margin-bottom-half"><Icon icon={i} size={24} className="margin-right-half"/>{i}</li>
    ))}
  </ul>
)

