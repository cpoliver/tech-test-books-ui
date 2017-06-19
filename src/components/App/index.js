import React from 'react';
import { connect } from 'react-redux';
import { Grid, PageHeader, Row } from 'react-bootstrap';
import { dissoc } from 'ramda';

import BookList from '../BookList';
import { fetchBooks } from '../../api';

import './app.css';

const debugOutput = (bookList) => bookList && (
  <Row>
    <pre>{JSON.stringify(bookList, null, 2)}</pre>
  </Row>
);

const App = ({ bookList, loadMoreBooks }) => (
  <Grid>
    <Row>
      <PageHeader>Books List</PageHeader>
    </Row>
    <Row>
      <BookList {...bookList} loadMoreBooks={loadMoreBooks} />
    </Row>
    {debugOutput(dissoc('books', bookList))}
  </Grid>
);

const mapStateToProps = ({ bookList }) => ({ bookList });
const mapDispatchToProps = (dispatch) => ({
  loadMoreBooks: ({ itemsPerPage, page }) => dispatch(fetchBooks({ itemsPerPage, page }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
