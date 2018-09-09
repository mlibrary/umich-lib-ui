import React from 'react';
import { storiesOf } from '@storybook/react';

import './record.css'

import {
  ResourceAccess,
  RecordFields
} from 'umich-lib-components-react'

storiesOf('Record', module)
  .add('Catalog result', () => (
    <div className="container-for-record-story">
      <div className="container">
        <div className="record__container">
          <div className="record__metadata-container">
            <h3 className="record__title"><a className="record__title-link" href="#">Australian birdlife.</a></h3>

            <RecordFields
              fields={[
                {
                  term: 'Published',
                  description: [
                    { text: '2012 - Carlton, Vic. : BirdLife Australia' }
                  ]
                },
                {
                  term: 'Contributors',
                  description: [
                    { text: 'BirdLife Australia.', to: '#',  }
                  ]
                }
              ]}
              renderAnchor={(data) => (
                <a className="rendered-prop-anchor-example" href={data.to}>{data.text}</a>
              )}
            />
          </div>
          <div className="record__access-container">
            <section className="margin-bottom-one">
              <ResourceAccess
                caption={"HathiTrust Digital Library"}
                headings={["Link", "Description", "Source"]}
                rows={[
                  [
                    {
                      text: "Search only (no full text)",
                      href: "http://hdl.handle.net/2027/mdp.39015055430386"
                    },
                    { text: "no.1-3 1944-1945" },
                    { text: "University of Michigan" }
                  ],
                  [
                    {
                      text: "Search only (no full text)",
                      to: "http://hdl.handle.net/2027/mdp.39015055430394"
                    },
                    { text: "no.4-6 19uu" },
                    { text: "University of Michigan" }
                  ]
                ]}
                renderAnchor={data => (
                  <a className="rendered-prop-anchor-example" href={data.to}>
                    {data.text}
                  </a>
                )}
                name={"HathiTrust Sources"}
                count={true}
              />
            </section>
            <section>
              <ResourceAccess
                caption={"Buhr Shelving Facility"}
                location={{
                  text: "About location",
                  href:
                    "http://www.lib.umich.edu/location/buhr-remote-shelving-facility/unit/45"
                }}
                notes={["Library has: 1-6 : 1944-1945", "Note: Vols.1-6 in Buhr"]}
                headings={["Action", "Description", "Status", "Call Number"]}
                rows={[
                  [
                    { text: "Get this", href: "#" },
                    { text: "v.3 2017" },
                    { text: "On shelf", intent: "success", icon: "check-circle" },
                    { text: "AP20 .E83" }
                  ],
                  [
                    { text: "Get this", to: "#" },
                    { text: "v.2 2016" },
                    { text: "Checked out", intent: "warning", icon: "warning" },
                    { text: "N/A" }
                  ],
                  [
                    { text: "Get this", to: "#" },
                    { text: "v.1 2015" },
                    { text: "Missing", intent: "error", icon: "error" },
                    { text: "N/A" }
                  ]
                ]}
                renderAnchor={data => (
                  <a className="rendered-prop-anchor-example" href={data.to}>
                    {data.text}
                  </a>
                )}
                name={"holdings"}
                count={true}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  ))
