import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

const Navigation = ({ components }) => {
  return (
    <ul className="navigation">
      {components.map(name => {
        return (
          <li key={name}>
            <Link to={`/components/${name}`}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
