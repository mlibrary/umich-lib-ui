import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './RecordAccess.css'

const RecordAccess = ({
  data
}) => {
  console.log('data', data)
  return (
    <React.Fragment>
      {data.map((table, tkey) => (
        <table key={tkey}>
          <caption>{table.heading}</caption>

          <thead>
            <tr>
              {table.headings.map((heading, hkey) => (<th scope="col" key={hkey}>{heading}</th>))}
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
