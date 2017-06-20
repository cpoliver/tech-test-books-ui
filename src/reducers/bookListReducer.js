import { assocPath, evolve, flip, merge, mergeAll } from 'ramda';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED, UPDATED_SEARCH_PARAMS_RECEIVED } from '../actions/types';

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

const onCompleteState = {
  isFetching: false,
  error: {}
};

const resetPage = assocPath(['searchParams', 'page'], 1);

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [FETCH_BOOKS]: merge(state, { isFetching: true }),
    [FETCH_BOOKS_COMPLETED]: mergeAll([resetPage(state), onCompleteState, payload]),
    [FETCH_BOOKS_ERRORED]: merge(state, { isFetching: false, error: payload }),
    [UPDATED_SEARCH_PARAMS_RECEIVED]: evolve({ searchParams: flip(merge)(payload) })(state)
  };

  const x = actions[type] || state;
  return x;
};

export default booksReducer;
