import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import AdminModal from '../AdminModal';
import ErrorModal from '../ErrorModal';
import BookList from '../BookList';
import FilterBar from '../FilterBar';
import Footer from '../Footer';
import Header from '../Header';
import LoadingIndicator from '../LoadingIndicator';
import { updateAdminState, updateSearchParams } from '../../actions';
import { booksSelector, isLoadingSelector, searchParamsSelector, totalPagesSelector } from '../../selectors';
import { bookShape, searchParamsType } from '../../lib/types';

const App = ({ isLoading, books, searchParams, totalPages, updateAdminState, updateSearchParams }) => (
  <div>
    <LoadingIndicator isLoading={isLoading} />
    <AdminModal />
    <ErrorModal />
    <Grid fluid={true}>
      <Header updateAdminState={updateAdminState} />
      <FilterBar
        searchParams={searchParams}
        updateSearchParams={updateSearchParams} />
      <BookList books={books} />
    </Grid>
    <Footer
      searchParams={searchParams}
      totalPages={totalPages}
      updateSearchParams={updateSearchParams} />
  </div>
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(bookShape).isRequired,
  searchParams: searchParamsType.isRequired,
  totalPages: PropTypes.number.isRequired,
  updateAdminState: PropTypes.func.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  books: booksSelector(state),
  isLoading: isLoadingSelector(state),
  searchParams: searchParamsSelector(state),
  totalPages: totalPagesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateAdminState: (adminState) => dispatch(updateAdminState(adminState)),
  updateSearchParams: (searchParams) => dispatch(updateSearchParams(searchParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
