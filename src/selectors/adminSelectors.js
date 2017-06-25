import { createSelector } from 'reselect';

import { totalBooksSelector } from './bookListSelectors'

export const adminSelector = ({ admin }) => admin;
export const totalToAddSelector = ({ admin }) => Math.pow(10, admin.totalToAdd);

export const adminModalSelector = createSelector(
  adminSelector,
  totalBooksSelector,
  (admin, totalBooks) => ({ ...admin, totalBooks })
);
