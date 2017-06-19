import { assoc, merge, mergeAll } from 'ramda';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../actions/types';

const initState = {
  itemsPerPage: 10,
  page: 1,
  totalItems: 0,
  isFetching: false,
  errorMessage: null,
  books: [],
};

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [FETCH_BOOKS]: mergeAll([{ isFetching: true }, payload, state]),
    [FETCH_BOOKS_COMPLETED]: assoc('books', payload, merge({ isFetching: false, errorMessage: '' }, state)),
    [FETCH_BOOKS_ERRORED]: merge({ isFetching: false, error: payload }, state),
  };

  return actions[type] || state;
};

export default booksReducer;
