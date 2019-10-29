import React from "react";
import SideNavigation from "../src";

export let name = "basic";

const data = {
  title: 'Creation and Learning Spaces',
  items: [
    {
      text: 'ScholarSpace',
      to: '/scholarspace'
    },
    {
      text: 'Shapiro Design Lab',
      to: '/shapiro-design-lab',
      children: [
        {
          text: 'Media Production Rooms',
          to: '/shapiro-design-lab/media-production-rooms'
        },
        {
          text: 'PIE Space',
          to: '/shapiro-design-lab/pie-space'
        }
      ]
    }
  ]
}

export let Example = () => (
  <SideNavigation
    data={data}
    path="/shapiro-design-lab/media-production-rooms"
  />
)