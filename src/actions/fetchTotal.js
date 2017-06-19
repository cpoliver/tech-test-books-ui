import axios from 'axios';

import { FETCH_TOTAL, FETCH_TOTAL_COMPLETED, FETCH_TOTAL_ERRORED } from './types';

export const fetchTotalStarted = () => ({
  type: FETCH_TOTAL
});

const fetchTotalCompleted = ({ count }) => ({
  type: FETCH_TOTAL_COMPLETED,
  payload: count
});

const fetchTotalErrored = (error) => ({
  type: FETCH_TOTAL_ERRORED,
  payload: error
});

export const fetchTotal = () => {
  return (dispatch) => {
    dispatch(fetchTotalStarted());

    axios.get('http://localhost:5000/books/count').then(
      total => dispatch(fetchTotalCompleted(total.data)),
      error => dispatch(fetchTotalErrored(error))
    );
  }
};
