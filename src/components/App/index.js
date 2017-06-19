import React from 'react';
import { connect } from 'react-redux';
import { Grid, PageHeader, Row } from 'react-bootstrap';

import BookList from '../BookList';

import './app.css';

const App = ({ bookList }) => (
  <Grid>
    <Row>
      <PageHeader>Books List</PageHeader>
    </Row>
    <Row>
      <BookList books={bookList.books} />
    </Row>
    <Row>
      <pre>{JSON.stringify(bookList, null, 2)}</pre>
    </Row>
  </Grid>
);

const mapStateToProps = ({ bookList }) => ({ bookList });

export default connect(mapStateToProps)(App);
