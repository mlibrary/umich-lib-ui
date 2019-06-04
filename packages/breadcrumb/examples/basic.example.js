import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../src";

export let name = "basic";

export let Example = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#">Home</BreadcrumbItem>
    <BreadcrumbItem href="#">Research and Scholarship</BreadcrumbItem>
    <BreadcrumbItem href="#">Funding & Awards</BreadcrumbItem>
    <BreadcrumbItem>Undergraduate Research Award</BreadcrumbItem>
  </Breadcrumb>
)