import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './RecordFields.css'

const FieldDescription = ({ description }) => {

  if (Array.isArray(description)) {
    return (
      <dd className="record-fields__description">
        {description.map((desc, i) => (
          <span key={i} className="record-fields__description-item">{desc}</span>
        ))}
      </dd>
    )
  }

  return (
    <dd className="record-fields__description">{description}</dd>
  )
}

const Field = ({ field }) => {
  const { term, description } = field

  return (
    <div className="record-fields__field">
      <dt className="record-fields__term">{term}</dt>
      <FieldDescription description={description} />
    </div>
  )
}

const RecordFields= ({ fields }) => (
  <dl className="record-fields">
    {fields.map((field, i) => <Field field={field} key={i} />)}
  </dl>
)

RecordFields.propTypes = {
  fields: PropTypes.array.isRequired
};

export default RecordFields
