import React from 'react';
import { connect } from 'react-redux';
import { Grid, PageHeader, Row } from 'react-bootstrap';

import Nav from '../Nav';
import BookList from '../BookList';
import { updateSearchParams } from '../../actions';
import { booksSelector, searchParamsSelector, totalPagesSelector } from '../../selectors';

import './app.css';

const App = ({ books, searchParams, totalPages, updateSearchParams }) => (
  <div>
    <Nav searchParams={searchParams} updateSearchParams={updateSearchParams} />
    <Grid>
      <Row>
        <PageHeader>Books List</PageHeader>
      </Row>
      <Row>
        <BookList
          books={books}
          searchParams={searchParams}
          totalPages={totalPages}
          updateSearchParams={updateSearchParams} />
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = (state) => ({
  books: booksSelector(state),
  searchParams: searchParamsSelector(state),
  totalPages: totalPagesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchParams: (searchParams) => dispatch(updateSearchParams(searchParams))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
