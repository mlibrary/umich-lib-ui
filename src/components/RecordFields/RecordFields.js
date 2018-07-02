import React from 'react';
import PropTypes from 'prop-types';
import './RecordFields.css'

const FieldDescription = ({ desc, renderAnchor }) => {
  if (Array.isArray(desc)) {
    return (
      <ol className="field-nested">
        {desc.map((nestedDesc, i) => (
          <li className="field-nested__desc" key={i}>
            <FieldDescription desc={nestedDesc} renderAnchor={renderAnchor} />
          </li>
        ))}
      </ol>
    )
  }

  if (desc.href) {
    return (
      <a href={desc.href}>{ desc.text }</a>
    )
  }

  if (desc.to) {
    return (
      renderAnchor(desc)
    )
  }

  return desc.text
}

const Field = ({ field, renderAnchor }) => {
  const { term, description } = field

  return (
    <div className="record-fields__field">
      <dt className="record-fields__term">{term}</dt>
      <dd className="record-fields__description">
        {description.map((desc, i) => (
          <span className="record-fields__description-item" key={i}>
            <FieldDescription desc={desc} renderAnchor={renderAnchor} />
          </span>
        ))}
      </dd>
    </div>
  )
}

const RecordFields = ({ fields, renderAnchor }) => (
  <dl className="record-fields">
    {fields.map((field, i) => (
      <Field field={field} renderAnchor={renderAnchor} key={i} />
    ))}
  </dl>
)

RecordFields.propTypes = {
  fields: PropTypes.array.isRequired,
  renderAnchor: PropTypes.func
};

export default RecordFields
