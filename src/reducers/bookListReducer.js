import { any, assoc, equals, evolve, flip, has, map, merge, mergeAll, when } from 'ramda';

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

const resetPage = assoc('page', 1);
const hasProps = (props) => (obj) => any(equals(true), map(flip(has)(obj), props));

const updateSearchParams = (state, payload) => {
  const newParams = when(hasProps(['filter', 'sort']), resetPage)(payload);
  return evolve({ searchParams: flip(merge)(newParams) })(state);
};

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [FETCH_BOOKS]: merge(state, { isFetching: true }),
    [FETCH_BOOKS_COMPLETED]: mergeAll([state, onCompleteState, payload]),
    [FETCH_BOOKS_ERRORED]: merge(state, { isFetching: false, error: payload }),
    [UPDATED_SEARCH_PARAMS_RECEIVED]: updateSearchParams(state, payload)
  };

  const x = actions[type] || state;
  return x;
};

export default booksReducer;
