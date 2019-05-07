import React, { useState, useEffect } from "react";
import Header from "../src/index";
import axios from 'axios'

export let name = "lib.umich.edu";

function processDrupalNavData(data) {
  return data.map(item => {
    let navItem = {
      text: item.text,
      to: item.to
    }

    if (item.description && item.description.length) {
      navItem.description = item.description
    }

    if (item.children && item.children.length) {
      navItem.children = processDrupalNavData(item.children)
    }

    return item
  })
}

function LibUmichHeader() {
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState(null);

  useEffect(() => {
    // Make sure to only run this once.
    if (!primary) {
      axios.get("https://dev.lib.umich.edu/api/nav/primary")
        .then(result => {

          // The first item is the homepage. Targeting the second level.
          setPrimary(processDrupalNavData(result.data[0].children))
        })
    }
  }, []);

  useEffect(() => {
    // Make sure to only run this once.
    if (!secondary) {
      axios.get("https://dev.lib.umich.edu/api/nav/utility")
        .then(result => {

          // The first item is the homepage. Targeting the second level.
          setSecondary(processDrupalNavData(result.data[0].children))
        })
    }
  }, []);

  if (!primary || !secondary) {
    return <p>Loading navigation data from Drupal...</p>
  }

  return (
    <Header
      primary={primary}
      secondary={secondary}
    />
  )
}

export let Example = () => (
  <LibUmichHeader />
)