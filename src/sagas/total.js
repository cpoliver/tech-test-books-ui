import { call, put } from 'redux-saga/effects';

import { FETCH_TOTAL, FETCH_TOTAL_COMPLETED, FETCH_TOTAL_ERRORED } from '../actions/types';
import { fetchTotal } from '../api';

export function* tryFetchingTotal () {
  yield put({ type: FETCH_TOTAL });

  try {
    const { data } = yield call(fetchTotal({}));
    yield put({ type: FETCH_TOTAL_COMPLETED, payload: data.count });
  } catch(error) {
    yield put({ type: FETCH_TOTAL_ERRORED, payload: error });
  }
};
