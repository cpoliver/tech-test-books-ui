import { all, fork, takeLatest } from 'redux-saga/effects';

import { addBooks, deleteAllBooks } from './admin';
import { fetchBookList, updateSearchParams } from './bookList';
import {
  ADD_BOOKS, DELETE_ALL_BOOKS, FETCH_BOOKS, UPDATE_SEARCH_PARAMS
} from '../actions/types';

export function* rootSaga() {
  yield all([
    fork(fetchBookList),
    takeLatest(ADD_BOOKS, addBooks),
    takeLatest(DELETE_ALL_BOOKS, deleteAllBooks),
    takeLatest(FETCH_BOOKS, fetchBookList),
    takeLatest(UPDATE_SEARCH_PARAMS, updateSearchParams)
  ]);
}
