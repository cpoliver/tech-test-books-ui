import React from 'react';
import { connect } from 'react-redux';
import { Grid, PageHeader, Row } from 'react-bootstrap';

import Nav from '../Nav';
import BookList from '../BookList';
import { fetchBooks } from '../../api';

import './app.css';

const App = ({ bookList, loadMoreBooks }) => (
  <div>
    <Nav />
    <Grid>
      <Row>
        <PageHeader>Books List</PageHeader>
      </Row>
      <Row>
        <BookList {...bookList} loadMoreBooks={loadMoreBooks} />
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = ({ bookList }) => ({ bookList });
const mapDispatchToProps = (dispatch) => ({
  loadMoreBooks: ({ itemsPerPage, page }) => dispatch(fetchBooks({ itemsPerPage, page }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
