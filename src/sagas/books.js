import { call, put } from 'redux-saga/effects';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from '../actions/types';
import { fetchBooks } from '../api';

const DEFAULT_SEARCH_PARAMS = { page: 1, itemsPerPage: 8 };

export function* tryFetchingBooks ({ searchParams = DEFAULT_SEARCH_PARAMS } = {}) {
  try {
    const { data } = yield call(fetchBooks(searchParams));
    yield put({ type: FETCH_BOOKS_COMPLETED, payload: data.books });
  } catch(error) {
    yield put({ type: FETCH_BOOKS_ERRORED, payload: error });
  }
};
