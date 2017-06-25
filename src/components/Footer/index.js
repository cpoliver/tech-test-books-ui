import React from 'react';
import PropTypes from 'prop-types';
import { Col, Pagination, Row } from 'react-bootstrap';

import { searchParamsType } from '../../lib/types';
import './footer.css';

const Footer = ({ searchParams, totalPages, updateSearchParams }) => {
  const { page } = searchParams;

  return (
    <footer className="footer navbar navbar-default navbar-fixed-bottom">
      <Row>
        <Col xs={12} className="text-center">
          <Pagination prev next first last ellipsis boundaryLinks
            items={totalPages}
            maxButtons={5}
            activePage={page}
            onSelect={(newPage) => updateSearchParams({ page: newPage })} />
        </Col>
      </Row>
    </footer>
  );
};

Footer.propTypes = {
  searchParams: searchParamsType.isRequired,
  totalPages: PropTypes.number.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default Footer;
