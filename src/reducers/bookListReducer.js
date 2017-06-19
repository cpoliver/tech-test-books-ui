import { assoc, merge, mergeAll } from 'ramda';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../actions/types';

const initState = {
  itemsPerPage: 10,
  page: 1,
  totalItems: 0,
  isFetching: false,
  error: {},
  books: [],
};

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [FETCH_BOOKS]: mergeAll([state, payload, { isFetching: true }]),
    [FETCH_BOOKS_COMPLETED]: merge(state, { isFetching: false, error: {}, books: payload }),
    [FETCH_BOOKS_ERRORED]: merge(state, { isFetching: false, error: payload })
  };

  return actions[type] || state;
};

export default booksReducer;
