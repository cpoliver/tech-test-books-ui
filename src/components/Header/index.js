import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './header.css';

const LINKEDIN_URL = 'https://linkedin.com/in/cpoliver';
const GITHUB_URL = 'https://github.com/cpoliver';

const showAdminModal = (updateAdminState) => () => updateAdminState({ showModal: true });

const Header = ({ updateAdminState }) => (
  <Row className="header text-center">
    <Col xs={12}>
      <h1 className="title">A Million Books</h1>
      <h3 className="subtitle"><small>a tech demo using: node, react, redux and sass</small></h3>
    </Col>
    <Col xs={12} className="icons">
      <span onClick={() => window.open(GITHUB_URL)} className="icon-github-circled" />
      <span onClick={() => window.open(LINKEDIN_URL)} className="icon-linkedin-circled" />
      <span onClick={showAdminModal(updateAdminState)} className="icon-cog-circled" />
    </Col>
  </Row>
);

export default Header;
