import React from 'react';
import { connect } from 'react-redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import Nav from '../Nav';
import BookList from '../BookList';
import LoadingIndicator from '../LoadingIndicator';
import { updateSearchParams } from '../../actions';
import { booksSelector, searchParamsSelector, totalPagesSelector } from '../../selectors';

import './app.css';

const App = ({ books, searchParams, totalPages, updateSearchParams }) => (
  <div>
    <Nav searchParams={searchParams} updateSearchParams={updateSearchParams} />
    <Grid>
      <Row>
        <Col xs={12}>
          <PageHeader>Books List</PageHeader>
        </Col>
      </Row>
      <Row>
        <BookList
          books={books}
          searchParams={searchParams}
          totalPages={totalPages}
          updateSearchParams={updateSearchParams} />
      </Row>
    </Grid>
    <LoadingIndicator />
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
