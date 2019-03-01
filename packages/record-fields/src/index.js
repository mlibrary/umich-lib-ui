import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import {
  MEDIA_QUERIES,
  colors
} from '@umich-lib/styles'

const StyledDL = styled('dl')({
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'table'
  },
  'dt': {
    color: colors.grey[600],
    fontSize: '0.875rem',
    padding: '0.5rem 1rem 0 1rem',
    [MEDIA_QUERIES.LARGESCREEN]: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      display: 'table-cell',
      width: '12rem'
    }
  },
  'dd': {
    marginInlineStart: '0',
    padding: '0 1rem 0.5rem 1rem',
    [MEDIA_QUERIES.LARGESCREEN]: {
      padding: '0.5rem 1rem',
      display: 'table-cell'
    }
  }
})

const StyledField = styled('div')(
  {
    paddingRight: '1rem',
    [MEDIA_QUERIES.LARGESCREEN]: {
      display: 'table-row'
    }
  },
  props => !props.condensed && {
    '&:nth-child(odd)': {
      background: colors.grey[100],
    },
    '&:nth-child(even)': {
      background: colors.grey[200]
    },
  },
  props => props.condensed && {
    'dt': {
      paddingTop: '0',
      paddingLeft: '0',
      paddingBottom: '0.25rem'
    },
    'dd': {
      paddingRight: '0',
      paddingTop: '0',
      paddingLeft: '0',
      paddingBottom: '0.25rem'
    }
  }
)

const StyledNestedField = styled('ol')({
  margin: '0',
  padding: '0',
  listStyle: 'none',
  'li': {
    display: 'inline-block',
    '&:not(:first-child)::before': {
      position: 'relative',
      /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
      content: '""',
      display: 'inline-block',
      /* By using an em scale, the arrows will size with the font */
      width: '0.35rem',
      height: '0.35rem',
      borderRight: '2px solid',
      borderTop: '2px solid',
      borderColor: colors.grey[600],
      transform: 'rotate(45deg)',
      marginLeft: '0.25rem',
      marginRight: '0.5rem'
    }
  }
})

const FieldDescription = ({ desc, renderAnchor }) => {
  if (Array.isArray(desc)) {
    return (
      <StyledNestedField>
        {desc.map((nestedDesc, i) => (
          <li className="field-nested__desc" key={i}>
            <FieldDescription desc={nestedDesc} renderAnchor={renderAnchor} />
          </li>
        ))}
      </StyledNestedField>
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

const Field = ({
  field,
  renderAnchor,
  condensed
}) => {
  const { term, description } = field

  return (
    <StyledField condensed={condensed}>
      <dt>{term}</dt>
      <dd>
        {description.map((desc, i) => (
          <span className="record-fields__description-item" key={i}>
            <FieldDescription desc={desc} renderAnchor={renderAnchor} />
          </span>
        ))}
      </dd>
    </StyledField>
  )
}

/**
  Use to display metadata, often with field values that link out.
*/
const RecordFields = ({
  fields,
  renderAnchor,
  condensed
}) => {
  return (
    <StyledDL>
      {fields.map((field, i) => (
        <Field
          field={field}
          condensed={condensed}
          renderAnchor={renderAnchor}
          key={i}
        />
      ))}
    </StyledDL>
  )
}

RecordFields.propTypes = {
  /** Each field has a single term and one or many descriptions. Each description contains `text` and an optional `to` or `href` attribute. Nest descriptions for heirarchy. */
  fields: PropTypes.array.isRequired,
  /** For more condensed styles */
  condensed: PropTypes.bool,
  renderAnchor: PropTypes.func
};

RecordFields.defaultProps = {
  condensed: false
};

export default RecordFields