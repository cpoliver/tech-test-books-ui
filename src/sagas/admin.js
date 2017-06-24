import { call, put, select } from 'redux-saga/effects';

import { addBooks as tryAddBooks, deleteAllBooks as tryDeleteAllBooks } from '../api';
import { totalToAddSelector } from '../selectors';
import {
  ADD_BOOKS_COMPLETED, ADD_BOOKS_ERRORED,
  DELETE_ALL_BOOKS_COMPLETED, DELETE_ALL_BOOKS_ERRORED,
  FETCH_BOOKS
} from '../actions/types';

export function* addBooks() {
  try {
    const totalToAdd = yield select(totalToAddSelector);

    yield call(tryAddBooks, totalToAdd);
    yield put({ type: ADD_BOOKS_COMPLETED });
    yield put({ type: FETCH_BOOKS });
  } catch(error) {
    yield put({ type: ADD_BOOKS_ERRORED, payload: error });
  }
}

export function* deleteAllBooks() {
  try {
    yield call(tryDeleteAllBooks);
    yield put({ type: DELETE_ALL_BOOKS_COMPLETED });
    yield put({ type: FETCH_BOOKS });
} catch(error) {
    yield put({ type: DELETE_ALL_BOOKS_ERRORED, payload: error });
  }
}
