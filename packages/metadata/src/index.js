import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import {
  MEDIA_QUERIES,
  COLORS,
  TYPOGRAPHY,
  SPACING
} from '@umich-lib/styles'
import Link from '@umich-lib/link'

const FieldDescription = ({ desc, renderAnchor }) => {
  if (Array.isArray(desc)) {
    return (
      <ol>
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
      <Link kind="subtle" href={desc.href}>{desc.text}</Link>
    )
  }

  if (desc.to) {
    return (
      renderAnchor(desc)
    )
  }

  return desc.text
}

const fieldCellStyles = {
  [MEDIA_QUERIES.LARGESCREEN]: {
    paddingBottom: SPACING['XS'],
    paddingTop: SPACING['XS'],
  }
}

const Field = ({
  field,
  renderAnchor,
  kind
}) => {
  const { term, description } = field
  const isTableLayout = kind !== 'condensed'

  return (
    <div css={{
      paddingBottom: SPACING['2XS'],
      [MEDIA_QUERIES.LARGESCREEN]: {
        display: isTableLayout ? 'table-row' : 'block'
      }
    }}>
      <dt css={{
        ...TYPOGRAPHY['3XS'],
        ...fieldCellStyles,
        [MEDIA_QUERIES.LARGESCREEN]: {
          display: isTableLayout ? 'table-cell' : 'block',
          paddingRight: SPACING['M'],
          width: '12rem'
        }
      }}>{term}</dt>
      <dd css={{
        paddingBottom: SPACING['2XS'],
        ...fieldCellStyles,
        [MEDIA_QUERIES.LARGESCREEN]: {
          display: isTableLayout ? 'table-cell' : 'block'
        }
      }}>
        {description.map((desc, i) => (
          <span className="metadata__description-item" key={i} style={{ display: 'block' }}>
            <FieldDescription desc={desc} renderAnchor={renderAnchor} />
          </span>
        ))}
      </dd>
    </div>
  )
}

/**
  Use to display metadata, often with field values that link out.
*/
const Metadata = ({
  fields,
  renderAnchor,
  kind
}) => {
  return (
    <dl css={{
      width: '100%',
      [MEDIA_QUERIES.LARGESCREEN]: {
        display: 'table'
      }
    }}>
      {fields.map((field, i) => (
        <Field
          field={field}
          kind={kind}
          renderAnchor={renderAnchor}
          key={i}
        />
      ))}
    </dl>
  )
}

Metadata.propTypes = {
  /** Each field has a single term and one or many descriptions. Each description contains `text` and an optional `to` or `href` attribute. Nest descriptions for heirarchy. */
  fields: PropTypes.array.isRequired,
  kind: PropTypes.oneOf([
    "default",
    "condensed",
  ]),
  renderAnchor: PropTypes.func
};

Metadata.defaultProps = {
  kind: 'default'
};

export default Metadata