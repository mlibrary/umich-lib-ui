import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './RecordAccess.css'

const RecordAccess = ({
  data
}) => {
  return (
    <React.Fragment>
      {data.map((table, tkey) => (
        <table key={tkey} className="record-access__table">
          <caption className="record-access__caption">{table.heading}</caption>

          <thead>
            <tr>
              {table.headings.map((heading, hkey) => (
                <th scope="col" key={hkey}>{heading}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {table.rows.map(row => (
              <tr>
                {row.map(cell => <td>{cell.value}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </React.Fragment>
  )
}

export default RecordAccess
