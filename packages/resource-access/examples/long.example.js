import React from "react";
import ResourceAccess from "../src";

export let name = "long cell text";

export let Example = () => (
  <ResourceAccess
    headings={["Action", "Status"]}
    rows={[
      [
        {
          text: "Go to database",
          href: "#"
        },
        {
          text: "Database outage: The Digital Dictionary of Buddhism is currently unavailable. Patrons will encounter a log-in prompt when attempting to search material. Patrons will encounter a log-in prompt when attempting to search material.",
          icon: 'error',
          intent: 'error'
        }
      ]
    ]}
  />
)