import React from 'react';
import { connect } from 'react-redux';
import { Grid, PageHeader, Row } from 'react-bootstrap';

import BookList from '../BookList';

import './app.css';

const App = ({ books }) => (
  <Grid>
    <Row>
      <PageHeader>Books List</PageHeader>
    </Row>
    <Row>
      <BookList books={books} />
    </Row>
  </Grid>
);

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(App);
