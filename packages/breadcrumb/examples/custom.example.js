import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../src";

export let name = "custom anchor";

export let Example = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#">Home</BreadcrumbItem>
    <BreadcrumbItem><a href="#">Research and Scholarship!</a></BreadcrumbItem>
  </Breadcrumb>
)