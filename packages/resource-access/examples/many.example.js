import React from "react";
import ResourceAccess from "../src";

export let name = "many";

export let Example = () => (
  <ResourceAccess
    caption={"Research Museums Center Birds Division"}
    captionLink={{ text: 'About location', href: 'http://www.lib.umich.edu/location/museums-library/unit/31' }}
    notes={['Library has: 1- : 2012-']}
    headings={["Link", "Description", "Status"]}
    rows={[
      [
        { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
        { text: "v.1 2012" },
        { text: "On shelf", intent: 'success', icon: 'check_circle' }
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
      ],
      [
        { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
        { text: "v.1 2012" },
        { text: "On shelf", intent: 'success', icon: 'check_circle' }
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
      ],
      [
        { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
        { text: "v.1 2012" },
        { text: "On shelf", intent: 'success', icon: 'check_circle' }
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
      ],
      [
        { text: "Get this", href: "https://search.lib.umich.edu/catalog/record/012977832/get-this/39015072357000" },
        { text: "v.1 2012" },
        { text: "On shelf", intent: 'success', icon: 'check_circle' }
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
      ],
    ]}
    renderAnchor={data => (
      <a href={data.to}>
        {data.text}
      </a>
    )}
    name={"holdings"}
  />
)