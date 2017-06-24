import { delay } from 'redux-saga';
import { all, call, put, select } from 'redux-saga/effects';
import { has } from 'ramda';

import { fetchBooks, fetchTotal } from '../api';
import { queryStringSelector } from '../selectors';
import {
  FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED, UPDATED_SEARCH_PARAMS_RECEIVED
} from '../actions/types';

const DEBOUNCE_DELAY = 1000;

export function* fetchBookList() {
  try {
    const queryString = yield select(queryStringSelector);

    const [booksResponse, totalResponse] = yield all([
      yield call(fetchBooks, queryString),
      yield call(fetchTotal, queryString)
    ]);

    const books = booksResponse.data;
    const total = totalResponse.data.count;

    yield put({ type: FETCH_BOOKS_COMPLETED, payload: { books, total } });
} catch(error) {
    yield put({ type: FETCH_BOOKS_ERRORED, payload: error });
  }
}

export function* updateSearchParams({ payload }) {
  const isFilterChange = has('filter', payload);

  yield put({ type: UPDATED_SEARCH_PARAMS_RECEIVED, payload });
  yield call(delay, isFilterChange ? DEBOUNCE_DELAY : 0);
  yield put({ type: FETCH_BOOKS });
}
