import { FETCH_TOTAL, FETCH_TOTAL_COMPLETED, FETCH_TOTAL_ERRORED } from './types';

export const fetchTotalStarted = () => ({
  type: FETCH_TOTAL
});

export const fetchTotalCompleted = ({ count }) => ({
  type: FETCH_TOTAL_COMPLETED,
  payload: count
});

export const fetchTotalErrored = (error) => ({
  type: FETCH_TOTAL_ERRORED,
  payload: error
});
