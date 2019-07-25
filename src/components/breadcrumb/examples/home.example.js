import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../index";

export let name = "home";

export let Example = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#">Home</BreadcrumbItem>
    <BreadcrumbItem>Research and Scholarship</BreadcrumbItem>
  </Breadcrumb>
)