import React from "react";
import Button from "../src";

export let name = "with hrefs";

export let Example = () => (
  <ul className="y-spacing">
    <li><Button kind="start">Start</Button></li>
    <li><Button href="#">Primary</Button></li>
    <li><Button kind="secondary" href="#">Secondary</Button></li>
    <li><Button kind="tertiary" href="#">Tertiary</Button></li>
    <li><Button small href="#">Primary small</Button></li>
    <li><Button kind="secondary" small href="#">Secondary small</Button></li>
    <li><Button kind="tertiary" small href="#">Tertiary small</Button></li>
  </ul>
)