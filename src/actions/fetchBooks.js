import axios from 'axios';

import { FETCH_BOOKS, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERRORED } from './types';

export const fetchBooksStarted = ({ itemsPerPage, page }) => ({
  type: FETCH_BOOKS,
  payload: { itemsPerPage, page }
});

const fetchBooksCompleted = ({ books }) => ({
  type: FETCH_BOOKS_COMPLETED,
  payload: books
});

const fetchBooksErrored = (error) => ({
  type: FETCH_BOOKS_ERRORED,
  payload: error
});

export const fetchBooks = ({ itemsPerPage, page }) => {
  return (dispatch) => {
    dispatch(fetchBooksStarted({ itemsPerPage, page }));

    axios.get(`http://localhost:5000/books?itemsPerPage=${itemsPerPage}&page=${page}`).then(
      books => dispatch(fetchBooksCompleted(books.data)),
      error => dispatch(fetchBooksErrored(error))
    );
  }
};
