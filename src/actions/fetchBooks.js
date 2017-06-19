import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from './types';

export const fetchBooksStarted = ({ itemsPerPage, page }) => ({
  type: FETCH_BOOKS,
  payload: { itemsPerPage, page }
});

export const fetchBooksCompleted = ({ books }) => ({
  type: FETCH_BOOKS_COMPLETED,
  payload: books
});

export const fetchBooksErrored = (error) => ({
  type: FETCH_BOOKS_ERRORED,
  payload: error
});
