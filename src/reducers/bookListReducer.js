import { merge, mergeAll } from 'ramda';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../actions/types';

const initState = {
  isFetching: false,
  totalBooks: 0,
  searchParams: {
    itemsPerPage: 8,
    page: 1,
    filter: {},
    sort: {}
  },
  books: [],
  error: {}
};

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [FETCH_BOOKS]: merge(state, { isFetching: true }),
    [FETCH_BOOKS_COMPLETED]: mergeAll([state, { isFetching: false, error: {} }, payload]),
    [FETCH_BOOKS_ERRORED]: merge(state, { isFetching: false, error: payload })
  };

  return actions[type] || state;
};

export default booksReducer;
