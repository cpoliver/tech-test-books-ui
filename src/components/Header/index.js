import React from 'react';
import { Button, Col, PageHeader, Row } from 'react-bootstrap';

const showAdminModal = (updateAdminState) => () => updateAdminState({ showModal: true });

const Header = ({ updateAdminState }) => (
  <Row className="header">
    <Col xs={12} md={12}>
      <PageHeader>
        Books List
        <Button onClick={showAdminModal(updateAdminState)} className="pull-right">
          Show Admin Panel
        </Button>
      </PageHeader>
    </Col>
  </Row>
);

export default Header;
