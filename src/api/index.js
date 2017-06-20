import axios from 'axios';
import { any, isNil, join, map, pipe, reject, toPairs } from 'ramda';

const SERVER_URL = 'http://localhost:5000'; // TODO: Make dynamic & document how to change

const objectToQueryString = pipe(toPairs, reject(any(isNil)), map(join('=')), join('&'));

const stringifyParams = ({ itemsPerPage, page, sort = {}, filter = {} }) => {
  return objectToQueryString({
    itemsPerPage,
    page,
    sort: JSON.stringify(sort),
    filter: JSON.stringify(filter)
  });
};

export const fetchBooks = ({ itemsPerPage, page, sort, filter }) => () => {
  const params = stringifyParams({ itemsPerPage, page, sort, filter});
  return axios.get(`${SERVER_URL}/books?${params}`);
};

export const fetchTotal = ({ filter }) => () => {
  const params = stringifyParams({ filter });
  return axios.get(`${SERVER_URL}/books/count?${params}`);
};
