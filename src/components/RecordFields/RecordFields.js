import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './RecordFields.css'

const FieldDescriptionItem = ({ desc, renderAnchor }) => {
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
            <FieldDescriptionItem desc={desc} renderAnchor={renderAnchor} />
          </span>
        ))}
      </dd>
    </div>
  )
}

const RecordFields= ({ fields, renderAnchor }) => (
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
