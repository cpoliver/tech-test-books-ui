import { createSelector } from 'reselect';

import { pageParamsSelector } from './searchSelectors';

export const booksSelector = ({ bookList }) => bookList.books;
export const isLoadingSelector = ({ bookList }) => bookList.isLoading;
export const totalBooksSelector = ({ bookList }) => bookList.total;

export const totalPagesSelector = createSelector(
  totalBooksSelector,
  pageParamsSelector,
  (totalBooks, { itemsPerPage }) => Math.ceil(totalBooks / itemsPerPage)
);
