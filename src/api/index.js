import axios from 'axios';
import { join, map, pipe, toPairs } from 'ramda';

const SERVER_URL = 'http://localhost:5000'; // TODO: Make dynamic & document how to change

const stringifyParams = ({ itemsPerPage, page, sort, filter }) => {
  return pipe(toPairs, map(join('=')), join('&'))({
    itemsPerPage,
    page,
    sort: JSON.stringify(sort),
    filter: JSON.stringify(filter)
  });
};

export const fetchBooks = ({ itemsPerPage, page, sort = {}, filter = {} }) => () => {
  const params = stringifyParams({ itemsPerPage, page, sort, filter});
  return axios.get(`${SERVER_URL}/books?${params}`);
};

export const fetchTotal = ({ filter }) => {
  const params = stringifyParams({ filter });
  return axios.get(`${SERVER_URL}/books/count?${params}`);
};
