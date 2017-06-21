import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

import casumo from '../../casumo.png'
import spinner from '../../spinner.png'
import './loading-indicator.css';

const LoadingOverlay = ({ isLoading }) => {
  const fadeClass = isLoading ? 'fadein' : 'fadeout';

  return (
    <div className={`loading-indicator ${fadeClass}`}>
      <div className="casumo-spinner">
        <Image src={spinner} alt="loading" className="spinner" responsive />
        <Image src={casumo} alt="loading" className="casumo" responsive />
      </div>
    </div>
  );
};

LoadingOverlay.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingOverlay;
