import { merge } from 'ramda';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../actions/types';

const initState = {
  isLoading: false,
  total: 0,
  books: [],
  error: {}
};

const onCompleteState = {
  isLoading: false,
  error: {}
};

const bookListReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [FETCH_BOOKS]: merge(state, { isLoading: true }),
    [FETCH_BOOKS_COMPLETED]: merge(state, { ...onCompleteState, ...payload }),
    [FETCH_BOOKS_ERRORED]: merge(state, { isLoading: false, error: payload })
  };

  return actions[type] || state;
};

export default bookListReducer;
