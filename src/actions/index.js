import { FETCH_BOOKS } from './types';

export const fetchBooks = (searchParams) => ({ type: FETCH_BOOKS, searchParams });
