import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Expandable.css'

const ExpandableContext = React.createContext('light');

const Expandable = ({
  children
}) => {
  return (
    <ExpandableContext.Provider>
      {children}
    </ExpandableContext.Provider>
  )
}

Expandable.propTypes = {
  expanded: PropTypes.bool
};

Expandable.defaultProps = {
  expanded: false
};

const ExpandableChildren = ({
  children
}) => (
  <React.Fragment>
    {children.map(child => child)}
  </React.Fragment>
)

export default Expandable
export {
  ExpandableChildren
}
