---
title: RecordFields
---

<lede>Use `RecordFields` to display metadata, often with field values that link out.</lede>

## Usage

```jsx
// @live
() => {
  const fields = [
    {
      term: "Published",
      description: [{ text: "2012 - Carlton, Vic. : BirdLife Australia" }]
    },
    {
      term: "Previous Title",
      description: [
        { text: "Wing span (Melbourne, Vic.)", to: "#" },
        { text: "Bird observer (Hawthorn, Vic.)", to: "#" }
      ]
    },
    {
      term: "Source of Description Note",
      description: [
        { text: "Description based on: Vol. 1, no. 1 (Mar. 2012); title from cover." },
        { text: "Latest issue consulted: Vol. 1, no. 3 (Sept. 2012)." }
      ]
    },
    {
      term: "Academic Discipline",
      description: [
        [
          { text: "Science", to: "#" },
          { text: "Biology", to: "#" },
          { text: "Zoology", to: "#" }
        ],
        [
          { text: "Science", to: "#" },
          { text: "Biology", to: "#" },
          { text: "Ecology and Evolutionary Biology", to: "#" }
        ],
        [
          { text: "International Studies", to: "#" },
          { text: "Asian Studies", to: "#" },
          { text: "Pacific/Australia/New Zealand Studies", to: "#" }
        ]
      ]
    }
  ]

  return (
    <RecordFields
      fields={fields}
      renderAnchor={data => (
        <a className="rendered-prop-anchor-example" href={data.to}>
        {data.text}
        </a>
      )}
    />
  )
}
```

## RecordFields props

### fields

Each field in `fields` has a single `term` and one or many descriptions. Each `description` contains `text` and an optional `to` or `href` attribute. Nest descriptions for heirarchy.

```jsx
// @live

<RecordFields
  fields={[
    {
      term: "Source of Description Note",
      description: [
        { text: "Description based on: Vol. 1, no. 1 (Mar. 2012); title from cover." },
        { text: "Latest issue consulted: Vol. 1, no. 3 (Sept. 2012)." }
      ]
    },
    {
      term: "Previous Title",
      description: [
        { text: "Wing span (Melbourne, Vic.)", href: "#" },
        { text: "Bird observer (Hawthorn, Vic.)", href: "#" }
      ]
    }
  ]}
/>
```

### condensed

use `condensed` more condensed styles. Will remove the horizontal zebra styling and extra spacing.

```jsx
// @live

<RecordFields
  condensed
  fields={[
    {
      term: "Source of Description Note",
      description: [
        { text: "Description based on: Vol. 1, no. 1 (Mar. 2012); title from cover." },
        { text: "Latest issue consulted: Vol. 1, no. 3 (Sept. 2012)." }
      ]
    },
    {
      term: "Previous Title",
      description: [
        { text: "Wing span (Melbourne, Vic.)", href: "#" },
        { text: "Bird observer (Hawthorn, Vic.)", href: "#" }
      ]
    }
  ]}
/>
```

## renderAnchor

Use `renderAnchor` to render your own anchor that will be used by descriptions that have `to` attributes.

```jsx
// @live

<RecordFields
  fields={[
    {
      term: "Main Author",
      description: [
        { text: "Menaboni, Athos, 1895-", to: "?filter.author=Menaboni%2C+Athos%2C+1895" }
      ]
    }
  ]}
  renderAnchor={data => (<a href={data.to}>{data.text}</a>)}
/>
```