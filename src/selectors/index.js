import { createSelector } from 'reselect';

export const isLoadingSelector = (state) => state.bookList.isLoading;

export const booksSelector = (state) => state.bookList.books;
export const totalBooksSelector = (state) => state.bookList.total;

export const searchParamsSelector = (state) => state.search;
export const filterSelector = (state) => state.search.filter;
export const sortSelector = (state) => state.search.sort;

export const totalPagesSelector = createSelector(
  totalBooksSelector,
  searchParamsSelector,
  (totalBooks, { itemsPerPage }) => Math.ceil(totalBooks / itemsPerPage)
);
