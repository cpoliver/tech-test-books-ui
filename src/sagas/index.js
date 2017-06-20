import { all, fork } from 'redux-saga/effects';

import { tryFetchingBooks } from './books';

export function* rootSaga() {
  yield all([
    fork(tryFetchingBooks)
  ]);
}
