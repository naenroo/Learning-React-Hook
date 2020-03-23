import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className="container">
      <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
        <div className="lds-dual-ring"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
