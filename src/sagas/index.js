import { all, fork, takeLatest } from 'redux-saga/effects';

import { tryFetchingBooks } from './books';
import { tryFetchingTotal } from './total';

export function* rootSaga() {
  yield all([
    fork(tryFetchingBooks),
    fork(tryFetchingTotal),
    takeLatest('FETCH_BOOKS', tryFetchingBooks),
    takeLatest('FETCH_TOTAL', tryFetchingTotal)
  ]);
}
