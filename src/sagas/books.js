import { call, put } from 'redux-saga/effects';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../actions/types';
import { fetchBooks } from '../api';

export function* tryFetchingBooks () {
  yield put({ type: FETCH_BOOKS });

  try {
    const { data } = yield call(fetchBooks({ itemsPerPage: 8, page: 1 }));
    yield put({ type: FETCH_BOOKS_COMPLETED, payload: data.books });
  } catch(error) {
    yield put({ type: FETCH_BOOKS_ERRORED, payload: error });
  }
};
