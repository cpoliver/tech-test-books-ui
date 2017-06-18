import React from 'react';
import { connect } from 'react-redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import Book from '../Book';

import './app.css';

const renderBooks = (books) => books.map(
  () => (
    <Col md={3}>
      <Book />
    </Col>
  )
);

const App = ({ books }) => (
  <Grid>
    <Row>
      <PageHeader>Books List</PageHeader>
    </Row>
    <Row>
      {renderBooks(books)}
    </Row>
  </Grid>
);

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(App);
