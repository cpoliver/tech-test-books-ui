import { assoc } from 'ramda';

import reducer from '../bookListReducer';
import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../../actions/types';

const initState = {
  isLoading: false,
  total: 0,
  books: [],
  error: {}
};

const loadingState = assoc('isLoading', true, initState);

describe('bookListReducer', () => {
  it('has the correct initial state', () => {
    const state = reducer();

    expect(state).toEqual(initState);
  });

  it('does not alter state when an unrelated action is dispatched', () => {
    const state = reducer(initState, { type: 'X' });

    expect(state).toEqual(initState);
  });

  describe('when the fetch books action is received', () => {
    it('sets isLoading state to true', () => {
      const expectedState = assoc('isLoading', true, initState);
      const state = reducer(initState, { type: FETCH_BOOKS });

      expect(state).toEqual(expectedState);
    });
  });

  describe('when the fetch books complete action is received', () => {
    const action = { type: FETCH_BOOKS_COMPLETED, payload: { books: [1, 2, 3] } };

    it('updates books in the state', () => {
      const expectedState = assoc('books', action.payload.books, initState);
      const state = reducer(initState, action);

      expect(state).toEqual(expectedState);
    });

    it('sets isLoading state back to false', () => {
      const state = reducer(loadingState, action);

      expect(state.isLoading).toEqual(false);
    });
  });

  describe('when the fetch books errored action is received', () => {
    const action = { type: FETCH_BOOKS_ERRORED, payload: { message: 'some error' } };

    it('updates error in the state', () => {
      const expectedState = assoc('error', action.payload, initState);
      const state = reducer(initState, action);

      expect(state).toEqual(expectedState);
    });

    it('sets isLoading state back to false', () => {
      const state = reducer(loadingState, action);

      expect(state.isLoading).toEqual(false);
    });
  });
});
