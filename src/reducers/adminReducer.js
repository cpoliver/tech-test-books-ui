import { merge } from 'ramda';

import {
  ADD_BOOKS, ADD_BOOKS_COMPLETED, ADD_BOOKS_ERRORED,
  DELETE_ALL_BOOKS, DELETE_ALL_BOOKS_COMPLETED, DELETE_ALL_BOOKS_ERRORED,
  UPDATE_ADMIN_STATE
} from '../actions/types';

const initState = {
  isLoading: false,
  showModal: false,
  totalToAdd: 4,
  error: {}
};

const isLoadingState = { isLoading: true };
const onCompleteState = { isLoading: false, error: {} };
const onErrorState = (error) => ({ error, isLoading: false });

const adminReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [ADD_BOOKS]: merge(state, isLoadingState),
    [ADD_BOOKS_COMPLETED]: merge(state, onCompleteState),
    [ADD_BOOKS_ERRORED]: merge(state, onErrorState(payload)),

    [DELETE_ALL_BOOKS]: merge(state, isLoadingState),
    [DELETE_ALL_BOOKS_COMPLETED]: merge(state, onCompleteState),
    [DELETE_ALL_BOOKS_ERRORED]: merge(state, onErrorState(payload)),

    [UPDATE_ADMIN_STATE]: merge(state, payload)
  };

  return actions[type] || state;
};

export default adminReducer;
