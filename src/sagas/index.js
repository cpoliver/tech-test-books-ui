import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';

import { fetchBooks, fetchTotal } from '../api';
import { searchParamsSelector } from '../selectors';
import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED,
         UPDATE_SEARCH_PARAMS, UPDATED_SEARCH_PARAMS_RECEIVED } from '../actions/types';

function* fetchBookList() {
  try {
    const searchParams = yield select(searchParamsSelector);

    const [booksResponse, totalBooksResponse] = yield all([
      yield call(fetchBooks, searchParams),
      yield call(fetchTotal, searchParams)
    ]);

    const books = booksResponse.data.books;
    const totalBooks = totalBooksResponse.data.count;

    yield put({ type: FETCH_BOOKS_COMPLETED, payload: { books, totalBooks } });
} catch(error) {
    yield put({ type: FETCH_BOOKS_ERRORED, payload: error });
  }
}

function* updateSearchParams({ payload }) {
  yield put({ type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });
  yield put({ type: FETCH_BOOKS });
}

export function* rootSaga() {
  yield all([
    fork(fetchBookList),
    takeLatest(FETCH_BOOKS, fetchBookList),
    takeLatest(UPDATE_SEARCH_PARAMS, updateSearchParams),
  ]);
}
