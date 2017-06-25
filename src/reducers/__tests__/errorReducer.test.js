import { assoc, dissoc } from 'ramda';

import reducer from '../errorReducer';
import { ADD_BOOKS_ERRORED, DELETE_ALL_BOOKS_ERRORED, FETCH_BOOKS_ERRORED, DISMISS_ERROR } from '../../actions/types';

const error = { message: 'A wild 404 appeared' };

const errorState = {
  showModal: true,
  error
};

const nonErrorState = {
  showModal: false,
  error: {}
};

describe('errorReducer', () => {
  it('has the correct initial state', () => {
    const state = reducer();

    expect(state).toEqual({
      showModal: false,
      error: {}
    });
  });

  it('does not alter state when an unrelated action is dispatched', () => {
    const state = reducer(nonErrorState, { type: 'X' });

    expect(state).toEqual(nonErrorState);
  });

  it('should handle errors from adding books ', () => {
    const state = reducer(nonErrorState, { type: ADD_BOOKS_ERRORED, payload: error });

    expect(state).toEqual({ showModal: true, error });
  });

  it('should handle errors from deleting all books ', () => {
    const state = reducer(nonErrorState, { type: DELETE_ALL_BOOKS_ERRORED, payload: error });

    expect(state).toEqual({ showModal: true, error });
  });

  it('should handle errors from fetching books ', () => {
    const state = reducer(nonErrorState, { type: FETCH_BOOKS_ERRORED, payload: error });

    expect(state).toEqual({ showModal: true, error });
  });

  it('should handle errors being dismissed ', () => {
    const state = reducer(errorState, { type: DISMISS_ERROR });

    expect(state).toEqual({ showModal: false, error: {} });
  });
});
