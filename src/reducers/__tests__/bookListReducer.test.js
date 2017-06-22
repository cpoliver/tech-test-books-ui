import { assoc } from 'ramda';

import reducer from '../bookListReducer';
import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../../actions/types';

const initState = {
  isLoading: true,
  total: 0,
  books: [],
  error: {}
};

const notLoadingState = assoc('isLoading', false, initState);

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
      const state = reducer(notLoadingState, { type: FETCH_BOOKS });

      expect(state).toEqual({
        isLoading: true,
        total: 0,
        books: [],
        error: {}
      });
    });
  });

  describe('when the fetch books complete action is received', () => {
    const action = { type: FETCH_BOOKS_COMPLETED, payload: { books: [1, 2, 3], total: 3 } };

    it('sets books, isLoading in the state', () => {
      const state = reducer(initState, action);

      expect(state).toEqual({
        isLoading: false,
        total: 3,
        books: [1, 2, 3],
        error: {}
      });
    });
  });

  describe('when the fetch books errored action is received', () => {
    const action = { type: FETCH_BOOKS_ERRORED, payload: { message: 'some error' } };

    it('sets error, isLoading in the state', () => {
      const state = reducer(initState, action);

      expect(state).toEqual({
        isLoading: false,
        total: 0,
        books: [],
        error: { message: 'some error' }
      });
    });
  });
});
