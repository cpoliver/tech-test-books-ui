import { all, fork } from 'redux-saga/effects';

import { tryFetchingBooks } from './books';
import { tryFetchingTotal } from './total';

export function* rootSaga() {
  yield all([
    fork(tryFetchingBooks),
    fork(tryFetchingTotal)
  ]);
}
