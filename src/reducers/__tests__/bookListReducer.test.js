import { assoc, assocPath, dissoc } from 'ramda';

import reducer from '../bookListReducer';
import {
  FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED, UPDATED_SEARCH_PARAMS_RECEIVED
} from '../../actions/types';

const initState = {
  isLoading: false,
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

const loadingState = assoc('isLoading', true, initState);

const page3State = assocPath(['searchParams', 'page'], 3, initState);

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

  describe('when updated search params are received', () => {
    const newSearchParams = {
      itemsPerPage: 8,
      page: 1,
      filter: { changed: true },
      sort: { changed: true }
    };

    it('should add the new params to the state', () => {
      const expectedState = assoc('searchParams', newSearchParams, initState);
      const state = reducer(initState, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload: newSearchParams });

      expect(state).toEqual(expectedState);
    });

    it('should reset page to 1, if the filters has changed', () => {
      const payload = dissoc('sort', newSearchParams);
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.searchParams.page).toEqual(1);
    });

    it('should reset page to 1, if the sort has changed', () => {
      const payload = dissoc('filter', newSearchParams);
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.searchParams.page).toEqual(1);
    });

    it('should reset page to 1, if the items per page has changed', () => {
      const payload = { itemsPerPage: 16 };
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.searchParams.page).toEqual(1);
    });

    it('should update the page, if only the page has changed', () => {
      const payload = { page: 42 };
      const state = reducer(page3State, { type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });

      expect(state.searchParams.page).toEqual(42);
    });
  });
});
