import React from "react";
import Header from "../src/index";

export let name = "with nav items";

export let Example = () => (
  <Header
    name="Hello world"
    nav={[
      { href: '#', text: 'About' },
      { href: '#', text: 'Log in' }
    ]}
  />
)