import React from "react";
import Navigation from "../src/index";

export let name = "lib.umich.edu";

/*
  TODO

  - Fetch data from Drupal dev site and
  use to generate nav.
  
  https://dev.lib.umich.edu/api/nav/primary
  https://dev.lib.umich.edu/api/nav/utility
*/

const data = [
  {
    name: 'Find, Borrow, Request',
    children: [
      {
        name: 'Borrow and Renew',
        to: '#',
        children: [
          {
            name: 'Borrowing by Affiliation',
            to: '#'
          }
        ]
      }
    ]
  },
  {
    name: 'Visit and Study'
  },
  {
    name: 'Research and Scholarship'
  },
  {
    name: 'Collections'
  },
  {
    name: 'About Us'
  }
]

export let Example = () => (
  <Navigation data={data} />
)