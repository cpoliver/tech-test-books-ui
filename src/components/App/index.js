import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import AdminModal from '../AdminModal';
import BookList from '../BookList';
import FilterMenu from '../FilterMenu';
import ItemsPerPageMenu from '../ItemsPerPageMenu';
import SortMenu from '../SortMenu';
import LoadingIndicator from '../LoadingIndicator';
import { updateSearchParams } from '../../actions';
import { booksSelector, isLoadingSelector, searchParamsSelector, totalPagesSelector } from '../../selectors';
import { ITEMS_PER_PAGE_OPTIONS, GENDERS, GENRES, SORTABLE_PROPERTIES } from '../../lib/constants';
import { bookShape, searchParamsType } from '../../lib/types';

const App = ({ isLoading, books, searchParams, totalPages, updateSearchParams }) => (
  <Grid>
    <Row className="filter-bar">
      <Col xs={12} md={12}>
        <PageHeader>Books List</PageHeader>
      </Col>
      <Col xs={12} md={6}>
        <FilterMenu
          placeholder="Filter Genres"
          property="genre"
          options={GENRES}
          searchParams={searchParams}
          updateSearchParams={updateSearchParams} />
      </Col>
      <Col xs={12} md={3}>
        <FilterMenu
          placeholder="Filter Author Genders"
          property="author.gender"
          options={GENDERS}
          searchParams={searchParams}
          updateSearchParams={updateSearchParams} />
      </Col>
      <Col xs={8} md={2}>
        <SortMenu
          options={SORTABLE_PROPERTIES}
          searchParams={searchParams}
          updateSearchParams={updateSearchParams} />
      </Col>
      <Col xs={4} md={1}>
        <ItemsPerPageMenu
          options={ITEMS_PER_PAGE_OPTIONS}
          searchParams={searchParams}
          updateSearchParams={updateSearchParams} />
      </Col>
    </Row>
    <Row>
      <BookList
        books={books}
        searchParams={searchParams}
        totalPages={totalPages}
        updateSearchParams={updateSearchParams} />
    </Row>
    <LoadingIndicator isLoading={isLoading} />
    <AdminModal />
  </Grid>
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
