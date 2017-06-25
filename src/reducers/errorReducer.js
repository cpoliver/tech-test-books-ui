import { merge } from 'ramda';

import { ADD_BOOKS_ERRORED, DELETE_ALL_BOOKS_ERRORED, FETCH_BOOKS_ERRORED, DISMISS_ERROR } from '../actions/types';

const initState = {
  showModal: false,
  error: {}
};

const searchReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [ADD_BOOKS_ERRORED]: merge(state, { showModal: true, error: payload }),
    [DELETE_ALL_BOOKS_ERRORED]: merge(state, { showModal: true, error: payload }),
    [FETCH_BOOKS_ERRORED]: merge(state, { showModal: true, error: payload }),

    [DISMISS_ERROR]: initState
  };

  return actions[type] || state;
};

export default searchReducer;
