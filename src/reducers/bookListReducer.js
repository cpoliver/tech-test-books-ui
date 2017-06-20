import { merge } from 'ramda';

import {
  FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED,
  FETCH_TOTAL, FETCH_TOTAL_COMPLETED, FETCH_TOTAL_ERRORED
} from '../actions/types';

const initState = {
  itemsPerPage: 8,
  page: 1,
  totalBooks: 0,
  isFetching: false,
  error: {},
  books: [],
};

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [FETCH_BOOKS]: merge(state, { isFetching: true }),
    [FETCH_BOOKS_COMPLETED]: merge(state, { isFetching: false, error: {}, books: payload }),
    [FETCH_BOOKS_ERRORED]: merge(state, { isFetching: false, error: payload }),

    [FETCH_TOTAL]: merge(state, { totalBooks: payload }),
    [FETCH_TOTAL_COMPLETED]: merge(state, { error: {}, totalBooks: payload }),
    [FETCH_TOTAL_ERRORED]: merge(state, { error: payload })
  };

  return actions[type] || state;
};

export default booksReducer;
