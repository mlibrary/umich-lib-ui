import React from "react";
import Pagination from "../src/index";

export let name = "basic";

export let Example = () => (
  <Pagination
    page={1}
    total={1230}
    onNextPage={console.log}
    onPreviousPage={console.log}
    onPageChange={console.log}
  />
)