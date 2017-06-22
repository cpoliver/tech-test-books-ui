import { assoc, dissoc } from 'ramda';

import reducer from '../adminReducer';
import {
  ADD_BOOKS, ADD_BOOKS_COMPLETED, ADD_BOOKS_ERRORED,
  DELETE_ALL_BOOKS, DELETE_ALL_BOOKS_COMPLETED, DELETE_ALL_BOOKS_ERRORED,
  UPDATE_ADMIN_STATE
} from '../../actions/types';

const modifiedState = {
  isLoading: false,
  showModal: true,
  totalToAdd: 2,
  error: {}
};

describe('adminReducer', () => {
  it('has the correct initial state', () => {
    const state = reducer();

    expect(state).toEqual({
      isLoading: false,
      showModal: false,
      totalToAdd: 4,
      error: {}
    });
  });

  it('does not alter state when an unrelated action is dispatched', () => {
    const state = reducer(modifiedState, { type: 'X' });

    expect(state).toEqual(modifiedState);
  });

  describe('when the add books action is received', () => {
    it('sets isLoading state to true', () => {
      const state = reducer(modifiedState, { type: ADD_BOOKS });

      expect(state).toEqual({
        isLoading: true,
        showModal: true,
        totalToAdd: 2,
        error: {}
      });
    });
  });

  describe('when the add books complete action is received', () => {
    const action = { type: ADD_BOOKS_COMPLETED, payload: { books: [1, 2, 3], total: 3 } };

    it('sets isLoading state to false', () => {
      const state = reducer(modifiedState, action);

      expect(state).toEqual({
        isLoading: false,
        showModal: true,
        totalToAdd: 2,
        error: {}
      });
    });
  });

  describe('when the add books errored action is received', () => {
    const action = { type: ADD_BOOKS_ERRORED, payload: { message: 'some error' } };

    it('sets error, isLoading in the state', () => {
      const state = reducer(modifiedState, action);

      expect(state).toEqual({
        isLoading: false,
        showModal: true,
        totalToAdd: 2,
        error: { message: 'some error' }
      });
    });
  });

  describe('when the delete all books action is received', () => {
    it('sets isLoading state to true', () => {
      const state = reducer(modifiedState, { type: DELETE_ALL_BOOKS });

      expect(state).toEqual({
        isLoading: true,
        showModal: true,
        totalToAdd: 2,
        error: {}
      });
    });
  });

  describe('when the delete all books complete action is received', () => {
    const action = { type: DELETE_ALL_BOOKS_COMPLETED, payload: { books: [1, 2, 3], total: 3 } };

    it('sets isLoading state to false', () => {
      const state = reducer(modifiedState, action);

      expect(state).toEqual({
        isLoading: false,
        showModal: true,
        totalToAdd: 2,
        error: {}
      });
    });
  });

  describe('when the delete all books errored action is received', () => {
    const action = { type: DELETE_ALL_BOOKS_ERRORED, payload: { message: 'some error' } };

    it('sets error, isLoading in the state', () => {
      const state = reducer(modifiedState, action);

      expect(state).toEqual({
        isLoading: false,
        showModal: true,
        totalToAdd: 2,
        error: { message: 'some error' }
      });
    });
  });

  describe('when the update admin state is received', () => {
    it('should merge the new params to the state without overwriting the old ones', () => {
        const state = reducer(modifiedState, { type: UPDATE_ADMIN_STATE, payload: { showModal: false, isLoading: true} });

        expect(state).toEqual({
          isLoading: true,
          showModal: false,
          totalToAdd: 2,
          error: {}
      });
    });
  });
});
