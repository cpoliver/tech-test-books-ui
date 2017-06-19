import axios from 'axios';

import {
  fetchBooksStarted, fetchBooksCompleted, fetchBooksErrored,
  fetchTotalStarted, fetchTotalCompleted, fetchTotalErrored
} from '../actions';

const SERVER_URL = 'http://localhost:5000/'; // TODO: Make dynamic & document how to change

export const fetchBooks = ({ itemsPerPage, page }) => (dispatch) => {
  dispatch(fetchBooksStarted({ itemsPerPage, page }));

  axios.get(`${SERVER_URL}/books?itemsPerPage=${itemsPerPage}&page=${page}`).then(
    books => dispatch(fetchBooksCompleted(books.data)),
    error => dispatch(fetchBooksErrored(error))
  );
};

export const fetchTotal = () => (dispatch) => {
  dispatch(fetchTotalStarted());

  axios.get(`${SERVER_URL}/books/count`).then(
    total => dispatch(fetchTotalCompleted(total.data)),
    error => dispatch(fetchTotalErrored(error))
  );
};
