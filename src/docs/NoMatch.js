import React from 'react';

import {
  Heading
} from 'umich-lib-components-react';

const NoMatch = function NoMatch() {
  return (
    <div className="container container-narrow">
      <div className="page-not-found-container">
        <Heading level={1} size="xlarge">Page not found - 404</Heading>
        <p className="lede text">What you're looking for isn't here.</p>
      </div>
    </div>
  );
};

export default NoMatch;
