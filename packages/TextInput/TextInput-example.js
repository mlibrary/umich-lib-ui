<div className="y-spacing">
  <TextInput
    id="full-name"
    value="Rambo"
    labelText="Full name"
    type="text"
  />

  <TextInput
    id="email-address"
    labelText="Email address"
    descriptionText="We will only use this to send you a confirmation email."
    type="email"
    placeholder="uniqname@umich.edu"
    invalid
    invalidText="Enter a valid email address."
  />

  <form action="https://search.lib.umich.edu/everything" method="get">
    <Heading size="medium" level={3}>Library Search</Heading>

    <div className="layout-flex x-spacing">
      <TextInput
        id="search-query"
        labelText="Search terms"
        type="search"
        hideLabel
        name="query"
      />
      <Button type="submit">Search</Button>
    </div>
  </form>
</div>
