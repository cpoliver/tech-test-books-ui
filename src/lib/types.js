import PropTypes from 'prop-types';

import { GENDERS_LOWERCASE, GENRES_LOWERCASE, ITEMS_PER_PAGE_OPTIONS } from './constants';

export const genderType = PropTypes.oneOf(GENDERS_LOWERCASE);

export const authorType = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  gender: genderType,
  surname: PropTypes.string.isRequired
});

export const bookType = {
  _id: PropTypes.string.isRequired,
  author: authorType,
  genre: PropTypes.oneOf(GENRES_LOWERCASE).isRequired,
  publishedOn: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export const bookShape = PropTypes.shape(bookType);

export const searchParamsType = PropTypes.shape({
  itemsPerPage: PropTypes.oneOf(ITEMS_PER_PAGE_OPTIONS),
  page: PropTypes.number,
  filter: PropTypes.object,
  sort: PropTypes.object
});

export const offerShape = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
