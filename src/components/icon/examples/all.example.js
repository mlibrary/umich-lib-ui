import React from "react";
import Icon, { icons } from "../index";

export let name = "all";

export let Example = () => (
  <ul className="y-spacing">
    {Object.keys(icons).map(i => (
      <li key={i}><Icon icon={i} size={24} />{i}</li>
    ))}
  </ul>
)

