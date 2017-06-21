import { createSelector } from 'reselect';
import {
  any, complement, equals, filter, fromPairs, isEmpty, isNil, join, map, mapObjIndexed, pipe, reject, toPairs
} from 'ramda';

const stringifyValue = ([k, v]) => ([k, JSON.stringify(v)]);
const objectToQueryString = pipe(toPairs, reject(any(isNil)), map(pipe(stringifyValue, join('='))), join('&'));
const formatFilter = (options) => options.length > 0 ? ({ $in: options }) : [];

export const booksSelector = ({ bookList }) => bookList.books;
export const isLoadingSelector = ({ bookList }) => bookList.isLoading;
export const totalBooksSelector = ({ bookList }) => bookList.total;

export const searchParamsSelector = ({ search }) => search;
export const pageParamsSelector = ({ search }) => ({ itemsPerPage: search.itemsPerPage, page: search.page });
export const activeFilterSelector = ({ search }) => fromPairs(filter(([k, v]) => complement(isEmpty)(v), toPairs(search.filter)));
export const sortSelector = ({ search }) => ({ [search.sort.property]: search.sort.direction });

export const filterSelector = createSelector(
  activeFilterSelector,
  (activeFilters) => mapObjIndexed(formatFilter, activeFilters)
);

export const queryStringSelector = createSelector(
  pageParamsSelector,
  filterSelector,
  sortSelector,
  ({ itemsPerPage, page }, filter, sort) => objectToQueryString({ itemsPerPage, page , sort, filter })
);

export const totalPagesSelector = createSelector(
  totalBooksSelector,
  pageParamsSelector,
  (totalBooks, { itemsPerPage }) => Math.ceil(totalBooks / itemsPerPage)
);
