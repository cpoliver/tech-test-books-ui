import { createSelector } from 'reselect';

export const booksSelector = (state) => state.bookList.books;
export const totalBooksSelector = (state) => state.bookList.totalBooks;

export const searchParamsSelector = (state) => state.bookList.searchParams;
export const filterSelector = (state) => state.bookList.searchParams.filter;
export const sortSelector = (state) => state.bookList.searchParams.sort;

export const totalPagesSelector = createSelector(
  totalBooksSelector,
  searchParamsSelector,
  (totalBooks, { itemsPerPage }) => {
    console.log(`totalBooks: ${totalBooks} | itemsPerPage: ${itemsPerPage}`)
    return Math.ceil(totalBooks / itemsPerPage)
  }
);
