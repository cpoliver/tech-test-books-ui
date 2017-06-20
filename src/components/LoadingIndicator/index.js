import React from 'react';
import { Image } from 'react-bootstrap';

import casumo from '../../casumo.png'
import spinner from '../../spinner.png'
import './loading-indicator.css';

const LoadingOverlay = ({ gender }) => {
  return (
    <div  className="loading-indicator">
      <div className="casumo-spinner">
        <Image src={spinner} alt="loading" className="spinner" responsive />
        <Image src={casumo} alt="loading" className="casumo" responsive />
      </div>
    </div>
  );
};

export default LoadingOverlay;
