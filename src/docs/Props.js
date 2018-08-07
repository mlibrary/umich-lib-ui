import React from 'react';
import PropTypes from 'prop-types';
import {
  withLive,
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


const Key = ({ propName }) => {

  return (
    <React.Fragment>
      <code className="props__prop-name">{propName}</code>
    </React.Fragment>
  )
}

const Type = ({ type }) => {
  return (
    <span className="props__prop-type">{type.name}</span>
  )
}

const PropSpec = ({ value }) => (
  <details className="props__prop-specs">
    <summary>PropType AST</summary>
    <pre className="props__prop-shape">
      {JSON.stringify(value, null, 2)}
    </pre>
  </details>
)

const Description = ({ type, required, description }) => {
  return (
    <div className="y-spacing">
      <Type type={type} />
      <p>{required && (<span className="props__prop-required-tag">required</span>)} {description}</p>
      {type.value && (
        <PropSpec value={type.value}/>
      )}
    </div>
  )
}

const Props = ({props}) => {
  return (
    <table className="props__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {
        Object.keys(props).map(key => {
          return (
            <tr key={key}>
              <td><Key propName={key} {...props[key]} /></td>
              <td><Description {...props[key]} /></td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
