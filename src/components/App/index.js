import React from 'react';
import { connect } from 'react-redux';
import { Grid, PageHeader, Row } from 'react-bootstrap';

import Nav from '../Nav';
import BookList from '../BookList';
import { fetchBooks } from '../../api';

import './app.css';

const App = ({ bookList, loadMoreBooks }) => (
  <div>
    <Nav itemsPerPage={bookList.itemsPerPage} page={bookList.page} loadMoreBooks={loadMoreBooks} />
    <Grid>
      <Row>
        <PageHeader>Books List: All Genres</PageHeader>
      </Row>
      <Row>
        <BookList {...bookList} loadMoreBooks={loadMoreBooks} />
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = ({ bookList }) => ({ bookList });
const mapDispatchToProps = (dispatch) => ({
  loadMoreBooks: ({ itemsPerPage, page, sort, filter }) => dispatch(fetchBooks({ itemsPerPage, page, sort, filter }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
