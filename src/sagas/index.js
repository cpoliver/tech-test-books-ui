import { all, fork, takeLatest } from 'redux-saga/effects';

import { fetchBookList, updateSearchParams } from './bookList';
import { FETCH_BOOKS, UPDATE_SEARCH_PARAMS } from '../actions/types';

export function* rootSaga() {
  yield all([
    fork(fetchBookList),
    takeLatest(FETCH_BOOKS, fetchBookList),
    takeLatest(UPDATE_SEARCH_PARAMS, updateSearchParams),
  ]);
}
