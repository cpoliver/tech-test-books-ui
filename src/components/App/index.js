import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import Nav from '../Nav';
import BookList from '../BookList';
import LoadingIndicator from '../LoadingIndicator';
import { updateSearchParams } from '../../actions';
import { booksSelector, isLoadingSelector, searchParamsSelector, totalPagesSelector } from '../../selectors';
import { bookShape, searchParamsType } from '../../lib/types';

const App = ({ isLoading, books, searchParams, totalPages, updateSearchParams }) => (
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
    <LoadingIndicator isLoading={isLoading} />
  </div>
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(bookShape).isRequired,
  searchParams: searchParamsType.isRequired,
  totalPages: PropTypes.number.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  books: booksSelector(state),
  isLoading: isLoadingSelector(state),
  searchParams: searchParamsSelector(state),
  totalPages: totalPagesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchParams: (searchParams) => dispatch(updateSearchParams(searchParams))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
