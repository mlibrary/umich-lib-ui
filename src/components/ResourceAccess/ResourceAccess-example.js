<ResourceAccess
  caption={"HathiTrust Digital Library"}
  headings={["Link", "Description", "Source"]}
  rows={[
    [
      { text: "Search only (no full text)", href: "http://hdl.handle.net/2027/mdp.39015055430386" },
      { text: "no.1-3 1944-1945" },
      { text: "University of Michigan" }
    ],
    [
      { text: "Get this", to: "http://hdl.handle.net/2027/mdp.39015055430394" },
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