import React from 'react';
import { Col, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { offerShape } from '../../lib/types';
import './offer.css';

const toPercentage = (discount) => `${discount*100}%`;

const tooltip = ({ name, description, discount }) => (
  <Tooltip id="tooltip">
    <span className="offer__name">
      <strong>{name}!</strong><br />
    </span>
    {toPercentage(discount)} {description}
  </Tooltip>
);

const Offer = ({ name, description, discount }) => (
  <Col xs={12} className="offer">
    <OverlayTrigger placement="top" overlay={tooltip({ name, description, discount })}>
      <Glyphicon glyph="fire" />
    </OverlayTrigger>
  </Col>
);

Offer.propTypes = offerShape;

export default Offer;
