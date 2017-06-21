import { createSelector } from 'reselect';
import { any, isNil, join, map, pipe, reject, toPairs } from 'ramda';

const objectToQueryString = pipe(toPairs, reject(any(isNil)), map(join('=')), join('&'));

const createFilter = (key) => (values) => values.length > 0 ? ({ [key]: { $in: values } }) : {};

const createSort = (field, desc = false) => ({
  sort: { [field]: desc ? -1 : 1 }
});

const stringifyParams = ({ itemsPerPage, page, sort = {}, filters = {} }) => objectToQueryString({
  itemsPerPage,
  page,
  sort: JSON.stringify(sort), //createSort(sort)
  filter: JSON.stringify(createFilter('genre')(filters))
});

export const isLoadingSelector = (state) => state.bookList.isLoading;

export const booksSelector = (state) => state.bookList.books;
export const totalBooksSelector = (state) => state.bookList.total;

export const searchParamsSelector = (state) => state.search;
export const queryStringSelector = (state) => stringifyParams(state.search);

export const totalPagesSelector = createSelector(
  totalBooksSelector,
  searchParamsSelector,
  (totalBooks, { itemsPerPage }) => Math.ceil(totalBooks / itemsPerPage)
);
