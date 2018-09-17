import React from "react";
import Pagination from "../src/index";

export let name = "basic";

export let Example = () => (
  <Pagination
    start={1}
    end={10}
    page={1}
    total={1230}
  />
)