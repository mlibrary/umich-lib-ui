import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './RecordAccess.css'
import Expandable, { ExpandableChildren, ExpandableButton } from '../Expandable'

const Cell = ({ cell }) => {
  if (cell.href) {
    return (
      <a href={cell.href}>{cell.text}</a>
    )
  }

  if (cell.status) {
    return (
      <span className={`record-access__cell--${cell.status}`}>
        {cell.icon && <Icon name={cell.icon} />}{cell.text}
      </span>
    )
  }

  return (
    <React.Fragment>{cell.text}</React.Fragment>
  )
}

const RecordAccess = ({
  caption,
  headings,
  rows,
  count,
  name
}) => {
  return (
    <Expandable>
      <table className="record-access__table">
        <caption className="record-access__caption">{caption}</caption>

        <thead>
          <tr>
            {headings.map((heading, i) => (
              <th scope="col" key={i}>{heading}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <ExpandableChildren show={1}>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, t) => (
                  <td key={t}><Cell cell={cell} /></td>
                ))}
              </tr>
            ))}
          </ExpandableChildren>
        </tbody>
      </table>

      <ExpandableButton kind="tertiary" small={true} count={count ? rows.length : ''} name={name} />
    </Expandable>
  )
}

RecordAccess.propTypes = {
  caption: PropTypes.string.isRequired,
  headings: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  name: PropTypes.string,
  count: PropTypes.boolean
};

export default RecordAccess
