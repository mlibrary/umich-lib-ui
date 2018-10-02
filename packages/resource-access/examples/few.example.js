import React from "react";
import ResourceAccess from "../src";

export let name = "few";

export let Example = () => (
  <ResourceAccess
    headings={["Link", "Description", "Status"]}
    rows={[
      [
        { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
        { text: "v.1 2012" },
        { text: "On shelf", intent: 'success', icon: 'check-circle' }
      ],
      [
        { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
        { text: "v.2 2013" },
        { text: "Missing", intent: 'warning', icon: 'warning' }
      ],
      [
        { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
        { text: "v.2 2014" },
        { text: "Checked out", intent: 'error', icon: 'error' }
      ]
    ]}
    renderAnchor={data => (
      <a href={data.to}>
        {data.text}
      </a>
    )}
    name={"holdings"}
  />
)